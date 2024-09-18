import React from 'react';

const UserInput = ({ value, onChange, onSend }) => {
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
      <button onClick={onSend}>Send</button>
    </div>
  );
};

export default UserInput;
