import React, { useState } from "react";
import ChatBoxComponent from "./components/ChatBoxComponent";
import InputComponent from "./components/InputComponent";

function App() {
  const [messages, setMessages] = useState([]);

  // Text transformation functions
  const transformations = [
    {
      name: "Uppercase",
      func: (text) => text.toUpperCase(),
    },
    {
      name: "Lowercase",
      func: (text) => text.toLowerCase(),
    },
    {
      name: "Reverse Text",
      func: (text) => text.split("").reverse().join(""),
    },
    {
      name: "Count Characters",
      func: (text) => `Character count: ${text.length}`,
    },
    {
      name: "Remove Vowels",
      func: (text) => text.replace(/[aeiou]/gi, ""),
    },
  ];

  // Function to handle sending message
  const handleSendMessage = (message) => {
    if (message.trim() === "") return;

    // Add user's message to the chat history
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, sender: "user" },
    ]);

    // Simulate bot response with delay
    setTimeout(() => {
      // Pick a random transformation
      const randomTransformation =
        transformations[Math.floor(Math.random() * transformations.length)];
      const transformedMessage = randomTransformation.func(message);

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: `Bot (${randomTransformation.name}): ${transformedMessage}`,
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <ChatBoxComponent messages={messages} />
      <InputComponent onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
