import React,{useReducer} from "react";
const initialState = 0;
function reducer(state,action)
{

  switch(action.type) 
  {
    case 'increment' :
      return state+1;
      case 'decrement' :
        return state-1;
      case 'addbyvalue':
        return state + action.payload
        default :
        return state;
  }
}
 function Usereducer ()
 {

  const [state,dispatch]=useReducer(reducer,initialState);
  return(
    <>
    {state}
    <button onClick={()=>(dispatch({type:'increment'}))}>add</button>
    <button onClick={()=>(dispatch({type:'decrement'}))}>delete</button>
    <button onClick={()=>(dispatch({type:'addbyvalue',payload:10}))}>addbyvalue</button>
    </>
  )
 }
 export default Usereducer