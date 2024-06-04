import React from "react";

const ChatMessage = ({ id, imageUrl, name, message }) => {
  return (
    <div className="flex items-center">
      <img src={imageUrl} alt="user" className="h-10 w-10 rounded-full" />
      <span className="font-bold pr-4">{name}</span>
      <p className="pt-4">{message}</p>
    </div>
  );
};

export default ChatMessage;
