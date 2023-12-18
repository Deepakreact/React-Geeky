import React from 'react'

//How to use useState in arrow function instead of hook ?

// The functional component loads before any code are executed 
//while const component loads only when the interpreter reaches that line of code


//Always remember that rendering a functional component created using function syntax can be done before it is defined in the code

//while if it’s defined using const then it needs to be declared before using it


// The const functional components are also called arrow functions. 
// By using these functions, we can get rid of annoying method of binding every time and can access hooks very easily






function ArrowFun() {
  return (
    <div>ArrowFun</div>
  )
}

export default ArrowFun


