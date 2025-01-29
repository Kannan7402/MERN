import React, { useState, useEffect } from "react";
const Increase = () => {
  const [count, setCount] = useState(0);
  // useEffect(()=>
  // {
  //   console.log('count updated to '+ count);

  //     setCount(1000);

  //   console.log(count);
  //   return () =>
  //   {
  //     setCount(0);
  //     console.log(count);
  //     console.log('memory cleaned');
  //   }
  // },[count])
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
export default Increase;
