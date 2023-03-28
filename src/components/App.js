
import '../styles/App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [countdown, setCountdown] = useState(0);
  const [timer, setTimer] = useState(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (countdown === 0 && timer) {
      clearInterval(timer);
      setTimer(null);
    }
  }, [countdown, timer]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const value = Math.floor(parseFloat(inputValue));
      if (isNaN(value) || value < 0) {
        setCountdown(0);
        if (timer) {
          clearInterval(timer);
          setTimer(null);
        }
      } else {
        setCountdown(value);
        if (timer) {
          clearInterval(timer);
        }
        setTimer(setInterval(() => setCountdown((c) => c - 1), 1000));
      }
      setInputValue('');
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" id="timeCount" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} />
      <div id="current-time">{countdown}</div>
    </div>
  );
}

export default App;
