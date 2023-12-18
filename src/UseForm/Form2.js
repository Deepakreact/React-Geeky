// getValues



import { Button, TextField } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

function Form2() {

    const {control, handleSubmit, formState:{errors},   getValues}=useForm()

    const onSubmit=(data)=>{
        console.log(data)
    }

    const handlegetValue=()=>{

        console.log(getValues())

        console.log(getValues('name'))

        // More than one Value

        // getValues(["name", "email"])

    }





    




  return (
    <div>
    
    Form2

    <form onSubmit={handleSubmit(onSubmit)}>

    <Controller
    name='name'
    control={control}
    rules={{required:'this field is required'}}

    render={({field})=>(

        <TextField
        id="first-name"
        label="First Name"
        variant="outlined"
        placeholder="Enter Your First Name"
        fullWidth
        margin="normal"
        {...field}

        error={Boolean(errors?.name)}
        helperText={errors.name?.message}
        
        
        />

  )}/>




    <Controller
    name='email'
    control={control}
    rules={{required:'This field is required'}}

    render={({field})=>(

        <TextField
        type='email'
        id="email"
        label="email"
        variant="outlined"
        placeholder="Enter Your Email"
        fullWidth
        margin="normal"
        {...field}

        error={Boolean(errors?.email)}
        helperText={errors.email?.message}
        
        
        />

    )}/>

    <Button type='button' variant='contained' onClick={handlegetValue}>Get Values</Button>

    <Button type='submit' variant='contained'>Submit</Button>
    
    
    </form>


    
    
    </div>
  )
}

export default Form2