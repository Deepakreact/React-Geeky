import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';

function UseForm() {
  const { handleSubmit, control, reset } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'users',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (


    <form onSubmit={handleSubmit(onSubmit)}>


      {fields.map((field, index) => (
        <div key={field.id}>
          <Controller
            name={`users[${index}].firstName`}
            control={control}
            defaultValue={field.firstName}
            render={({ field }) => <input {...field}  placeholder='first name' />}
          />

          <Controller
          name={`users[${index}].Profession`}
          control={control}
          defaultValue={field.Profession}
          render={({ field }) => <input {...field}  placeholder='Profession' />}
        />

        <label>
        Upload Image:
        <Controller
        name={`users[${index}].image`}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files[0])}  placeholder='image'/>
          )}
        />
      </label>
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}


      <button
        type="button"
        onClick={() => {
          append({ firstName: '', Profession:'', image:"" });
        }}
      >
        Add Field
      </button>
      <button type="submit">Submit</button>
    </form>

    
  );
}

export default UseForm;
