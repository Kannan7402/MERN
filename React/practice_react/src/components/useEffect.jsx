import React,{useState,useEffect} from 'react'
import axios from 'axios'
function List()
{
    const [data,setData]= useState([])
    useEffect(()=>
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>setData(res.data))
    },[data])

    return(
        <ul>{data.map((data,index)=>
        (
            <li key={index}>{data.id}</li>
        ))}</ul>
    )

    /* 
    1.useEffect(()=>
        {
        ...
        },[])

        2. useEffect(()=>
        {
           ...
           return()
           {
           ///memory cleanup
           } 
        },[])
    */
}
export default List
