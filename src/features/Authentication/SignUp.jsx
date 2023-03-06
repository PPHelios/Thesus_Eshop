import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next"; 
import * as yup from "yup";
 import { 

   Img, 

   Form, 

 } from "../../components/muiStyledComponents/muiStyledComponents"; 

 import Typography from "@mui/material/Typography"; 

 import Box from "@mui/material/Box"; 

 import Stack from "@mui/material/Stack"; 

 import FormControl from "@mui/material/FormControl"; 

 import FormLabel from "@mui/material/FormLabel"; 

 import FormHelperText from "@mui/material/FormHelperText"; 

 import TextField from "@mui/material/TextField"; 

 import Button from "@mui/material/Button";


function Login() {
  
  const schema = yup.object().shape({

  firstName: yup

    .string()

    .required()

    .default("")

    .max(10),

  gender: yup

    .mixed<"male" | "female" | "other">()

    .oneOf(["male", "female", "other"])

    .notRequired()

});

   const { 

     handleSubmit, 

     control, 

     reset, 

     formState: { errors }, 

   } = useForm({ 
mode: "onBlur",

    resolver: yupResolver(schema),

    shouldFocusError: true,

    criteriaMode: "all",

    reValidateMode: "onChange"
     defaultValues: { 

         firstName: "", 

   lastName: "", 

   email: "", 

   password: "", 

   phoneNumber: "", 

   gender: "", 

   birthDate: "2000-01-01", 

   //   dateToString:function(){ 

   // const x = this.birthDate 

   // console.log(x) 

   // if (typeof x !== String){ 

   //   console.log(x) 

   //   console.log(new Date(x)) 

   // } 

   //   }, 

   addresses: [""],

     }, 

   }); 

   const onSubmit = (data) => console.log(data); 

   const { t } = useTranslation("common");
  
  return (
    <Box width="50%" mx="auto" mt="150px" as="section">
      <div>Login</div>
              <Form 

           onSubmit={handleSubmit(onSubmit)} 

           sx={{ 

             mt: 2, 

             display: "flex", 

             justifyContent: "flex-start", 

             alignItems: "end", 

             gap: "1rem", 

           }} 

         > 
           
         //  <FormLabel component="legend">Gender</FormLabel>
           
           
           <FormControl error variant="standard"> 

             <Controller 

               name="email" 

               control={control} 

               rules={{ required: "Email Address is required" }} 

               render={({ field }) => ( 

                 <TextField 

                   {...field} 

                   id="component-error" 

                   label={t("button.firstName")} 

                   variant="standard" 

                   placeholder="Enter Your First Name" 

                 /> 

               )} 

             /> 

             <FormHelperText id="component-helper-text"> 

               {errors.firstName && errors.firstName.message} 

             </FormHelperText> 

           </FormControl> 

           <FormControl error variant="standard"> 

             <Controller 

               name="firstName" 

               control={control} 

               rules={{ required: "First Name is required" }} 

               render={({ field }) => ( 

                 <TextField 

                   {...field} 

                   id="component-error" 

                   label={t("button.firstName")} 

                   variant="standard" 

                   placeholder="Enter Your First Name" 

                 /> 

               )} 

             /> 

             <FormHelperText id="component-helper-text"> 

               {errors.email && errors.email.message} 

             </FormHelperText> 

           </FormControl> 

           <Button variant="contained" color="primary"> 

             {t("button.joinUs")} 

           </Button> 

         </Form>
    </Box>
  );
}
export default Login;
