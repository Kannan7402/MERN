import React, { useState, useEffect } from 'react';
import api from '../core/api/api';
function AxiosExample() {
  const [data, setData] = useState([]);
  useEffect(() => {
    api.get('/posts')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      <ul>
        {data.map((item) =>
        (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}
export default AxiosExample