// Advance Validation
// getValues
// validate:call back function




import React from 'react';
import { useForm } from 'react-hook-form';

const UseForm1 = () => {
  const { register, handleSubmit, getValues } = useForm();

  const onSubmit = (data) => {
    console.log('Submitted data:', data);
  };

  const handleGetValue = () => {
    const single_value = getValues('name');
    const more_value = getValues(['name', 'phone']);

    const all_value = getValues();
    console.log('Single Value:', single_value);
    console.log('More Value:', more_value);

    console.log('All Value:', all_value);
  };

  return (

    
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input {...register('name')} />

      <label>Email:</label>
      <input {...register('email')} />

      <label>Phone:</label>
      <input {...register('phone')} />

      <button type="submit">Submit</button>
      <button type="button" onClick={handleGetValue}>
        Get Form Values
      </button>
    </form>
  );
};

export default UseForm1;
