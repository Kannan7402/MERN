import React from 'react'
function List ()
{
    const persons = ['kannan',22];
    return(
        <ul>
            {persons.map((person,index)=>
            (
                <li key = {index}>{person}</li>
            )
            )}
        </ul>
    )
}
export default List;