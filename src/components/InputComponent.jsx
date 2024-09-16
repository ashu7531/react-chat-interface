import React, { useState } from "react";

function InputComponent({ onSendMessage }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        onKeyDown={(e) => (e.key === "Enter" ? handleSend() : null)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default InputComponent;
