import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click Me</button>;
});

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); 

  return (
    <div>
      <h1>Count: {count}</h1>
      <input></input>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default UseCallback
