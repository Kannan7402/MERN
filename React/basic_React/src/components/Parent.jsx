import React from "react";
import Child from './Child'
function Parent ()
{
    const user = {
        name : 'props',
        age  : 22
    }
    return(
        <Child name ={user.name}
        age = {user.age}/>
    )
}
export default Parent;
