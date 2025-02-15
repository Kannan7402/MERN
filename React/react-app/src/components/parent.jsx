import React, { useContext } from 'react';
import { NameContext } from './useContext'; 

function Parent()
 {
  const name = useContext(NameContext);

  console.log(name);  // This should log "kanna" to the console
  return <h1>I'm from Parent component, {name}</h1>;  
}

export default Parent;
