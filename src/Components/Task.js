import React,{memo} from 'react'

function Task({addtodos, task}) {

    console.log('task component rendered')


  return (
    <div>

    <button onClick={addtodos}>Todo </button>

    {
        task.map((x)=>
        <div>

        {x}
        
        </div>
        
        )
    }
    
    
    </div>
  )
}

export default memo(Task)