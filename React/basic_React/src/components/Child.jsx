import React from 'react';
function Child({name,age})
{
    return(
        <div>
            <h1> {name}</h1>
            <p>{age}</p>
        </div>
    )
}
export default Child;