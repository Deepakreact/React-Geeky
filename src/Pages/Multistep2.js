import React, { useState } from 'react'
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Button, Stepper, TextField, Typography } from '@mui/material';
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
  } from "react-hook-form";





  const BasicForm = () => {
    const {
    control,
    formState: { errors },
    
  } = useFormContext();
  console.log('errors',errors);
    return (
      <div>
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
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.firstName)}
              helperText={errors.firstName?.message}
            />
          )}
        />
  
        <Controller
          control={control}
          rules={{ required:'This field is required'}}
          name="lastName"
          render={({ field }) => (
            <TextField
              id="last-name"
              label="Last Name"
              variant="outlined"
              placeholder="Enter Your Last Name"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.lastName)}
              helperText={errors.lastName?.message}
            />
          )}
        />
  
        <Controller
          control={control}
          rules={{ required:'This field is required'}}
          name="nickName"
          render={({ field }) => (
            <TextField
              id="nick-name"
              label="Nick Name"
              variant="outlined"
              placeholder="Enter Your Nick Name"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.nickName)}
            helperText={errors.nickName?.message}
            />
          )}
        />
      </div>
    );
  };
  const ContactForm = () => {
    const { control } = useForm();
    return (
      <div>
        <Controller
          control={control}
          name="emailAddress"
          render={({ field }) => (
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              placeholder="Enter Your E-mail Address"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
  
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <TextField
              id="phone-number"
              label="Phone Number"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="alternatePhone"
          render={({ field }) => (
            <TextField
              id="alternate-phone"
              label="Alternate Phone"
              variant="outlined"
              placeholder="Enter Your Alternate Phone"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>
    );
  };

  const PersonalForm = () => {
    const { control } = useForm();
    return (
      <div>
        <Controller
          control={control}
          name="address1"
          render={({ field }) => (
            <TextField
              id="address1"
              label="Address 1"
              variant="outlined"
              placeholder="Enter Your Address 1"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="address2"
          render={({ field }) => (
            <TextField
              id="address2"
              label="Address 2"
              variant="outlined"
              placeholder="Enter Your Address 2"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="country"
          render={({ field }) => (
            <TextField
              id="country"
              label="Country"
              variant="outlined"
              placeholder="Enter Your Country Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>
    );
  };

  const PaymentForm = () => {
    const { control, errors } = useForm();
    return (
      <div>
        <Controller
          control={control}
          name="cardNumber"
          render={({ field }) => (
            <TextField
              id="cardNumber"
              label="Card Number"
              variant="outlined"
              placeholder="Enter Your Card Number"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="cardMonth"
          render={({ field }) => (
            <TextField
              id="cardMonth"
              label="Card Month"
              variant="outlined"
              placeholder="Enter Your Card Month"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="cardYear"
          render={({ field }) => (
            <TextField
              id="cardYear"
              label="Card Year"
              variant="outlined"
              placeholder="Enter Your Card Year"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>
    );
  };


  function getStepContent(step) {
    switch (step) {
      case 0:
        return <BasicForm />;
  
      case 1:
        return <ContactForm />;
      case 2:
        return <PersonalForm />;
      case 3:
        return <PaymentForm />;
      default:
        return "unknown step";
    }
  }

function getSteps() {
    return [
      "Basic information",
      "Contact Information",
      "Personal Information",
      "Payment",
    ];
  }


  









function Multistep2() {

    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();

    const methods = useForm({
        defaultValues: {
          firstName: "",
          lastName: "",
          nickName: "",
          emailAddress: "",
          phoneNumber: "",
          alternatePhone: "",
          address1: "",
          address2: "",
          country: "",
          cardNumber: "",
          cardMonth: "",
          cardYear: "",
        },
      });

      console.log('methods', methods)


      const isStepFalied = () => {
        return Boolean(Object.keys(methods.formState.errors).length);
      };

    const isStepOptional = (step) => {
        return step === 1 || step === 2;
      };
    
      const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
      };
    
      const handleNext = (data) => {
        console.log('data',data);
        if (activeStep == steps.length - 1) {
          fetch("https://jsonplaceholder.typicode.com/comments")
            .then((data) => data.json())
            .then((res) => {
              console.log(res);
              setActiveStep(activeStep + 1);
            });
        } else {
          setActiveStep(activeStep + 1);
          setSkippedSteps(
            skippedSteps.filter((skipItem) => skipItem !== activeStep)
          );
        }
      };
    
      const handleBack = () => {
        setActiveStep(activeStep - 1);
      };
    
      const handleSkip = () => {
        if (!isStepSkipped(activeStep)) {
          setSkippedSteps([...skippedSteps, activeStep]);
        }
        setActiveStep(activeStep + 1);
      };
    


  return (
    <div style={{width:'500px'}}>
    Multistep1
    <Stepper alternativeLabel activeStep={activeStep}>

    {steps.map((step, index) => {
        const labelProps = {};
        const stepProps = {};
        if (isStepOptional(index)) {
          labelProps.optional = (
            <Typography
              variant="caption"
              align="center"
              style={{ display: "block" }}
            >
              optional
            </Typography>
          );
        }
        if (isStepSkipped(index)) {
          stepProps.completed = false;
        }
        return (
          <Step {...stepProps} key={index}>
            <StepLabel {...labelProps}>{step}</StepLabel>
          </Step>
        );
      })}


    </Stepper>


    {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <div>

        
        <FormProvider {...methods}>


        <form onSubmit={methods.handleSubmit(handleNext)}>
          {getStepContent(activeStep)}

          <Button
           
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>
          {isStepOptional(activeStep) && (
            <Button
           
              variant="contained"
              color="primary"
              onClick={handleSkip}
            >
              skip
            </Button>
          )}
          <Button
         
            variant="contained"
            color="primary"
            // onClick={handleNext}
            type="submit"
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </form>


        </FormProvider>
        </div>
      )}
    
    </div>
  )
}

export default Multistep2

