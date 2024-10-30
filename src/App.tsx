import React, { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}
