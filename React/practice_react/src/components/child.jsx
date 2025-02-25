import React from "react";
function Child(props)
{
 return(
    <>
    <h1>im child {props.name}</h1>
    <p>{props.age}</p>
    </>
 )
}
export default Child
