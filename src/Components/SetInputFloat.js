//How to set input box to be a floating number in ReactJS 


// If we want to set the input box to be a floating number then we can use the step attribute of the input tag. 
// We have to set the input type as the number and step value by which we want to increase/decrease the floating number.
//  We can also set min and max attributes such that the number will not decrease after the min value and
//   will not increase after the max value


import React, { useState } from 'react'

function SetInputFloat() {
    const [inputvalue, setInputvalue] = useState(10)

    const handleChange=(e)=>{
        setInputvalue(e.target.value)
    }

    console.log( 'iv',  inputvalue)


  return (
    <div>
    
    SetInputFloat
    <input type='number' step='0.1' min='0' max='20' value={inputvalue} onChange={(e)=>handleChange(e)}>
    
    </input>
    
    
    </div>
  )
}

export default SetInputFloat