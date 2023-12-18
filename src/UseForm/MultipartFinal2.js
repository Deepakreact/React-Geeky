import { Button,  Stepper, TextField, Typography } from '@mui/material'
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import React, { useState } from 'react'
import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './Part3'
import { Controller, FormProvider, useForm, useFormContext } from 'react-hook-form';







function getStepContent(step) {

    switch(step){
        case 1:
            return <Part1/>


        case 0:
            return <h1>Hello</h1>


        case 2:
            return <Part3/>        
        

    }
    
}

function getStep() {

    return [
        "First","Second", "Third","Fourth"
    ]
    
}




function MultipartFinal2() {

    const methods=useForm()

    

    const [activestep, setActivestep] = useState(0)

    const steps=[
        "First","Second", "Third","Fourth"
    ]

    const handleNext = (data) => {
        console.log('data',data);
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
      };




  return (
    <div style={{width:"500px"}}>
    
    MultipartFinal2

    <Stepper  alternativeLabel activeStep={activestep}>

    {
        steps.map((step, index)=>{

            let labelProps={}
            let stepProps={}

            return (
                <Step  {...stepProps}  key={index}>
                <StepLabel  {...labelProps}>{step}</StepLabel>
                
                </Step>

            )
          
        })
    }


    
    </Stepper>


    {
        activestep.length===steps.length ? (<Typography>Thank You</Typography>):
        (
            <div>

            <FormProvider {...methods}>
            
       

            <form  onSubmit={methods.handleSubmit(handleNext)}>
            {getStepContent(activestep)}


            <Button
         
            variant="contained"
            color="primary"
            // onClick={handleNext}
            type="submit"
          >
            {activestep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
            
            </form>

            </FormProvider>
        

          
            
            </div>
        )
    }



    
    </div>
  )
}

export default MultipartFinal2