import React from 'react';
function Custom ({label,onClick})
{
return(
    <button onClick={onClick} style={{backgroundColor:'red',color:"white"}}>{label}</button>
)
}   
export default Custom
// import React from "react";
// const Custom =({label,onclick})=>
// {
//     return(
//         <button onClick={onClick}>{label}</button>
//     )
// }
