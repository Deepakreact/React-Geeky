import React, { useState } from 'react'

function NestedObject() {

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

    const [myarray, setMyarray] = useState([])

    let arr=[]

    


    const handleObject=(obj)=>{

        const values=Object.values(obj)

        values.forEach((val)=>{


            if(typeof(val)==='object'){

                handleObject(val)

            }

            else{
                console.log('val', val)

                arr=[...arr,val]

             

               
            }

            

        }

  
        

        
        
        )

        setMyarray([...arr])

    }

    console.log('myarr', myarray)

  

    


  return (
    <div>
    
    NestedObject

    <button onClick={()=>handleObject(obj)}>Get</button>
    
    </div>
  )
}

export default NestedObject