import React, { useState } from 'react';
import Message from '/src/components/Message/Message';
import InputBox from '/src/components/InputBox/InputBox';

const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const addMessage = (newMessage) => {
        setMessages([...messages, newMessage]);
    };
    return (
        <div className="message-list">
            {messages.map(message => (
                <Message key={message.id} message={message} />
            ))}
            <InputBox addMessage={addMessage} />
        </div>
    );
}

export default MessageList;
