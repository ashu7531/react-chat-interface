import React from 'react';

const BotMessage = ({ message }) => {
  const getTime = () => {
    const date = new Date(message.timestamp);
    try {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (e) {
      return `${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
    }
  };

  return (
    <div className="message bot-message">
      <p>{message.text}</p>
      <span className="message-time">{getTime()}</span> {/* showing the time */}
    </div>
  );
};

export default BotMessage;
