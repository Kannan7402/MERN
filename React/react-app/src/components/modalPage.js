import {useState} from 'react';
function ModalPage(){
    const [isOpen,setStatus] = useState(false);
    return(
        <>
        <button onClick={()=>setStatus((prev)=>!prev)}>click</button>
        {isOpen?<p>hello</p>:<p>click the button</p>}
        </>
    );
}
export default ModalPage;