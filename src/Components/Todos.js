import React from 'react'

import {memo } from 'react'

function Todos({todos, addtodos}) {

    console.log('todo component reder')


  return (
    <div>
    
    Todos

    {
        todos.map((x)=>
        <p>{x}</p>
        
        )
    }

    <button onClick={addtodos}>Add To do</button>
    
    
    </div>
  )
}

export default memo(Todos)