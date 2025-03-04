import React, { useEffect, useState } from "react";
import api from "../core/api/api";

function Message() {
  const [data, setData] = useState([]);
  const [post, setPost] = useState(0);
  useEffect(() => {
    api
      .get("/posts")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (data.length > 0) {
      const interval = setInterval(() => {
        console.log(data[post].title)
        setPost((prev) => {
          if (prev + 1 >= data.length) {
            return 0;
          } else {
            return prev + 1;
          }
         
        }
    );
    
      }, 3000); 
      return () => clearInterval(interval);
    }
  }, [data]);

  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Post:</h2>
      <h3>{data[post].title}</h3>
      <p>{data[post].body}</p>
    </div>
  );
}

export default Message;
