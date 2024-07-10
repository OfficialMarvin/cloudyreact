import React, { useState } from 'react';
import './App.css';
import { Client } from "@gradio/client";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [seedValue, setSeedValue] = useState(0);
  const [chatLog, setChatLog] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeedValue(parseInt(event.target.value));
  };

  const handleSubmit = async () => {
    const app = await Client.connect("quami/cloudy-mini");
    const result = await app.predict("/predict_1", [inputValue, seedValue]);
    setChatLog([...chatLog, `User: ${inputValue}`, `Cloudy: ${result.data}`]);
    setInputValue('');
    setSeedValue(0);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Welcome to CloudyAI</h1>
      </div>
      <div className="chat-container">
        {chatLog.map((message, index) => (
          <div key={index} className="speech-bubble">
            {message}
          </div>
        ))}
        <img src={`src/assets/cloudy0.png`} alt="Cloudy" />
      </div>
      <div className="input-container">
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Type your message..." />
        <input type="range" min="0" max="999999" value={seedValue} onChange={handleSeedChange} />
        <button onClick={handleSubmit}>Send</button>
      </div>
      <div className="content">
        <p>
          CloudyAI bridges AI models with blockchain smart contracts, creating a seamless, secure, and efficient ecosystem. Experience the power of AI and blockchain integration with our WebXR interface.
        </p>
        <p>
          Just like the water cycle on Earth, our platform relies on H2O to function. Power your projects with CloudyAI and join the future of technology.
        </p>
      </div>
    </div>
  );
}

export default App;
