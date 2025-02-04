import React, { createContext } from 'react';
import Parent from './Parent';
import App from '../App';
import { Route } from 'react-router-dom';
import Child from './Child';

// Create context
export const NameContext = createContext();

function UseContextDemo() {
  const name = "kanna";  // Name to be provided to the context

  return (
    <NameContext.Provider value={name}>  {/* Provide the name directly */}
      <Parent/>
    </NameContext.Provider>
  );
}

export default UseContextDemo;
