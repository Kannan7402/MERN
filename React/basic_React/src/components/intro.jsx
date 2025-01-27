import React from 'react'
const Displayof = ({name}) =>
{
    // jsx 
    //console.log(props)
    return(
        <div>
            <h1 id = 'jsId' className='jsclass'>jsx {name}</h1>
        </div>
    )
    // without jsx
    // return React.createElement('div',{id : jsId,className :jsclass},<h1>js</h1>)
}   
export default Displayof

/* class - className
for - htmlFor
tabindex - tabIndex
onclick - onClick
*/