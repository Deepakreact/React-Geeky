import {  Button, Stepper, Typography } from '@mui/material'
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import React, { useState } from 'react'
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Step1 from './Step1';
import Step2 from './Step2';
import { FormProvider, useForm } from 'react-hook-form';


const getSteps=()=>{
    return [
        "Step 1",
        "Step 2",
        "step 3"
    ]
}

function getStepContent(step){

    switch(step){
        case 0:
            return <Step1/>


        case 1:
             return <Step2/> 

        case 2:
            return <Step1/> 
            
        default:
            return <h1> No part</h1>    
    }

}









function MultipartFinal() {

    const methods=useForm({

    })

    console.log('methods', methods)

    const [activestep, setActiveStep] = useState(0)

    const steps=getSteps()
    const handleNext=(data)=>{
        console.log("data in next", data)

        console.log("getValues in next", methods.getValues())

     
        setActiveStep(activestep+1)

    
    }




  return (
    <div style={{width:'500px'}}>
    MultipartFinal

    <Stepper alternativeLabel activeStep={activestep}>

    {
        steps.map((step, index)=>{
             let labelProps={}
             let stepProps={}

            

            return(
                <Step {...stepProps} key={index}>
                <StepLabel {...labelProps}>{step}</StepLabel>
                
                </Step>
            )
        }
        
        )
    }
    
    </Stepper>

    {
      activestep.length===steps.length ? (     <Typography variant="h3" align="center">
        Thank You
      </Typography>): (
        <div>

        <FormProvider {...methods}>
        
      
        <form  onSubmit={methods.handleSubmit(handleNext)}>

        {getStepContent(activestep)}

        <Button
        onClick={handleNext}
        
        >

        {activestep.length===steps.length ? "Finish" : "Next"}
        
        
        </Button>
        
        </form>

        </FormProvider>

        
        </div>
      )
    }
    
    
    </div>
  )
}

export default MultipartFinal