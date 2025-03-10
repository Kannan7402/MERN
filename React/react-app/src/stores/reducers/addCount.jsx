import React from "react";
import { increment,decrement } from "../actions/counterSlice";
import { useSelector,useDispatch } from "react-redux";
const Counter = ()=>
{
   const count =(state)=>state.counter.count;
   const countValue = useSelector(count);
   const dispatch=useDispatch();
   return(
    <>
    <button onClick={()=>dispatch(increment())}>add</button> 
    {countValue }
    <button onClick={()=>dispatch(decrement())}>delete</button>
    </>
   )
}
export default Counter