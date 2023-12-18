// A Debouncing Events in ReactJS will allow you to call a function that ensures that a time-consuming task does not fire so often. 
// It’s a function that takes a function as a parameter and wraps that function in a closure and returns 
// it so this new function displays the “wait for a bit” behavior

import { useCallback, useState } from "react";





// Debouncing is used to add a time gap between two consecutive invocations of a function call. 
// It forces a function to wait a certain amount of time before running again. For example, 
// a debounce interval of 500ms means that if 500ms hasn’t passed from the previous invocation attempt,
// we cancel the previous invocation and schedule the next invocation of the function after 500ms






export default function Debouncing() {
    const [input, setInput] = useState("");
    const [savetoDB, setSaveToDb] = useState("");

    const delaySaveToDb = useCallback(debounce((val)=>{
        setSaveToDb(val)
      }
    , 1000), []);
  
  
     const handleChange = (e) => {
      setInput(e.target.value);
      delaySaveToDb(e.target.value);
     
    };
    
  
    function debounce(fn, delay) {
      let timer;
      return function () {
        let context = this,
          args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(context, args);
        }, delay);
      };
    }
  
    return (


      <div className="App">
        <input
          type="text"
          value={input}
          onChange={(e)=>handleChange(e)}
          placeholder="type somthing..."
          style={{ marginTop: "100px" }}
        />
  
        <p>Typed</p>
        <p>{input}</p>
        <p>Saved To DB</p>
        <p>{savetoDB}</p>
      </div>


    );
  }
  