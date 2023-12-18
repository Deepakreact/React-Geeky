import React, { useEffect, useState } from 'react'



function TableRow() {

    const [rows, setRows] = useState([])

    const AddRows=()=>{
        const row={
            fullname:"",
            email:"",
            salary:""

        }

        setRows([...rows,row])
    }


    const deleteRow=(x, index)=>{
        console.log(index)

        rows.splice(index, 1)

        console.log( 'rows', rows)

        setRows([...rows])
    }


    useEffect(() => {
      AddRows()
    
      return () => {
        //
      }
    }, [])


    const handleChange=(e, index)=>{

        const {value, name}=e.target

        console.log('value', value, 'name', name)

        rows[index][name]=value


       console.log( rows)

    }


    // const obj={
    //   name:'deepak',
    //   class:12
    // }

    // const obj2={
    //   roll:12,
    //   name:'Arvind',
    //   __proto__:obj
    // }


    // const obj3={
    //   profession:'web developer',
    //   __proto__:obj2
    // }

    // console.log(obj3.class)




    






  return (
    <div>
    
    TableRow

    <table>

    <thead>
    <th>Full Name</th>
    <th>Email</th>
    <th>Salary</th>

    <th><button  onClick={AddRows} >+</button></th>
    
    </thead>


    <tbody>

    {
        rows.map((x, index)=>

        <tr>

        <td>
        <input type='text' name='fullname'  onChange={(e)=>handleChange(e, index)}></input>
        
        </td>

        <td>
        <input type='text' name='email'  onChange={(e)=>handleChange(e, index)}></input>
        
        </td>

        <td>
        <input type='text' name='salary' onChange={(e)=>handleChange(e, index)}></input>
        
        </td>

        <td>

        <button onClick={()=>deleteRow(x, index)}>-</button>
        
        </td>
        
        
        </tr>
        
        
        )
    }




    
    
    </tbody>
    
    </table>




    
    </div>
  )
}

export default TableRow