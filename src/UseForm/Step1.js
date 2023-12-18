import { Button } from '@mui/base'
import { TextField } from '@mui/material'
import React from 'react'
import { useForm, Controller, useFormContext } from 'react-hook-form'

function Step1() {

    // const {control, handleSubmit}=useForm()
    const {control,formState:{errors}}=useFormContext()





  return (
    <div>
    Step1


    

    
    <Controller
    name='name'
    control={control}
    rules={{required:'this field is required', minLength:{value:4, message:"min 4 ch required"}}}

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




    
    </div>
  )
}

export default Step1