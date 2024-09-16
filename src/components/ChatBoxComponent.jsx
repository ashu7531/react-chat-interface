import React, { useEffect, useRef } from "react";

function ChatBoxComponent({ messages }) {
  const chatRef = useRef(null);

  // Scroll to the bottom when a new message is added
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className="chat-box" ref={chatRef}>
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
          {msg.text}
        </div>
      ))}
    </div>
  );
}

export default ChatBoxComponent;
