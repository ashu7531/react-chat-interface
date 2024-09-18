import React from 'react';

const UserMessage = ({ message }) => {
  return (
    <div className="message user-message">
      <p>{message}</p>
    </div>
  );
};

export default UserMessage;
