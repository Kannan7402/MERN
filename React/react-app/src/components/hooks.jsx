import React, { useEffect, useState} from "react";
const Increase = () => {
  const [count, setCount] = useState(0);
 useEffect(()=>
{
  console.log('updated count',count);
  return()=>

    {
      console.log('memory cleaned ',count);
    };
  }, [count]);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
export default Increase;
