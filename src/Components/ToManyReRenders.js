import React from 'react'



// The "too many re-renders" error in ReactJS 

// typically occurs when a functional component updates its state or props in a way that causes an infinite loop of re-rendering



// Use React.memo to memoize the component and prevent unnecessary re-renders.

// Move the state or props update logic to a parent component or a Redux store,
// so that the child component doesn't update its own state or props.
// Use useEffect to control the state or props updates and avoid infinite loops


import React, { useState, useEffect } from 'react';

 export default function ToManyReRenders() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This function is called only when the component mounts or when count changes
    if (count < 10) {
      setCount(count + 1);
    }
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}




