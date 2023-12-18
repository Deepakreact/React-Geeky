import {  Button, Stepper, Typography } from '@mui/material'
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import React, { useState } from 'react'
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import { FormProvider, useForm } from 'react-hook-form';


const getSteps=()=>{
    return [
        "Basic",
        "Address",
        "Profession",

    ]
}


function getStepContent(step) {

    switch(step){
        case 0:
            return <Part1/>


        case 1:
                return <Part2/>    
                
                
        case 2:
            return <Part3/>            
    }
    
}





function MultipartFinal3() {

     const methods=  useForm()

    const [activestep, setActivestep] = useState(0)
    const steps=getSteps()


    const handleNext=(data)=>{

        console.log(data)

        if (activestep === steps.length - 1) {


            alert("Thanks")
        //   fetch("https://jsonplaceholder.typicode.com/comments")
        //     .then((data) => data.json())
        //     .then((res) => {
        //       console.log(res);
        //       setActivestep(activestep + 1);
        //     });
        } else {
          setActivestep(activestep + 1);
       
        }

        

    }



  return (
    <div>
    
    
    MultipartFinal3

    <Stepper alternativeLabel activeStep={activestep}>

    {
        steps.map((step, index)=>{

            let stepProps={}
            let labelProps={}


            return(

                <Step  {...stepProps}  key={index}>

                <StepLabel {...labelProps}>{step}</StepLabel>
        
        
                
                </Step>

            )

       
        
    })
    }
    
    
    
    </Stepper>

    {
        activestep===steps.length ? (<Typography>Thanks</Typography>):
        (
            <div>

            <FormProvider {...methods}>

            <form  onSubmit={methods.handleSubmit(handleNext)}>
            {getStepContent(activestep)}

            <Button type='submit'>

            {activestep===steps.length-1 ? "Finish" : "Next"}
            
            </Button>
            
            
            </form>
            
            </FormProvider>

      
            
            </div>
        )
    }




    
    
    
    
    </div>
  )
}

export default MultipartFinal3