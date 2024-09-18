import UserMessage from './UserMessage';
import BotMessage from './BotMessage';
import React, { useEffect, useRef } from 'react';

const DisplayBox = ({ messages }) => {
  const chatEndRef = useRef(null);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="display-box">
      {messages.map((msg, index) =>
        msg.type === 'user' ? (
          <UserMessage key={index} message={msg.text} />
        ) : (
          <BotMessage key={index} message={msg.text} />
        )
      )}
      <div ref={chatEndRef} />
    </div>
  );
};

export default DisplayBox;





