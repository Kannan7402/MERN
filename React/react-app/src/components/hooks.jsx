import React, { useEffect, useState } from "react";
const Increase = () => {
  const [count, setCount] = useState(0);
  // useEffect(()=>
  // {
  //   console.log('count updated to '+ count);
  //   setCount(100);
  //   console.log(count);
  //   return () =>
  //   {
  //     setCount(0);
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
