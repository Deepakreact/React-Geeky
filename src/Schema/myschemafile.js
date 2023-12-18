import * as Yup from "yup"


 export  const signupschema=Yup.object({

    name:Yup.string().min(4).max(20).required("Name is Required"),
    email:Yup.string().email().required(" Please Enter your email")

})