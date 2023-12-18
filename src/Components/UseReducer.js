// useReducer hook is similer to useState hook 

// It allows for custom state logic

// If you find yourself keep tracking  of multiple piece of state  that relay on complex logic (Swiching b/w different  )

// Switch between different action.type


import React from 'react'


const initialTodos=[

    {
        id:1,
        title:'title 1',
        complete:false 
    },

    {
        id:2,
        title:'title 2',
        complete:false 
    },
]


const reducer=(state, action)=>{

    switch(action.type){
        case 'COMPLETED':
            return state.map((todo)=>{

                if(todo.id===action.id){
                    return {...todo, complete:!todo.complete}
                }

                else{

                    return todo

                }



            })


        default:
            return state    
    }

}















function UseReducer() {



  return (
    <div>
    
    UseReducer
    
    
    </div>
  )
}

export default UseReducer


