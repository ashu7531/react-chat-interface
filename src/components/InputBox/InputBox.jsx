import React, { useState } from 'react';

const InputBox = ({ addMessage }) => {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputValue.trim()) return;
        const newMessage = {
            id: Date.now(), 
            sender: 'You', 
            content: inputValue,
            timestamp: new Date().toLocaleTimeString()
        };
        addMessage(newMessage);
        setInputValue("");
    };

    return (
        <div className="input-box">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default InputBox;
