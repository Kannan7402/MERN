import React from "react";
function Dashboard()
{
    const user1 = JSON.parse(localStorage.getItem('User'));
    return(
        <>
        <h1>{user1.userName}</h1>
        <h2>{user1.Email}</h2>
        </>
    )
}
export default Dashboard

