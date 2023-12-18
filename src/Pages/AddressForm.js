import React from 'react'
import { useForm ,FormProvider, useFormContext} from 'react-hook-form';

function AddressForm() {


    const { register } = useFormContext(); // Access form methods


  
    return (

        <div>

        <h1>Address Form</h1>
        
     





      <label>Country:</label>
      <input {...register('country')} />
        <label>City:</label>
        <input {...register('city')} />
  
        <label>State:</label>
        <input {...register('state')} />
  

      </div>
    );
}

export default AddressForm