import React, { useCallback, useState } from 'react'
import Task2 from './Task2'

function UseCallBack3() {

    const [count, setCount] = useState(0)
    const [task, setTask] = useState([])

    const handleCounter=()=>{
        setCount(count+1)
    }

    const addtask=useCallback(()=>{
        setTask((t)=>[...t, 'new task'])
    }, [task])


  return (
    <div>
    
    UseCallBack3
    <Task2  addtask={addtask} tasks={task} />
 

    <button onClick={handleCounter}>Add Counter</button>
    <p>Count:{count}</p>
    
    
    
    </div>
  )
}

export default UseCallBack3