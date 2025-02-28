import React, { useReducer, useState } from 'react';

function Post(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload]; 
    case 'dele':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
}

function PostComponent() {
  const [state, dispatch] = useReducer(Post, []);
  const [post, setPost] = useState(''); 

  return (
    <>
      <input 
        type="text" 
        value={post} 
        onChange={(e) => setPost(e.target.value)} 
      />
      <button onClick={() => dispatch({ type: 'add', payload: post })}>
        Add
      </button>
      <ul>
        {state.map((post, index) => (
          <li key={index}>
            {post}
            <button onClick={() => dispatch({ type: 'dele', payload: index })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostComponent;
