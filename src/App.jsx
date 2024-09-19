import React, { useState } from 'react';
import DisplayBox from './components/DisplayBox';
import MessageBox from './components/MessageBox';
import DisplayHeader from './components/DisplayHeader';

const transformations = [
  { name: "Word Counter", transform: (text) => `${text.split(' ').length}` },
  { name: "Text Reverser", transform: (text) => `${text.split('').reverse().join('')}` },
  { name: "To Uppercase", transform: (text) => `${text.toUpperCase()}` },
  { name: "To Lowercase", transform: (text) => `${text.toLowerCase()}` },
  { name: "Word Capitalizer", transform: (text) => `${text.replace(/\b\w/g, char => char.toUpperCase())}` },
];

const App = () => {
  const [messages, setMessages] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const sendMessage = (userMessage) => {
    if (userMessage.trim() === "") return;
    const timestamp = new Date().toLocaleString();
    const userMsg = { type: 'user', text: userMessage, timestamp };
    setMessages(prev => [...prev, userMsg]);
  
    setTimeout(() => {
      const randomTransformation = transformations[Math.floor(Math.random() * transformations.length)];
      const botResponse = (
        <span style={{alignItems: "center"}}>
          <i className="fas fa-robot"></i>   <b>{randomTransformation.name}</b><br /> <br />{randomTransformation.transform(userMessage)}
        </span>
      );
      
      
      const botMsg = { type: 'bot', text: botResponse, timestamp: new Date().toLocaleString() };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };
  

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`chat-app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <DisplayHeader toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
      <DisplayBox messages={messages} />
      <MessageBox sendMessage={sendMessage} />
    </div>
  );
};

export default App;
