import React, { useEffect, useState } from "react";

export default function ChatMessage({ message }) {
  const { _id, invitationId, userId, roleId, content, createdAt, updatedAt } =
    message;
  const [messageType, setMessageType] = useState("하객");

  useEffect(() => {
    setMessageType(roleId === 3 ? "하객" : "공지");
  }, [message]);

  return (
    <>
      {messageType === "하객" ? (
        <div className="w-fit m-2 p-2 bg-theme1-primary rounded-lg">
          {content}
        </div>
      ) : (
        <div className="w-fit m-2 p-2 bg-darkGray text-white rounded-lg">
          {content}
        </div>
      )}
    </>
  );
}
