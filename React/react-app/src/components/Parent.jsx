import React, { useState } from 'react';
import MyContext from './cutomElements';
import Child from './Child';

function Parent() {
  const [user, setUser] = useState({ name: 'John', age: 25 });

  return (
    <MyContext.Provider value={{ user, setUser }}>
      <Child />
    </MyContext.Provider>
  );
}

export default Parent;
