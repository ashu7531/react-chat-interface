import React, { useState } from 'react';
import DisplayBox from './components/DisplayBox';
import MessageBox from './components/MessageBox';
import DisplayHeader from './components/DisplayHeader';

const transformations = [
  { name: "Count Words", transform: (text) => `Word count: ${text.split(' ').length}` },
  { name: "Reverse Text", transform: (text) => `Reversed: ${text.split('').reverse().join('')}` },
  { name: "Uppercase", transform: (text) => `Uppercase: ${text.toUpperCase()}` },
  { name: "Lowercase", transform: (text) => `Lowercase: ${text.toLowerCase()}` },
  { name: "Capitalize Each Word", transform: (text) => `Capitalized: ${text.replace(/\b\w/g, char => char.toUpperCase())}` },
];

const App = () => {
  const [messages, setMessages] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);  // Manage the theme state

  const sendMessage = (userMessage) => {
    if (userMessage.trim() === "") return;
    const timestamp = new Date().toLocaleString(); // Generate a readable timestamp
    const userMsg = { type: 'user', text: userMessage, timestamp };
    setMessages(prev => [...prev, userMsg]);
  
    setTimeout(() => {
      const randomTransformation = transformations[Math.floor(Math.random() * transformations.length)];
      const botResponse = `${randomTransformation.name}: ${randomTransformation.transform(userMessage)}`;
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
