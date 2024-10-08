import React from 'react';

const UserInput = ({ value, onChange, onSend }) => {
  // this is func to handle the "Enter" keyword press to send the message
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSend();
    }
  };

  return (
    <div className="user-input">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type a message..."
      />
      <i class="fas fa-paper-plane send-icon" onClick={onSend}></i>
    </div>
  );
};

export default UserInput;
