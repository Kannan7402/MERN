import React from 'react'
function List ()
{
    const person = ['kannan',22];
    return(
        <ul>
            {person.map((per,ind)=>
            (
                <li key = {ind}>{per}</li>
            )
            )}
        </ul>
    )
}
export default List;