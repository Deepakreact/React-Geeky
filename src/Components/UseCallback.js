// useCallback is used for performance optimization 

// it prevent re-rendering of components(child)

// takes a function and dependecy array if dependancy change it returns a memozied function

// it returns a memozied function not value


import React, { useCallback, useState } from 'react'
import Todos from './Todos'

function UseCallback() {

    const [count, setCount] = useState(0)

    const [todos, setTodos] = useState([])

    const handleCounter=(e)=>{

        console.log('..counter click')
        setCount(count+1)
    }

    // const addtodos=()=>{

    //     console.log('...add to doss click')
    //     setTodos((t)=>[...t, 'newtodos'])
    // }  

 
        const addtodos = useCallback(() => {
            setTodos((t) => [...t, "New Todo"]);
          }, [todos]);
    


  return (


    <div>
    
    UseCallback

    <Todos todos={todos} addtodos={addtodos}/>

    <button onClick={(e)=>handleCounter(e)}>Add Counter</button>

    <p>Count: {count}</p>
    
    
    </div>


  )
}

export default UseCallback

