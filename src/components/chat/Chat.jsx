import React, { useEffect, useRef, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

import { io } from "socket.io-client";
import { getMessageList } from "../../lib/apis/chat";
import ChatMessage from "./ChatMessage";
import useAuth from "../../hook/useAuth";

// const socket = io.connect("http://localhost:3001", {
const socket = io.connect("http://172.31.6.51:3001", {
  cors: { origin: "*" },
  autoConnect: true,
});

export default function Chat() {
  const { id: invitationId } = useParams();
  const { token, handleShow, LoginModal } = useAuth();
  const [messageList, setMessageList] = useState([]);
  const messageListRef = useRef(null);
  const messageInputRef = useRef(null);

  const handleSendMessage = () => {
    const message = messageInputRef.current.value;
    socket.emit("room:msg", { roomId: invitationId, token, message });
    messageInputRef.current.value = "";
  };

  const handleLogin = async () => {
    if (!token) {
      handleShow();
      messageInputRef.current.blur();
    }
  };

  useEffect(() => {
    // 입력후 새로운 메세지가 보이도록 스크롤을 아래로 내려준다
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  }, [messageList]);

  useEffect(() => {
    socket.emit("room:join", invitationId);
    getMessageList({ invitationId }).then((result) => {
      setMessageList(result);
    });
  }, []);

  useEffect(() => {
    socket.on("msg:received", (message) => {
      setMessageList((prev) => [...prev, message]);
    });
    return () => {
      socket.off("msg:received");
    };
  }, []);

  return (
    <div className=" w-full h-full overflow-y-hidden">
      <div
        ref={messageListRef}
        className="w-full h-[calc(100vh-72px-56px)] overflow-y-auto"
      >
        {messageList.map((message, id) => (
          <ChatMessage key={id} message={message} />
        ))}
      </div>
      <div className=" max-w-[450px] mx-auto grid grid-cols-6 fixed bottom-0 left-0 right-0 h-14 bg-red-50 shadow-[rgba(0,0,15,0.1)_0px_0px_14px_0px]">
        <input
          type="text"
          ref={messageInputRef}
          placeholder="메세지 입력"
          className="h-full col-span-5 px-4"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
          onFocus={handleLogin}
        />
        <button
          onClick={handleSendMessage}
          className="col-span-1 flex justify-center items-center bg-theme1-primary text-darkGray"
        >
          <BsFillSendFill size={20} />
        </button>
      </div>
      <LoginModal />
    </div>
  );
}
