import React,{useState} from 'react'
function Login()
{
    const[isLoggedIn ,setisLoggedIn] = useState(false);
    {
       return(
            <>
                <button onClick={()=>setisLoggedIn(true)}>login</button>
                <button onClick={()=>setisLoggedIn(false)}>log off</button>
                {isLoggedIn?
                <h1>Welcome</h1>:
                <h1>Login first</h1>}
            </>
       );
    }
}
export default Login 