import React, { createContext } from 'react';
import Parent from './parent';  

export const NameContext = createContext();

function UseContextDemo() {
  const name = "kanna"; 

  return (
    <NameContext.Provider value={name}> 
      <Parent />
    </NameContext.Provider>
  );
} 

export default UseContextDemo;
