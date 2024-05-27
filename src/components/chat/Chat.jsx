import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";

import { io } from "socket.io-client";

const socket = io.connect("http://localhost:3001", {
  cors: { origin: "*" },
});

export default function Chat() {
  const [message, setMessage] = useState([]);
  const messageInputRef = useRef(null);

  const handleSendMessage = () => {
    const message = messageInputRef.current.value;
    console.log(message);
    socket.emit("message", message);
    messageInputRef.current.value = ""; // 메시지 전송 후 입력 필드 초기화
  };

  socket.on("connect", () => {
    console.log("connect success...");
  });

  socket.on("msg:received", (message) => {
    console.log(message);
  });

  useEffect(() => {
    socket.on("message", (message) => {
      console.log("받은 메세지", message);
      setMessage((prev) => [...prev, message]);
    });
  }, []);

  return (
    <div className="relative w-full h-full ">
      {message}
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
