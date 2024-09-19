import React from 'react';

const UserMessage = ({ message }) => {
  const getTime = () => {
    const date = new Date(message.timestamp);
<<<<<<< HEAD
    try {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (e) {
      return `${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
    }
=======
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // this will display time in HH:MM format
>>>>>>> 404c651b71b9abf51497de9df84066ecbec11cc9
  };

  return (
    <div className="message user-message">
      <p>{message.text}</p>
      <span className="message-time">{getTime()}</span>
    </div>
  );
};

export default UserMessage;
