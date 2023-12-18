import React, { useState } from 'react'
let myarray=[]

function AccessNestedObject() {

    const [arr, setArr] = useState([])

    const [obj, setObj] = useState(

        
        {
            "name":"Kapil",
            "age":27,
            "vehicles": {
               "car":"city 100",
               "bike":"ktm-duke",
               "plane":"lufthansa",
               "plane2":{
                "name":"Arvind"
               }
            }
           }


    )

    const isObj=(val)=>{

        if(typeof(val)==='object'){
            return true
        }

        return false

    }




    const handleObj=(myObj)=>{

     

        const values=Object.values(myObj)
       

        values.forEach((val)=>{

            if(isObj(val)){

                handleObj(val)

            }

            else{

                console.log('val', val)

                myarray=[...myarray, val]

            }

          
           

            

            
        })

        setArr([...myarray])

       



    }

    console.log('myarray', arr)











  return (
    <div>
    
    AccessNestedObject

    <button  onClick={()=>handleObj(obj)}>get</button>

    {
        myarray.map((x)=>
        <p>{x} </p>
        
        )
    }
    
    
    </div>
  )
}

export default AccessNestedObject