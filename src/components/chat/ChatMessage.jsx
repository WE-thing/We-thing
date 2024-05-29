import React from "react";

export default function ChatMessage({ message }) {
  const { _id, invitationId, userId, content, createdAt, updatedAt } = message;
  return (
    <div className="w-fit m-2 p-2 bg-theme1-primary rounded-lg">{content}</div>
  );
}
