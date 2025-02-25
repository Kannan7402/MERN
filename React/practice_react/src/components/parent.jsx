import React from 'react'
import Child from './child'
function Parent()
{
    const data = 'im kannan';
    const age = 22;
    return(
        <>
        <h1>im parent</h1>
        <Child name = {data} age = {age}/>
        </>
    )
}
export default Parent