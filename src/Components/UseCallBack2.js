import React, { useCallback, useState } from 'react'
import Todos2 from './Todos2'

function UseCallBack2() {

    const [count, setCount] = useState(0)

    const [todos, setTodos] = useState([])



    const handleCounter=(e)=>{

        console.log('counter clicked')

        setCount(count + 1)

    }


    // const addtodos=()=>{

    //     setTodos((t)=>[...t, 'new todo'])

    // }

   
// const addtodos=useCallback( () => {
//     setTodos((t)=> [...t, 'new todo'])
// },[todos])


const addtodos = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);




    


  return (
    <div>
    
    UseCallBack2

    <Todos2   todos={todos} addtodos={addtodos}/>



    <p>Counter: {count}</p>

    <button onClick={(e)=>handleCounter(e)}>Increase Counter</button>


    
    
    </div>
  )
}

export default UseCallBack2