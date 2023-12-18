import React,{memo} from 'react'

function Todos2({todos, addtodos}) {


    console.log('todo component rendered.......................')


  return (
    <div>
    Todos2
    {
        todos.map((x)=>
        <p>{x}</p>
        )
    }

    <button onClick={addtodos}>Add to-do</button>
    
    </div>
  )
}

export default memo(Todos2)