import React, {useCallback, useState}from 'react'
function UseCallback()
{
    const [count,setCount]=useState(0);
    const [input,setInput]=useState('');
   const handleClick = useCallback(()=>
{
   setCount(count+1);
},[count])
    return(
        <>
        <button onClick={handleClick}>add</button>
        <label htmlFor='Name'>
        <input type='text' value = {input}onChange={(e)=>
            {
                setInput(e.target.value)     
            }
        }></input> 
        </label>
        </>
    )
}
export default UseCallback;