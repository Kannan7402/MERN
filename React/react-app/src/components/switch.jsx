import React,{useState} from "react";
function Day ()
{
    let input = document.getElementById('input');
    const [date,setDate] = useState(input);
    function Handleclick(i){
    switch(i)
    {
        case '1':
            
                setDate("monday") ; 
                break;
            case '2':
            
            setDate("tuesday") ;
                break;
            case '3':
            
            setDate("wednesday") ;
                break;
            case '4':
            
            setDate("thursday") ;
                break;
            case '5':
            
            setDate("friday") ;
                break;
            case '6':
            
            setDate("saturday") ;
                break;
            case '7':
            
            setDate("sunday") ;
                break;
        }
}
return(
    <>
    <label htmlFor="name">Date</label>
    <input type="text" id="input"onChange={(e)=>{Handleclick(e.target.value)}}></input>
    <p>{date}</p>
    </>
)
}
export default Day;
