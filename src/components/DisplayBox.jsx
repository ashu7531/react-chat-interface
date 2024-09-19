import UserMessage from './UserMessage';
import BotMessage from './BotMessage';
import React, { useEffect, useRef } from 'react';

const DisplayBox = ({ messages }) => {
  const chatEndRef = useRef(null);

  const getDate = () => {
    if (messages.length > 0) {
      const firstMessage = messages[0];
      const date = new Date(firstMessage.timestamp);
      try {
        return date.toLocaleDateString(); // Default locale
      } catch (e) {
        // Fallback if `toLocaleDateString` fails
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      }
    }
    return '';
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="display-box">
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
