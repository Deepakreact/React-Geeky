import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

function Part1() {

  const {control , formState:{errors}}=useFormContext()

  console.log( "errors", errors)


  return (
    <div>
    
    <Controller
    control={control}
    name="name"
    rules={{required:"This field is Required"}}
    render={({field})=>(

      <TextField
        id="name"
        label="Name"
        variant="outlined"
        placeholder="Enter Your First Name"
     
        margin="normal"
        {...field}

        error={Boolean(errors?.name)}
        helperText={errors.name?.message}

        
        />

    )}
    
    />

    <Controller
    control={control}
    rules={{ required:'This field is required'}}
    name="firstName"
    render={({ field }) => (
      <TextField
        id="first-name"
        label="First Name"
        variant="outlined"
        placeholder="Enter Your First Name"
   
        margin="normal"
        {...field}
        error={Boolean(errors?.firstName)}
        helperText={errors.firstName?.message}
      />
    )}
  />
    
    </div>
  )
}

export default Part1