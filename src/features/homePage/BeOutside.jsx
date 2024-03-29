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
import { XyzTransition } from "@animxyz/react";
import "@animxyz/core";
//import { motion, Variants } from "framer-motion";

function BeOutside() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userEmail: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  const { t } = useTranslation("common");

  // const cardVariants = {
  //   offscreen: {
  //     // display: "none",
  //     opacity: 0,
  //     x: -100,
  //   },
  //   onscreen: {
  //     //  display: "block",
  //     opacity: 1,
  //     x: 0,
  //     // rotate: -10,
  //     transition: {
  //       type: "spring",
  //       bounce: 0.4,
  //       duration: 2,
  //     },
  //   },
  // };

  return (
    <Box>
      {/* <Typography
        variant="h2"
        component={motion.div}
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "all", margin: "0px 0px 0px 100px" }}
        mb={2}
        color="primary.main"
        fontWeight="400"
      >
        {t("home.beOutside")}
      </Typography> */}
      <XyzTransition
        appearVisible={{ threshold: 0.6, rootMargin: "100px" }}
        xyz="fade rotate-right ease-out-back"
      >
        <Typography
          variant="h2"
          mb={2}
          pl={2}
          color="text.primary"
          fontWeight="400"
        >
          {t("home.beOutside")}
        </Typography>
      </XyzTransition>
      <XyzTransition
        appearVisible={{ threshold: 0.8, rootMargin: "50px" }}
        xyz="fade flip-down stagger duration-10 "
      >
        <Stack
          sx={{
            flexDirection: { sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Img
            src={require(`../../assets/images/beOutside1.webp`)}
            sx={{
              width: { xs: "70%", sm: "25%" },
              maxHeight: { xs: 660, sm: 450 },
              objectFit: "cover",
              objectPosition: "0% 5%",
            }}
            alt="woman waring our beige weekend boot"
            loading="lazy"
            className="xyz-nested"
          />

          <Img
            src={require(`../../assets/images/beOutside2.webp`)}
            sx={{
              width: { xs: "70%", sm: "25%" },
              maxHeight: { xs: 660, md: 450 },
              objectFit: "cover",
              objectPosition: "0% 65%",
            }}
            alt="woman waring our beige clog "
            loading="lazy"
            className="xyz-nested"
          />

          <Img
            src={require(`../../assets/images/beOutside3.webp`)}
            sx={{
              width: { xs: "70%", sm: "25%" },
              maxHeight: { xs: 660, md: 450 },
              objectFit: "cover",
              objectPosition: "0% 75%",
            }}
            alt="woman waring our grey weekend boot"
            loading="lazy"
            className="xyz-nested"
          />
        </Stack>
      </XyzTransition>
      <Box backgroundColor="gray.light" mt={4} p={4} pl={8}>
        <Typography variant="h4" as="p" color="text.secondary" width="60%">
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
          <Button variant="contained" color="primary" sx={{}}>
            {t("button.joinUs")}
          </Button>
        </Form>
      </Box>
    </Box>
  );
}
export default BeOutside;
