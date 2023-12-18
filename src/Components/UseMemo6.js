import React, { useCallback, useMemo, useState } from 'react'
import Task from './Task'

function UseMemo6() {

    // problem ==> expensiveCalculation function excecuted  when we add a new task ==> addtodos  , it should not rendered

    // problem ===> it slow down the performance of addtodo function



    // problem ===> it slow down the performance of handleCounter function

    const [count, setCount] = useState(0)

    const [task, setTask] = useState([])


    const expensiveCalculation=(num)=>{

        console.log('calculating......................')

        for (let i = 0; i < 1000000000; i++) {

            num=num+1
            
            
        }

        return num

    }

    // const calculation=expensiveCalculation(count)


// Solution of  the problem


    // here expensive calculation function will be executed only when count dependency change 

    // it will not make any effect if addtodos change 

    // useMemo return a memoized value that is ===> calculation

   const calculation=useMemo(() => expensiveCalculation(count), [count])
       



    const handleCounter=(e)=>{

        console.log('count', count)
        setCount(count+1)
    }

    //IIIIIIIIIIIIIIImp if we do not want to render Task component while executing handleCount function 

    // jb task array change ho then execute 

    const addtodos=useCallback(()=>{
        setTask((t)=> [...t, 'add task'])
    },[task])

    // const addtodos=()=>{
    //     setTask((t)=> [...t, 'add task'])
    // }


  return (
    <div>
    
    UseMemo6

    <Task addtodos={addtodos} task={task}/>

    <p>Count:{count}</p>


    <button onClick={(e)=>handleCounter(e)}>Counter</button>

     <p>Calculation:{calculation}</p>
    
    
    </div>
  )
}

export default UseMemo6