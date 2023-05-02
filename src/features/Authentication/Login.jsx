import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Form } from "../../components/muiStyledComponents/muiStyledComponents";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useStore } from "../../store/useStore";
import { useNavigate } from "react-router-dom";
function Login() {
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { t } = useTranslation("common");
  const login = useStore((state) => state.login);
  const loggedInUser = useStore((state) => state.user?.firstName);
   const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setError("");
    try {
      const loggedIn = await login(data);
      if (loggedIn) {
        setSubmitting(false);
         navigate("/")
      }
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  return (
    <Box
      sx={{ width: { xs: "80%", sm: "500px" } }}
      mx="auto"
      mt="130px"
      p={4}
      pt={1}
      as="section"
    >
      {!loggedInUser ? (
        <>
          <Typography variant="h1" textAlign="center" mb={4}>
            {t("button.login")}
          </Typography>
          <Form
            textAlign="center"
            sx={{
              mt: 2,
              "& .MuiTextField-root": { width: "50cw" },
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
                  type="password"
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
              disabled={submitting}
              sx={{ display: "block", mt: 4, mx: "auto", color: "white" }}
            >
              {t("button.submit")}
            </Button>
          </Form>
          {error && (
            <Typography variant="body1" as="p" color="red">
              {error}
            </Typography>
          )}
          <Box>
            <Typography mt={4} mr={1} display="inline-block">
              {t("form.notMember")}
            </Typography>
            <Link href="/signup" color="secondary.main">
              {t("button.signup")}
            </Link>
          </Box>
        </>
      ) : (
        <Typography variant="h2" textAlign="center" color="text.secondary">
          You are Already Logged In
        </Typography>
      )}
    </Box>
  );
}
export default Login;
