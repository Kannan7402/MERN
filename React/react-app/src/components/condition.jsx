import React, { useState } from 'react';
function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  return (
    <div>
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
      <button onClick={() => setIsLoggedIn(false)}>Log off</button>
      <button onClick={() => setHasAcceptedTerms(true)}>Accept Terms</button>
      <button onClick={() => setHasAcceptedTerms(false)}>Reject Terms</button>
      {isLoggedIn && hasAcceptedTerms ? (
        <h1>Welcome!</h1>
      ) : isLoggedIn && !hasAcceptedTerms ? (
        <h1>accept the terms to proceed.</h1>
      ) : (
        <h1>Please log in </h1>
      )}
    </div>
  );
}

export default Login;
