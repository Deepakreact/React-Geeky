import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

function Step2() {

  const {control, formState:{errors}}=  useFormContext()
  return (
    <div>
    
    Step2

    <Controller
    control={control}
    name='Select'
    rules={{required:'this field is required'}}
    render={({field})=>(

        <select

        {...field}
        error={errors?.Select}
        helperText={errors.Select?.message}
        
        >
        <option value="" >
                Select an option
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
        
        
        </select>

    )}/>
    
    
    
    </div>
  )
}

export default Step2