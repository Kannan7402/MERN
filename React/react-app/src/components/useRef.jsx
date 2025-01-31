import React, { useRef } from 'react';
// focusing input element and triggering animations 
const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Focus the input element when button is clicked
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};
export default FocusInput;
