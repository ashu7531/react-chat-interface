import UserMessage from './UserMessage';
import BotMessage from './BotMessage';
import React, { useEffect, useRef } from 'react';

const DisplayBox = ({ messages }) => {
  const chatEndRef = useRef(null);
  // this func is used to get the date
  const getDate = () => {
    if (messages.length > 0) {
      const firstMessage = messages[0];
      const date = new Date(firstMessage.timestamp);
      return date.toLocaleDateString();
    }
    return '';
  };
  // scrolling chat box
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="display-box">
      {messages.length > 0 && (
        <div className="date-header-wrapper">
        <div className="divider"></div>
        <div className="date-header">
        {/* // displaying  the date on header */}
          <p>{getDate()}</p> 
        </div>
        <div className="divider"></div>
      </div>
      )}
      {/* showing the messages for both user and bot */}
      {messages.map((msg, index) =>
        msg.type === 'user' ? (
          <UserMessage key={index} message={msg} /> // message user
        ) : (
          <BotMessage key={index} message={msg} /> // message bot
        )
      )}

      <div ref={chatEndRef} />
    </div>
  );
};

export default DisplayBox;



