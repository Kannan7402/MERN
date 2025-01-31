
import React, { useReducer } from 'react';

function Usereducer() {
  const countReducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
    </>
  );
}

export default Usereducer;
