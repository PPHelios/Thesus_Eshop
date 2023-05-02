import { useState } from "react";
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
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useStore } from "../../store/useStore";

function Signup() {
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { t } = useTranslation("common");

  const addUser = useStore((state) => state.addUser);
  const theme = useStore((state) => state.user.theme);
  const loggedInUser = useStore((state) => state.user?.firstName);
  const schema = yup.object().shape({
    firstName: yup

      .string()

      .required(t("formErrors.fieldRequired"))

      .default("")

      .max(10)
      .trim(),

    lastName: yup

      .string()

      .required(t("formErrors.fieldRequired"))

      .default("")

      .max(10)
      .trim(),

    email: yup
      .string()
      // .email("must be a valid email")
      .max(20, t("formErrors.fieldMax", { val: "30" }))
      .matches(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        t("formErrors.notValid", { val: "email" })
      )
      .required(t("formErrors.fieldRequired"))
      .trim(),

    password: yup
      .string()
      .required(t("formErrors.fieldRequired"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        t("formErrors.pwdRegex")
      ),
    rePassword: yup
      .string()
      .required(t("formErrors.fieldRequired"))
      .oneOf([yup.ref("password")], t("formErrors.pwdDoesntMatch")),
    phoneNumber: yup
      .string()
      .required(t("formErrors.fieldRequired"))
      .min(5, t("formErrors.fieldMin", { val: "5" }))
      .max(20, t("formErrors.fieldMax", { val: "20" }))
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, // eslint-disable-line
        t("formErrors.notValid", { val: "Phone Number" })
      ),
    gender: yup.string().required(t("formErrors.fieldRequired")),

    address: yup
      .string()
      .required(t("formErrors.fieldRequired"))
      .min(5, t("formErrors.fieldMin", { val: "5" }))
      .max(30, t("formErrors.fieldMax", { val: "30" }))
      .trim(),

    birthDate: yup
      .date()
      .min(dayjs.utc("1900-01-01"), t("formErrors.dateBefore"))
      .max(dayjs.utc(), t("formErrors.dateAfter"))
      .required(t("formErrors.fieldRequired")),
    theme: yup.string(),
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
      birthDate: dayjs.utc("2000-01-1"),
      theme,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
    criteriaMode: "all",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data) => {
    console.log(data);
    setSubmitting(true);
    setError("");
    try {
      const add = await addUser(data);
      if (add) {
        setSubmitting(false);
        reset();
      }
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  const genders = [
    { value: "Male", name: t("form.male") },
    { value: "Female", name: t("form.female") },
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
      {!loggedInUser ? (
        <>
          <Typography variant="h1" mb={4} textAlign="center">
            {t("button.signup")}
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
                  label={t("form.firstName")}
                  variant="standard"
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
                  label={t("form.lastName")}
                  variant="standard"
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
                  label={t("form.email")}
                  variant="standard"
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
                  label={t("form.password")}
                  variant="standard"
                  placeholder={t("formErrors.pwdRegex")}
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
                  label={t("form.rePassword")}
                  variant="standard"
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
                  label={t("form.phoneNumber")}
                  variant="standard"
                  helperText={errors.phoneNumber && errors.phoneNumber.message}
                />
              )}
            />
            <FormControl sx={{ w: "50%", minWidth: "182px", ml: 2 }}>
              <InputLabel id="gender-label">{t("form.gender")}</InputLabel>
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
                    variant="standard"
                  >
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
                  label={t("form.address")}
                  variant="standard"
                  helperText={errors.address && errors.address.message}
                />
              )}
            />
            <FormControl>
              <DemoItem label={t("form.birthDate")}>
                <Controller
                  name="birthDate"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      id="birthDate"
                      labelId="birthDate-picker"
                      aria-labelledby="birthDate-picker"
                      format="DD/MM/YYYY"
                    />
                  )}
                />
                <FormHelperText>
                  {errors.birthDate && errors.birthDate.message}
                </FormHelperText>
              </DemoItem>
            </FormControl>

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
              {t("form.alreadyMember")}
            </Typography>
            <Link href="/login" color="secondary.main">
              {t("button.login")}
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
export default Signup;
