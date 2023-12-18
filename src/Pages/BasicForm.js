import React from 'react';
import { useForm ,FormProvider, useFormContext} from 'react-hook-form';

const BasicForm = () => {
  const { register } = useFormContext(); // Access form methods



  return (

    <div>

    <h1>
    Basic Form
    
    </h1>
    
      <label>Name:</label>
      <input {...register('name')} />

      <label>Email:</label>
      <input {...register('email')} />

   

    </div>
  );
};

export default BasicForm;
