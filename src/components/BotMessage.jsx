import React from 'react';

const BotMessage = ({ message }) => {
  const getTime = () => {
    const date = new Date(message.timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="message bot-message">
      <p>{message.text}</p>
      <span className="message-time">{getTime()}</span>
    </div>
  );
};

export default BotMessage;


