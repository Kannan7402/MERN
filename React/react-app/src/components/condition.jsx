import React, { useState } from 'react';

function Login() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(0); // First state update
    setCount(count + 1); // Second state update
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Login;

