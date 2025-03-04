import React, { useEffect, useState } from "react";
import axios from 'axios';
function Fetchdata() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  function handleChange(e) {
    const userInput = e.target.value;
    setInput(userInput);

    const filteredList = data.filter(item => 
      item.title.toLowerCase().includes(userInput.toLowerCase())
    );
    
    setList(filteredList,...data);
  }
  
  return (
    <>
      <input 
        type="text"  
        value={input}
        onChange={handleChange} 
      />
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Fetchdata;


