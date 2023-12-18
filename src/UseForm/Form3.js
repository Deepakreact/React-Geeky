// generate dynamic form



import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'

function Form3() {

    const { handleSubmit, control, reset } = useForm();

  

     const{ fields,append, remove }=useFieldArray({
        control,
        name:'users'
     })

     const onSubmit=(data)=>{
        console.log(data.users)
        console.log({users:JSON.stringify(data.users)})
     }


  return (
    <div>
    
    Form3

    <form onSubmit={handleSubmit(onSubmit)}>
    
    


    {
        fields.map((field, index)=>

        <div key={field.id}>

        <Controller

        control={control}
        name={`users[${index}].name`}

        render={({field})=> <TextField  {...field}  placeholder='Enter name'/>}

        
        
        />
        <Controller

        control={control}
        name={`users[${index}].email`}

        render={({field})=> <TextField  {...field}  placeholder='Enter email'/>}

        
        
        />


        

        <Button onClick={()=>remove(index)}>Remove</Button>
        
        </div>

    
        
        
        )
    }

    <Button onClick={()=>append({name:"", email:""})}>ADD Fields</Button>

    <Button type='submit' variant='contained'>MultiStore</Button>

    </form>
    
    
    
    
    
    </div>
  )
}

export default Form3