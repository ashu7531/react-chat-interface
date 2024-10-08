import React from 'react';

const UserMessage = ({ message }) => {
  const getTime = () => {
    const date = new Date(message.timestamp);
    try {
      // Preferred way of formatting the time
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // HH:MM format
    } catch (e) {
      // Fallback in case the browser doesn't support `toLocaleTimeString`
      return `${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
    }
  };

  return (
    <div className="message user-message">
      <p>{message.text}</p>
      <span className="message-time">{getTime()}</span>
    </div>
  );
};

export default UserMessage;
