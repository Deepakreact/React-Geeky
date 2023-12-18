import React, { useMemo, useState } from 'react'

function UseMemo5() {



    const [todos, setTodos] = useState([])

    const [counter, setCounter] = useState(0)

    const expensiveCalculation=(num)=>{

        console.log('expensive Calculation.........................')

        for (let i = 0; i < 1000000000; i++) {
            num=num+1
            
        }

        return num
}


const calculation=expensiveCalculation(counter)

// const calculation=useMemo(() => expensiveCalculation(counter), [counter])





const handleCounter=(counter)=>{
    setCounter(counter+1)

}



    





    const handleToDo=()=>{

        setTodos((t)=> [...t, 'new task'])

    }


  return (
    <div>

    <h5>To Do</h5>



    {
        todos.map((x)=>

        <p>{x}</p>
        )
    }

    <p>count:{counter}</p>
    


    <button onClick={(e)=>handleToDo(e)}>Add To-Do</button>


    
    <button onClick={()=>handleCounter(counter)}>Add To-Do</button>

    <p>

    Calculation:{calculation}

    
    </p>





    
    
    </div>
  )
}

export default UseMemo5