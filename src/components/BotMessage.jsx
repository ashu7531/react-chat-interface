import React from 'react';

const BotMessage = ({ message }) => {
  return (
    <div className="message bot-message">
      <p>{message}</p>
    </div>
  );
};

export default BotMessage;
