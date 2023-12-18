// Optional chaining is a JavaScript feature that provides a concise way to access properties or 
// call methods on potentially null or undefined values, without causing a runtime error. 
// This is especially useful in React applications where you often deal with nested objects and data that may not be available immediately.

// In React, you can use optional chaining to safely access properties of an object, even if some of those properties are undefined or null.
//  Here's how you can use optional chaining in React components:




// Using Optional Chaining in React Components:

// Let's say you have a component that receives a prop user which contains information about a user,
//  but it might be undefined or null initially. You want to display the user's name,
//  but you're not sure if the user object or the name property exists.

function UserProfile({ user }) {
    const userName = user ? user.name : 'Guest'; // Need to explicitly check for user and name
    return <div>{userName}</div>;
  }



//   With Optional Chaining

  function UserProfile({ user }) {
    const userName = user?.name || 'Guest'; // Use optional chaining and default value
    return <div>{userName}</div>;
  }




//   Using Optional Chaining with Nested Properties:

//   You can also use optional chaining with nested properties.
//    Let's say you have an object with nested properties like user.address.city.
//     Here's how you can safely access the city property:



function UserAddress({ user }) {
    const city = user?.address?.city || 'Unknown City'; // Nested optional chaining
    return <div>{city}</div>;
  }

//   If either user or user.address is undefined or null, 
//   the expression will short-circuit and use the default value 'Unknown City'.





// Using Optional Chaining with Methods:

// You can use optional chaining with methods as well. 
// If a method may be undefined, optional chaining can help you avoid errors:


function UserDetails({ user }) {
    const getFullName = user?.getFullName?.(); // Using optional chaining with a method
    return <div>{getFullName || 'No name available'}</div>;
  }
  
  






  
  