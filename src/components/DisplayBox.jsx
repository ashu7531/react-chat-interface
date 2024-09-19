import UserMessage from './UserMessage';
import BotMessage from './BotMessage';
import React, { useEffect, useRef } from 'react';

const DisplayBox = ({ messages }) => {
  const chatEndRef = useRef(null);

  // Get the date from the first message
  const getDate = () => {
    if (messages.length > 0) {
      const firstMessage = messages[0];
      const date = new Date(firstMessage.timestamp);
      return date.toLocaleDateString(); // Format date as per your need
    }
    return '';
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="display-box">
      {/* Display the date once at the top */}
      {messages.length > 0 && (
        <div className="date-header-wrapper">
        <div className="divider"></div>
        <div className="date-header">
          <p>{getDate()}</p>
        </div>
        <div className="divider"></div>
      </div>
      )}

      {messages.map((msg, index) =>
        msg.type === 'user' ? (
          <UserMessage key={index} message={msg} />
        ) : (
          <BotMessage key={index} message={msg} />
        )
      )}

      <div ref={chatEndRef} />
    </div>
  );
};

export default DisplayBox;



