import React, { useState } from 'react';
import UserInput from './UserInput';

const MessageBox = ({ sendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="message-box">
      <UserInput value={inputValue} onChange={setInputValue} onSend={handleSend} />
    </div>
  );
};

export default MessageBox;
