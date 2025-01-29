import React from "react";
import Child from './Child'
function Parent ()
{
    const user = {
        name : 'KANNAN',
        age  : 22
    }
    return( 
        <Child value={user}/>
    )
}
export default Parent;
