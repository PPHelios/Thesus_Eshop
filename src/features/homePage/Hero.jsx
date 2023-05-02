import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import spring350 from "../../assets/images/2023_spring_pink_tzpwlq_c_scale,w_350.webp";
import spring941 from "../../assets/images/2023_spring_pink_tzpwlq_c_scale,w_941.webp";
import spring1232 from "../../assets/images/2023_spring_pink_tzpwlq_c_scale,w_1232.webp";
import spring1380 from "../../assets/images/2023_spring_pink_tzpwlq_c_scale,w_1380.webp";
import Button from "@mui/material/Button";
import { Img } from "../../components/muiStyledComponents/muiStyledComponents";
import { XyzTransition } from "@animxyz/react";
import "@animxyz/core";

function Hero() {
  const { t } = useTranslation("common");
  return (
    <Box as="main" sx={{ position: "relative" }}>
      <Img
        sizes="(max-width: 1380px) 100vw,
        1380px"
        src={spring1380}
        srcset={`${spring350} 350w,
          ${spring941} 941w,
${spring1232} 1232w,
${spring1380} 1380w`}
        alt="new shoes picture"
        sx={{
          width: "100%",
          maxHeight: "96vh",
          display: "block",
          mx: "auto",
          objectFit: "cover",
          objectPosition: "0 35%",
          minHeight: { xs: "210px", md: "470px" },
        }}
      />

      <Stack
        sx={{
          width: "100%",
          height: "100%",
          pt: { sm: "5%", md: "11%" },
          px: "2rem",
          position: { xs: "static", sm: "absolute" },
          top: 0,
          color: "primary.main",
          backgroundColor: "rgba(0,0,0,0.2)",
          justifyContent: "flex-start",
          gap: "3vw",
        }}
      >
        <XyzTransition
          appear
          duration="auto"
          xyz="fade up stagger-4 delay-2 duration-30"
        >
          <Box sx={{ width: { xs: "80%", sm: "50%", lg: "40%" } }}>
            <Typography
              variant="h2"
              as="h2"
              color="inherit"
              sx={{ fontWeight: 500 }}
              className="xyz-nested"
            >
              {t("home.newCollection")}
            </Typography>

            <Box>
              <Typography
                variant="h5"
                as="p"
                color="inherit"
                className="xyz-nested"
              >
                {t("home.hero")}
              </Typography>
              <Button
                variant="store"
                color="primary"
                sx={{ mt: "1rem" }}
                className="xyz-nested"
              >
                {t("button.shopNow")}
              </Button>
            </Box>
          </Box>
        </XyzTransition>
      </Stack>
    </Box>
  );
}
export default Hero;
