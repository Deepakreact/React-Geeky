import React, { useState } from 'react'

const arrvalue=[10,20,30,40,50]

function CheckBox() {

    const [myarr, setMyarr] = useState([])

    const handleCheck=(e, index)=>{

        const {checked, value}=e.target

        console.log(checked, value)

        if(checked){
            setMyarr([...myarr, value])
        }

        else{

          const newarr=  myarr.filter((x)=>  x !==value)

          setMyarr([...newarr])

        }

        console.log(myarr)



    }

    console.log('myarr', myarr)




  return (
    <div>
    
    CheckBox:

    {
        arrvalue.map((x, index)=>

        <div style={{display:'flex', flexDirection:'column'}}>

        <div style={{width:'300px' ,display:'flex', justifyContent:'space-between'}}>

        <input type='checkbox' value={x}   onChange={(e)=>handleCheck(e, index)}></input>

        <div>
        {x}
        
        </div>
        
        </div>
        
        </div>
        
        )
    }


   Total: {
        myarr.reduce((a,c)=> {
            
          return parseInt(a)+parseInt(c)
        
        },0)
    }
    
    
    </div>
  )
}

export default CheckBox