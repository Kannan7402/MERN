import { useState } from "react";
function useCounter ( initial = 0)
{
    const [count,setCount]=useState(initial);
    const increment =()=> setCount(count+1);
    const decrement =()=> setCount(count-1);
    const reset =()=> setCount(initial);
    return{
        count,increment , decrement, reset};
    };  
export default useCounter