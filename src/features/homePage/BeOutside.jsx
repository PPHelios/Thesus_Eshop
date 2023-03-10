import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  Img,
  Form,
} from "../../components/muiStyledComponents/muiStyledComponents";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Zoom from '@mui/material/Zoom';

function BeOutside() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userEmail: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  const { t } = useTranslation("common");
  console.log(errors.userEmail?.message);

  return (
    <Box px="1rem">
      <Typography variant="h2" mb={2} color="primary.main" fontWeight="400">
        {t("home.beOutside")}
      </Typography>
      <Stack
        sx={{
          flexDirection: { sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
           
     
         <Zoom  in={true} appear timeout= {2000} >
        <Img
          src={require(`../../assets/images/beOutside1.webp`)}
          sx={{
            width: { xs: "70%", sm: "25%" },
            maxHeight: { xs: 660, sm: 450 },
            objectFit: "cover",
            objectPosition: "0% 5%",
          }}
          alt="woman waring our beige weekend boot"
        />
</Zoom>
<Zoom  in={true} appear timeout= {2000} style={{ transitionDelay: "1000ms" }}>
        <Img
          src={require(`../../assets/images/beOutside2.webp`)}
          sx={{
            width: { xs: "70%", sm: "25%" },
            maxHeight: { xs: 660, md: 450 },
            objectFit: "cover",
            objectPosition: "0% 65%",
          }}
          alt="woman waring our beige clog "
        />
        </Zoom>
        <Zoom  in={true} appear timeout= {2000} style={{ transitionDelay: "2000ms" }}>
        <Img
          src={require(`../../assets/images/beOutside3.webp`)}
          sx={{
            width: { xs: "70%", sm: "25%" },
            maxHeight: { xs: 660, md: 450 },
            objectFit: "cover",
            objectPosition: "0% 75%",
          }}
          alt="woman waring our grey weekend boot"
        />
        </Zoom>
      </Stack>
      <Box backgroundColor="#efefef" mt={4} p={4} pl={8}>
        <Typography variant="h3" color="primary.main" width="60%">
          {t("home.stayInTouch", { val: 10, valEgp: 300 })}
        </Typography>
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
          <FormControl error variant="standard">
            <Controller
              name="userEmail"
              control={control}
              rules={{ required: "Email Address is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="component-error"
                  label={t("form.email")}
                  variant="standard"
                  placeholder="Enter Your Email"
                />
              )}
            />
            <FormHelperText id="component-helper-text">
              {errors.userEmail && errors.userEmail.message}
            </FormHelperText>
          </FormControl>
          <Button variant="contained" color="primary">
            {t("button.joinUs")}
          </Button>
        </Form>
      </Box>
    </Box>
  );
}
export default BeOutside;
