import React,{useState} from "react";
function Switch ()
{
    const [data,setData]=useState('');
    const [result,setResult]=useState('');
    function handleChange(event)
    {
        setData(event.target.value);
    }
    function handleClick()
    {
        switch(data){
            case 'ok':
                setResult('ok');
                break;
                case 'not ok' : 
                setResult('not ok');
                break;
                default :
                setResult(' enter ok or not ok');
                break;
        }
    }
    return(
        <>
        <input type="text" onChange={handleChange}
         placeholder="type ok or not ok"></input>
        <button onClick={handleClick}> click</button>
        <p>{result}</p>
        </>
    )
}
export default Switch