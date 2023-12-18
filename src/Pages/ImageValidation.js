import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import  isValidFileType  from 'react-file-utils';

const ImageValidation = () => {
  const { handleSubmit, control, formState:{errors} } = useForm();

  

  const onSubmit = (data) => {
    // Handle form submission here
  };



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Upload Image</label>
        <Controller
          name="image"
          control={control}
          rules={{ 
            required: 'Image is required',
            validate: (file) => {

              const fileTypes=['jpg']

              console.log('file', file.name.split(".")[1])
              const fileType=file.name.split(".")[1]

              if(!fileTypes.includes(fileType)){
                return "Image must be jpg"
              }

            },
            

        
        }}
          render={({ field }) => (
            <input type="file"  accept="image/jpeg,image/png" onChange={(e) => field.onChange(e.target.files[0])} />
          )}
        />
        {errors.image && <p style={{color:'red'}}>{errors.image.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ImageValidation;
