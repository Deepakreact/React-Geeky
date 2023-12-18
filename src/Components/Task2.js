import React, {memo} from 'react'

function Task2({addtask, tasks}) {

    console.log('task component rendered')

    


  return (
    <div>
    Task2

    {
        tasks.map((t)=>

        <div>

        {t}
        
        </div>
        
        )
    }

    <button onClick={addtask}>ADD TASK</button>
    
    </div>
  )
}

export default memo(Task2)