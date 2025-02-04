import React from 'react'
function List ()
{
    const persons = [{name:'kannan',age:22},
        {name:'bala',age:22},
        {name:'rathesh',age:23}
    ];
    return(
        <ul>
            {persons.map((person,index)=>
            (
                <li key = {index}>{person.name} & {person.age}</li>
            )
            )}
        </ul>
    )
}
export default List;
