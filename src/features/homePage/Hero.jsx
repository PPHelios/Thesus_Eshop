import { styled } from "@mui/material/styles";
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
        }}
      />
      <Stack
        sx={{
          width: { xs: "80%", sm: "50%", lg: "40%" },
          height: "100%",
          mt: "2rem",
          px: "1rem",
          position: { xs: "static", sm: "absolute" },
          top: "10%",
          color: "primary.main",
          justifyContent: "flex-start",
          gap: "3vw",
        }}
      >
        <Typography
          variant="h2"
          as="h2"
          color="inherit"
          sx={{ fontWeight: 500 }}
        >
          {t("home.newCollection")}
        </Typography>
        <Box>
          <Typography variant="h5" as="p" color="inherit">
            {t("home.hero")}
          </Typography>
          <Button variant="store" color="primary" sx={{ mt: "1rem" }}>
            {t("button.shopNow")}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
export default Hero;
