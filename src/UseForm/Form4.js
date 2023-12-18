// useFormContext

import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Step1 from './Step1'
import { Button } from '@mui/material'
import Step2 from './Step2'






function Form4() {

const methods= useForm()

const onSubmit=(data)=>{

    console.log(data)

}


  return (
    <div>

    
    
    <FormProvider  {...methods}>

    <form onSubmit={methods.handleSubmit(onSubmit)}>
    <Step1 />

    <Step2/>

    <Button type='submit' >Submit</Button>
    
    </form>



  
    
    
    </FormProvider>
    
    
    
    </div>
  )
}

export default Form4