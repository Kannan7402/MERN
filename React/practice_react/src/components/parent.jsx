import React from 'react'
import Child from './child'
function Parent()
{
    const data = 'im kannan';
    return(
        <>
        <h1>im parent</h1>
        <Child name = {data}/>
        </>
    )
}
export default Parent