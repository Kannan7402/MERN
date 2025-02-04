import React, { useState } from 'react';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
      <button onClick={() => setIsLoggedIn(false)}>Log off</button>
      {isLoggedIn ? <h1>Welcome</h1> : <h1>Login first</h1>}
    </>
  );
}

export default Login;
