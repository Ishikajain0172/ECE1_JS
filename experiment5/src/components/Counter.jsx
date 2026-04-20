import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>React Counter Application</h1>

      <div className="count">
        <h2>Count: {count}</h2>
      </div>

      <div className="buttons">
        <button onClick={increment}>Increment (+)</button>
        <button onClick={decrement}>Decrement (-)</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
