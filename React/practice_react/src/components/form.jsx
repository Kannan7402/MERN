import React,{useState} from "react";
function Form()
{
    const [item,setItem]=useState('')
    function Data()
    {
        alert(item);
    }
    return(
        <>
        <input type="text" onChange={(e)=>setItem(e.target.value)}>
        </input>
        <button onClick={Data}>submit</button>
        </>
    )
}
export default Form