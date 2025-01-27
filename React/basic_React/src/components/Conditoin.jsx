import React,{useState} from 'react'
function Login()
{
    const[isLoggedin ,setisLoggedin] = useState(false);
    {
       return(
            <>
                <button onClick={()=>setisLoggedin(true)}>login</button>
                {isLoggedin?
                <h1>Welcome</h1>:
                <h1>Login first</h1>}
            </>
       );
    }
}
export default Login 