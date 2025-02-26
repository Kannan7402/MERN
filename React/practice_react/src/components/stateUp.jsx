import React,{useState} from "react";
function Lift ()
{
    const [count,setCount]= useState(0);
    function reset()
    {
        setCount(0);
    }

    const Child1 = ()=>
    {
        function handleClick()
        {
        setCount(count+1);
        }
        return(
            <>
            <button onClick={handleClick}>click</button>
            <p>{count}</p>
            </>
        )
    }
    const Child2 = ()=>
        {
            function handleClick()
            {
            setCount(count+1);
            }
            return(
                <>
                <button onClick={handleClick}>click</button>
                <p>{count}</p>
                </>
            )
        }

        return(
            <>
            <Child1/>
            <Child2/>
            <button onClick={reset}>reset</button>
            </>
        )
}
export default Lift