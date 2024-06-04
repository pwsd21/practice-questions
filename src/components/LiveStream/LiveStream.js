import React from "react";
import VideoStream from "./VideoStream";
import ChatWindow from "./ChatWindow";

const LiveStream = () => {
  return (
    <div className="flex">
      <VideoStream />
      <ChatWindow />
    </div>
  );
};

export default LiveStream;
