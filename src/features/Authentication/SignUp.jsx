import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "../../components/muiStyledComponents/muiStyledComponents";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

function Signup() {
  const schema = yup.object().shape({
    firstName: yup

      .string()

      .required("This Field is required")

      .default("")

      .max(10)
      .trim(),

    lastName: yup

      .string()

      .required("This Field is required")

      .default("")

      .max(10)
      .trim(),

    email: yup
      .string()
      // .email("must be a valid email")
      .min(3, "Email must be at least 3 characters long")
      .max(20, "Email must be 30 characters max")
      .matches(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Not A Vallid Email"
      )
      .required("This Field is required")
      .trim(),

    password: yup.string().required("This Field is required"),
    rePassword: yup
      .string()
      .required("Password is mendatory")
      .oneOf([yup.ref("password")], "Passwords does not match"),
    phoneNumber: yup
      .string()
      .required("This Field is required")
      .min(5, "Phone Number must be at least 5 characters long")
      .max(20, "Phone Number must be 20 characters max")
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        "Not A Valid Phone Number"
      ),

    gender: yup.string().required("This Field is required"),

    //   birthDate: yup
    //     .date()
    //     .min("1900-01-01")
    //     .max("2000-01-01")
    //     .required("This Field is required"),

    address: yup
      .string()
      .required("This Field is required")
      .min(5, "Email must be at least 3 characters long")
      .max(30, "Email must be 30 characters max")
      .trim(),
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    // defaultValues: async () => fetch('/api-endpoint');
    // values, // will get updated once values returns
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phoneNumber: "",
      gender: "",
      address: "",
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
    criteriaMode: "all",
    reValidateMode: "onChange",
  });

  const onSubmit = (data) => console.log(data);

  const { t } = useTranslation("common");

  const genders = [
    { value: "Male", name: "Male" },
    { value: "Female", name: "Female" },
  ];
  return (
    <Box
      mx="auto"
      mt="130px"
      p={4}
      pt={1}
      as="section"
      sx={{ width: { xs: "90%", sm: "600px" } }}
    >
      <Typography variant="h1" mb={4} textAlign="center">
        Sign Up
      </Typography>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        textAlign="center"
        sx={{
          mt: 2,
          "& .MuiTextField-root": { mx: 2, mb: 3, width: "50cw" },
        }}
      >
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="firstName"
              label={t("button.firstName")}
              variant="standard"
              placeholder="Enter Your First Name"
              helperText={errors.firstName && errors.firstName.message}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id="lastName"
              label={t("button.firstName")}
              variant="standard"
              placeholder="Enter Your Last Name"
              helperText={errors.lastName && errors.lastName.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              id="email"
              label={t("button.email")}
              variant="standard"
              placeholder="Enter Your email"
              helperText={errors.email && errors.email.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              {...field}
              id="password"
              type="password"
              label={t("button.password")}
              variant="standard"
              placeholder="Enter Your Password"
              helperText={errors.password && errors.password.message}
            />
          )}
        />
        <Controller
          name="rePassword"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              {...field}
              id="rePassword"
              type="password"
              label={t("button.renterPassword")}
              variant="standard"
              placeholder="Re-enter Your Password"
              helperText={errors.rePassword && errors.rePassword.message}
            />
          )}
        />
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              id="phoneNumber"
              label={t("button.phoneNumber")}
              variant="standard"
              placeholder="Enter Your Phone Number"
              helperText={errors.phoneNumber && errors.phoneNumber.message}
            />
          )}
        />
        <FormControl sx={{ w: "50%", minWidth: "182px", ml: 2 }}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                type="select"
                fullWidth
                id="gender"
                labelId="gender-label"
                label="Gender"
                variant="standard"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {genders.map((gender) => (
                  <MenuItem key={gender.value} value={gender.value}>
                    {gender.name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <FormHelperText>
            {errors.gender && errors.gender.message}
          </FormHelperText>
        </FormControl>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              {...field}
              id="address"
              label={t("button.address")}
              variant="standard"
              placeholder="Re-enter Your Address"
              helperText={errors.address && errors.address.message}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ display: "block", mt: 4, mx: "auto" }}
        >
          {t("button.joinUs")}
        </Button>
      </Form>
      <Box textAlign="right">
        <Typography mt={4} mr={1} display="inline-block">
          Already A Member
        </Typography>
        <Link href="/login" color="secondary.main">
          Login
        </Link>
      </Box>
    </Box>
  );
}
export default Signup;
