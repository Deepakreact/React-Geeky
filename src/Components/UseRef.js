import React, { useRef } from 'react'



function UseRef() {

    const listRef = useRef(); 

    const handleButtonClick = () => {
      // Access the individual list items using the ref
      if (listRef.current) {
        const listItems = listRef.current;
        console.log(listItems.style.color="red");
      }
    };



  return (
    <div>
    
    <button onClick={handleButtonClick}>Get List Items</button>

    <ul >
    {/* Render your list items */}
    <li ref={listRef}>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
    
    
    </div>
  )
}

export default UseRef