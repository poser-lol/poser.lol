import React, { useState, useEffect } from "react";

export function App() {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 10);
      }, 10);
      setIntervalId(id);
    } else if (!isRunning && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);

  return (
    <div>
      <h1>Hello Dokyung! 🛹</h1>
      <small>This is a React app 헤헤</small>
      <p>Seconds elapsed: {(milliseconds / 1000).toFixed(2)}</p>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
    </div>
  );
}
