// Reset method of use-react-form


import React from 'react';
import { useForm } from 'react-hook-form';

const UseForm2 = () => {
  const { register, handleSubmit, reset, getValues } = useForm();

  const onSubmit = (data) => {
    console.log('Submitted data:', data);
  };

  const handleReset = () => {
    // Reset the form to its initial values
    reset();

    // Or you can reset to specific values
    // reset({
    //   name: '',
    //   email: ''
    // });

    reset({
        name: 'Default Name',
        email: 'Default Email'
      });

    console.log( 'getValues', getValues)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input {...register('name')} />

      <label>Email:</label>
      <input {...register('email')} />

      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>
        Reset Form
      </button>
    </form>
  );
};

export default UseForm2;
