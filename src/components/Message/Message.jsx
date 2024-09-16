
import React from 'react';

const Message = ({ message }) => {
    const { sender, content, timestamp } = message;

    return (
        <div className="message">
            <div className="message-header">
                <strong>{sender}</strong> <span>{timestamp}</span>
            </div>
            <div className="message-content">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default Message;
