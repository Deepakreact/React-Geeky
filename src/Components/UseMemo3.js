import React, { useMemo, useState } from 'react'

function UseMemo3() {

    const [todos, setTodos] = useState([])

    const [counter, setCounter] = useState(0)


    const expensiveCalculation=(num)=>{

        console.log('....Calculating')

        for (let i = 0; i < 1000000000; i++) {
            num=num+1
            
        }

        return num

    }

    // const calculation=expensiveCalculation(counter)


    const calculation=useMemo(() => expensiveCalculation(counter)
      
    , [counter])







    const handleToDo=(e)=>{

        setTodos((t)=> [...t, 'New Todo'])



    }

    const handleCounter=(e)=>{

        setCounter(counter+1)

    }








  return (
    <div>

    
    <h5>My To-Do</h5>

    {
        todos.map((x)=>

        <p>{x}</p>
        
        )
    }




    <button onClick={(e)=>handleToDo(e)}>Add To-Do</button>

    <h5>MyCounter</h5>

    <p> Count {counter}</p>

    <button onClick={(e)=> handleCounter(e)}>Add Count</button>


    Expensive: {calculation}
    
    
    
    
    
    </div>
  )
}

export default UseMemo3