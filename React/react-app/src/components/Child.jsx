import React from 'react';
import Custom from './cutomElements';
function Child() {
    function handleClick ()
        {
            alert('button clicked')
        }
  return (
    <>
    <Custom label={'click me'} onClick={handleClick}> click</Custom>
    </>
  )
}

export default Child
