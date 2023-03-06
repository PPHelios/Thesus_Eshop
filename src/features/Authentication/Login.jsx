import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Form } from "../../components/muiStyledComponents/muiStyledComponents";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function Login() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  const { t } = useTranslation("common");

  return (
    <Box
      sx={{ width: { xs: "80%", sm: "500px" } }}
      mx="auto"
      mt="130px"
      p={4}
      pt={1}
      as="section"
    >
      <Typography variant="h1" textAlign="center" mb={4}>
        Login
      </Typography>
      <Form
        textAlign="center"
        sx={{
          mt: 2,
          "& .MuiTextField-root": { mx: 2, width: "50cw" },
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email Address is required" }}
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
          rules={{ required: "Password is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              id="password"
              label={t("button.password")}
              variant="standard"
              placeholder="Enter Your Password"
              helperText={errors.password && errors.password.message}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ display: "block", mt: 4, mx: "auto" }}
        >
          {t("button.login")}
        </Button>
      </Form>
      <Box textAlign="right">
        <Typography mt={4} mr={1} display="inline-block">
          Not A Member
        </Typography>
        <Link href="/signup" color="secondary.main">
          Sign Up
        </Link>
      </Box>
    </Box>
  );
}
export default Login;
