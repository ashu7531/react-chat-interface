import React from 'react';

const UserMessage = ({ message }) => {
  const getTime = () => {
    const date = new Date(message.timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // this will display time in HH:MM format
  };

  return (
    <div className="message user-message">
      <p>{message.text}</p>
      <span className="message-time">{getTime()}</span>
    </div>
  );
};

export default UserMessage;

