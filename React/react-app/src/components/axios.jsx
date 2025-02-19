import React, { useState, useEffect } from 'react';
import api from '../core/api/api';
import { useAuth } from './authetication';

function AxiosExample() {
  const [data, setData] = useState([]);
  const { user, loading, error } = useAuth(); // Fixed destructuring
  useEffect(() => {
    api.get('/posts')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!user) {
    return <p>Please log in to view posts</p>;
  }

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default AxiosExample;
