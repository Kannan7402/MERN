import React, {useState } from 'react';

function Usememo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Perform the expensive calculation on each render
  const expensiveCalculation=()=>
    {
    console.log('Performing expensive calculation...');
    let result = 0;
    for (let i = 0; i < 1000; i++) {
      result += i;
    }
    return result;
  };

  return (
    <div>
      <h1>Expensive Calculation Example</h1>
      <div>
        <p>Expensive Calculation Result: {expensiveCalculation()}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something"
        />
      </div>
    </div>
  );
}

export default Usememo;
