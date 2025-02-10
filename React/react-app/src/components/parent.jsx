import React, { useContext } from 'react';
import { NameContext } from './useContext'; // Make sure this import path is correct

function Parent() {
  const name = useContext(NameContext); 

  console.log(name);  // This should log "kanna" to the console
  return <h1>I'm  from Parent component {name}</h1>;  // This should render "I'm kanna"
}
export default Parent;