import React from 'react';
function Child({value})
{
    return(
        <div>
            {Object.values(value).map((current,index)=>(
                <>
                {console.log(current)}
                    <p key={index}>{current}</p>
                </>
            ))}
        </div>
    )
}
export default Child;