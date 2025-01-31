import React from 'react';
import Custom from './cutomElements';
import useCounter from './customHooks';
function Child() {
  const{count,increment,decrement,reset}=useCounter(0);
    function handleClick ()
        {
            alert('button clicked')
        }
  return (
    <>
    <h1>Custom element</h1>
    <Custom label={'click me'} onClick={handleClick}></Custom>
    <h2>Custom hook</h2>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset</button>
    <p>{count}</p>
    </>
  )
}

export default Child
