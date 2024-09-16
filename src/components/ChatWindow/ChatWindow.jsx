import React from 'react';
import MessageList from '/src/components/MessageList/MessageList';

const ChatWindow = () => {
    return (
        <div className="chat-window">
            <div className="chat-header">
                <h3>Silly Programming Chat</h3>
                <p>Welcome to Silly Programming ChatBot Universe</p>
            </div>
            <MessageList />
        </div>
    );
}

export default ChatWindow;
