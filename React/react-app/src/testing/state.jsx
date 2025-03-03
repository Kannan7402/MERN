import React, { useState } from 'react';

const Component = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Button clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Component;

