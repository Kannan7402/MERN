import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AxiosExample() {
  const [data, setData] = useState([]); 

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setData(res.data))  
      .catch(err => console.log(err)); 
  }, []); 

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li> 
      ))}
    </ul>
  );
}

export default AxiosExample;
