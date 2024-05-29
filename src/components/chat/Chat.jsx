import React, { useEffect, useRef, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";

import { io } from "socket.io-client";

const socket = io.connect("http://localhost:3001", {
  cors: { origin: "*" },
  autoConnect: true,
});

export default function Chat() {
  // TODO: url의 path에서 가져오기
  const invitationId = "665524e6c68f0422a6d70e7e";
  const userId = "6654125c801f4c8fbae888d6";
  const [messageList, setMessageList] = useState([]);
  const messageInputRef = useRef(null);

  const handleSendMessage = () => {
    const message = messageInputRef.current.value;
    socket.emit("room:msg", { roomId: invitationId, userId, message });
    messageInputRef.current.value = ""; // 메시지 전송 후 입력 필드 초기화
  };

  useEffect(() => {
    socket.emit("room:join", invitationId);
  }, []);

  useEffect(() => {
    socket.on("msg:received", (message) => {
      console.log("받은 메세지", message);
      setMessageList((prev) => [...prev, message]);
    });
    return () => {
      socket.off("msg:received");
    };
  }, []);

  return (
    <div className="relative w-full h-full ">
      {messageList.map((message, id) => (
        <div key={id}>{message}</div>
      ))}
      <div className="grid grid-cols-6 fixed bottom-0 left-0 right-0 h-14 bg-red-50 shadow-[rgba(0,0,15,0.1)_0px_0px_14px_0px]">
        <input
          type="text"
          ref={messageInputRef}
          placeholder="메세지 입력"
          className="h-full col-span-5 px-4"
        />
        <button
          onClick={handleSendMessage}
          className="col-span-1 flex justify-center items-center bg-theme1-primary text-darkGray"
        >
          <BsFillSendFill size={20} />
        </button>
      </div>
    </div>
  );
}
