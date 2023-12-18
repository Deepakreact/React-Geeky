import React from 'react';
import { useForm ,FormProvider} from 'react-hook-form';
import BasicForm from './BasicForm';
import AddressForm from './AddressForm';

const ParentForm = () => {
  const methods = useForm();

 const  onSubmit= data=> console.log(data)

  return (

    <div>

    <FormProvider  {...methods}>


    
    <form  onSubmit={methods.handleSubmit(onSubmit)}>

    <BasicForm/>
    <AddressForm/>

    <button type='submit'>Final </button>
    
    </form>

    
    
    </FormProvider>


   
    
    </div>

   

    
 
  );
};

export default ParentForm;
