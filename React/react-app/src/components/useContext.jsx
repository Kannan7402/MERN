import React, { createContext } from 'react';
import Parent from './Parent';

// Create context
export const NameContext = createContext();

function UseContextDemo() {
  const name = "user";  // Name to be provided to the context

  return (
    <NameContext.Provider value={name}>  {/* Provide the name directly */}
      <Parent/>
    </NameContext.Provider>
  );
}

export default UseContextDemo;
