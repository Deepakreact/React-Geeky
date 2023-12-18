import { TextField } from '@mui/material'
import React from 'react'

import {useForm, Controller } from 'react-hook-form'





function MultiStep3() {

  const {control, handleSubmit}=useForm()

  const onSubmit=(data)=>{
    console.log('data', data)

  }


  const checkboxOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    // Add more options as needed
  ];



    


  return (
    <div style={{width:'500px'}}>

    Multistep 4

    <form onSubmit={handleSubmit(onSubmit)}>

    <Controller
          control={control}
          // rules={{ required:'This field is required'}}
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
              // error={Boolean(errors?.firstName)}
              // helperText={errors.firstName?.message}
            />
          )}
        />
  <Controller
          control={control}
          // rules={{ required:'This field is required'}}
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
              // error={Boolean(errors?.lastName)}
              // helperText={errors.lastName?.message}
            />
          )}
        />

        <label>

        Option 1

        
  <Controller
  name="gender"
  control={control}
  defaultValue=""
  rules={{ required: 'Please select an option' }}
  render={({ field }) => (
    <TextField type="radio" {...field} value="male" />
  )}
/>  
        
        </label>

        <label htmlFor='Female'>

        option 2

        <Controller
        name="gender"
        control={control}
        defaultValue=""
        rules={{ required: 'Please select an option' }}
        render={({ field }) => (
          <TextField type="radio" {...field} value="female" />
        )}
      />
        
        </label>

        <label>
        Select an option from check box:
        <Controller
          name="selectOption"
          control={control}
          defaultValue=""
          rules={{ required: 'Please select an option' }}
          render={({ field }) => (
            <select {...field}>
              <option value="" disabled>
                Select an option
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          )}
        />
      </label>

      {checkboxOptions.map((option) => (
        <label key={option.value}>
          <Controller
            name={`checkboxOptions.${option.value}`}
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <input type="checkbox" {...field} value={option.value}/>
            )}
          />
          {option.label}
        </label>
      ))}


      <Controller
      control={control}
      // rules={{ required:'This field is required'}}
      name="address.city"
      render={({ field }) => (
        <TextField
          id="city"
          label="City"
          variant="outlined"
          placeholder="Enter Your City Name"
          fullWidth
          margin="normal"
          {...field}
          // error={Boolean(errors?.firstName)}
          // helperText={errors.firstName?.message}
        />
      )}
    />

    <Controller
    control={control}
    // rules={{ required:'This field is required'}}
    name="address.state"
    render={({ field }) => (
      <TextField
        id="first-name"
        label="State"
        variant="outlined"
        placeholder="Enter Your State"
        fullWidth
        margin="normal"
        {...field}
        // error={Boolean(errors?.firstName)}
        // helperText={errors.firstName?.message}
      />
    )}
  />

  <Controller
  control={control}
  // rules={{ required:'This field is required'}}
  name="address.pincode"
  render={({ field }) => (
    <TextField
      id="first-name"
      label="Pincode"
      variant="outlined"
      placeholder="Enter Your Pincode"
      fullWidth
      margin="normal"
      {...field}
      // error={Boolean(errors?.firstName)}
      // helperText={errors.firstName?.message}
    />
  )}
/>





        



    
      
      
      

  <button type='submit'>Submit</button>
    
  </form>


    
    
    
    
    </div>
  )
}

export default MultiStep3