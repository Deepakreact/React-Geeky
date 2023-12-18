import React from 'react'
import TextField from '@mui/material/TextField';

import {useFormik} from 'formik'

import {signupschema} from '../Schema/myschemafile'




function Validation() {

  const {values, errors,touched, handleChange,handleBlur, handleSubmit}=useFormik({

    initialValues:{
      name:"",
      email:""

    },
    validationSchema:signupschema,
    onSubmit:(values)=>{
      

      console.log('val', values)

    }




  })


  console.log("values", values)

  console.log("errors", errors)

  console.log("touched", touched)




  return (
    <div>

    <form style={{width:'500px', height:'auto' , display:'flex', flexDirection:'column'}}  onSubmit={handleSubmit}>

    <TextField

    
    id="standard-error"
    label={errors.name && touched.name ? errors.name : null}
 
    variant="standard"
    value={values.name}

    onChange={handleChange}
    onBlur={handleBlur}

    name="name"


  />

  {errors.name && touched.name ? <p>{errors.name}</p>: null}


  
  <TextField

  
    
  id="standard-error"
  label={errors.email && touched.email ? errors.email : null}

  variant="standard"
  value={values.email}
  onChange={handleChange}
  onBlur={handleBlur}
  name="email"
/>

<button type='submit'>Submit</button>


    
    
    </form>
    
 
    </div>
  )
}

export default Validation