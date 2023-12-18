// in React.js, closures play an important role in managing state and preserving values across different function calls.
//  Closures are created when an inner function has access to variables defined in its outer function, 
//  even after the outer function has finished executing.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// In the above example, we define a functional component called Counter.
// Inside the component, we use the useState hook to create a state variable count and a corresponding setter function setCount


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The increment and decrement functions are defined within the Counter component, 
// and they have access to the count variable and the setCount function due to closures. 
// This means that even after the Counter component finishes executing,
//  the increment and decrement functions still retain access to the count variable and the setCount function


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// By utilizing closures, the increment and decrement functions maintain access to the count state variable and the setCount function,
//  allowing them to update the state whenever the buttons are clicked.
//   This enables the component to re-render with the updated count value















import React from 'react'

function Closoure() {


    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  return (
    <div>
    Closoure

    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    
    </div>
  )
}

export default Closoure