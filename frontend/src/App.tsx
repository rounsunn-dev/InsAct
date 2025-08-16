import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backendMessage, setBackendMessage] = useState<string>('Loading...');

  useEffect(() => {
    // Call your FastAPI backend
    fetch('http://localhost:8000/')
      .then(response => response.json())
      .then(data => {
        setBackendMessage(data.message);
      })
      .catch(error => {
        setBackendMessage('Error connecting to backend');
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>InsAct - AI Storytelling Platform</h1>
        <p>Backend Status: {backendMessage}</p>
      </header>
    </div>
  );
}

export default App;