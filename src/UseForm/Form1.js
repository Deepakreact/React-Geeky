import { Grid, Select, TextField } from '@mui/material'
import React from 'react'
import { useForm , Controller} from 'react-hook-form'

function Form1() {

    // General form with Validation using use-hook-form

    

    const {control, handleSubmit, reset, formState:{errors},   getValues}=useForm({mode:"onChange"})

   const onSubmit=(data)=>{
        console.log(data)
    }

    const handleReset=()=>{

        reset({
            name:"",
            email:""
        })

        console.log('all', getValues)

    }


    
  const checkboxOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    // Add more options as needed
  ];


  return (
    <div>

    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
    <Grid container width={'1000px'} backgroundColor={'#094f8d'}  borderRadius={'30px'} boxShadow={'10px 10px 15px #e2e2e2'}>

    </Grid>
    </Box>

    <form  onSubmit={handleSubmit(onSubmit)}>

    <Controller
    name='name'
    control={control}
    rules={{required:'this field is required', minLength:{value:4, message:"min 4 ch required"}}}

    render={({field})=>(

        <TextField
        id="first-name"
        label="First Name"
        variant="outlined"
        placeholder="Enter Your First Name"
        fullWidth
        margin="normal"
        {...field}

        error={Boolean(errors?.name)}
        helperText={errors.name?.message}
        
        
        />

  )}/>




    <Controller
    name='email'
    control={control}
    rules={{required:'This field is required'}}

    render={({field})=>(

        <TextField
        type='email'
        id="email"
        label="email"
        variant="outlined"
        placeholder="Enter Your Email"
        fullWidth
        margin="normal"
        {...field}

        error={Boolean(errors?.email)}
        helperText={errors.email?.message}
        
        
        />

    )}/>

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

    <h3>Radio Buttons</h3>

    <label>

    Option 1

    
<Controller
name="gender"
control={control}
defaultValue=""
rules={{ required: 'Please select an option' }}
render={({ field }) => (
<TextField type="radio" {...field} value="male"

error={Boolean(errors?.gender)}
helperText={errors.gender?.message}


/>
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
      <TextField type="radio" {...field} value="female"

      error={Boolean(errors?.gender)}
      helperText={errors.gender?.message}
      
      
      />
    )}

    

  />
    
    </label>



 

   

    {
        checkboxOptions.map((option)=>

        <Controller
        control={control}
        name={`checkOption${option.label}`}
        render={({field})=>(

            <input type='checkbox'  {...field}  value={option.value}/>

        )}


        
        />
        
        )
    }




    <button type='button' onClick={handleReset}>Reset</button>

    <button type='Submit'>Submit</button>
    
    </form>



 
    
    
    
    
    
    </div>
  )
}

export default Form1