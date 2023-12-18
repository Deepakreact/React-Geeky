import React, { useState } from 'react'

function CheckBox2() {

    const checkboxValues=[10, 20, 30, 40, 50, 60]

    const [myarr, setMyarr] = useState([])

    const handleCheckValue=(e, index)=>{

        const {checked, value}=e.target

        if(checked){
            setMyarr([...myarr, value])
        }

        else{

        //for non repeating values
           const newarr= myarr.filter((x)=> x !==value)

           setMyarr([...newarr])



        //////////////////////// if value repeates /////////////////////



        

        



}





    }


    console.log('myarr', myarr)




  return (
    <div>

    <p>Checkbox 2</p>

    {
        checkboxValues.map((x, index)=>

        <div style={{display:'flex', justifyContent:'space-evenly', alignContent:'center'}}>

        <input type='checkbox' value={x} onChange={(e)=> handleCheckValue(e, index)}></input>

        <div>
        {x}
        
        </div>
        
        </div>
        
        )
    }






    

    
    
    </div>
  )
}

export default CheckBox2