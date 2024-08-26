import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://pmjnfiqhiaxstnojglrq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtam5maXFoaWF4c3Rub2pnbHJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3MDI0ODQsImV4cCI6MjA0MDI3ODQ4NH0.QpboF3v-ZEUpnAE7GEvdt6UxXQBGrOaLe1AQQMDHe6g",
);

export function App() {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(undefined);
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    getTestData();
  }, []);

  async function getTestData() {
    const { data } = await supabase.from("poser_test").select();
    setTestData(data);
  }

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 10);
      }, 10);
      setIntervalId(id);
    } else if (!isRunning && intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);

  return (
    <div>
      <h1>도경 안녕! 🛹</h1>
      <h1>크리스 안녕 ^^ </h1>
      <small> This is a React app 헤hehhhe </small>
      <p> Seconds elapsed: {(milliseconds / 1000).toFixed(2)} </p>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <p>Test data:</p>
      <ul>
        {testData.map((data) => (
          <li key={data.id}>{data.created_at}</li>
        ))}
      </ul>
    </div>
  );
}
