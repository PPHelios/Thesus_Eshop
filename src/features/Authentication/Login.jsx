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
        {t("button.login")}
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
          rules={{ required: t("formErrors.fieldRequired") }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              id="email"
              label={t("form.email")}
              variant="standard"
              placeholder="Enter Your email"
              helperText={errors.email && errors.email.message}
              //  sx={{ ".MuiFormHelperText-root": { color: "red" } }}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: t("formErrors.fieldRequired") }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              id="password"
              label={t("form.password")}
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
          fullWidth
          sx={{ display: "block", mt: 4, mx: "auto" }}
        >
          {t("button.submit")}
        </Button>
      </Form>
      <Box>
        <Typography mt={4} mr={1} display="inline-block">
          {t("form.notMember")}
        </Typography>
        <Link href="/signup" color="secondary.main">
          {t("button.signup")}
        </Link>
      </Box>
    </Box>
  );
}
export default Login;
