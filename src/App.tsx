import React, { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);

  return (
    <div>
      <h1>도경 안녕! 🛹</h1>
      <h1>크리스 안녕 ^^ </h1>
      <small>This is a React app 헤hehhhe</small>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}
