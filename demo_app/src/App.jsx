import React, { useState, useCallback } from 'react';

function Child({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Memoize the callback
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>useCallback Example</h1>
      <p>Count: {count}</p>
      <Child onClick={handleClick} />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}


import React, { useState, useMemo } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Expensive calculation
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    return num * 2;
  };

  // Memoize the calculation
  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Count: {count}</p>
      <p>Calculated Value: {memoizedValue}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}
