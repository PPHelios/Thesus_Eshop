import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import spring350 from "../../assets/images/2023_spring_pink_tzpwlq_c_scale,w_350.webp";
import spring941 from "../../assets/images/2023_spring_pink_tzpwlq_c_scale,w_941.webp";
import spring1232 from "../../assets/images/2023_spring_pink_tzpwlq_c_scale,w_1232.webp";
import spring1380 from "../../assets/images/2023_spring_pink_tzpwlq_c_scale,w_1380.webp";
import Button from "@mui/material/Button";

const Img = styled("img")({});
function Hero() {
  return (
    <Box sx={{ position: "relative" }}>
      <Img
        sizes="(max-width: 1380px) 100vw, 1380px"
        srcset={`${spring350} 350w,
          ${spring941} 941w,
${spring1232} 1232w,
${spring1380} 1380w`}
        src={spring1380}
        alt="new shoes picture"
        sx={{
          width: "100%",
          maxHeight: "85vh",
          display: "block",
          mx: "auto",
          objectFit: "cover",
          objectPosition: "0 35%",
        }}
      />
      <Stack
        sx={{
          width: { sm: "40%", lg: "30%" },
          height: "100%",
          py: "4vw",
          pl: "2rem",
          position: "absolute",
          top: 0,
          left: 0,
          color: "green.dark",
          flexDirection: "column",
          justifyContent: "space-between",
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Typography
          variant="h2"
          as="h2"
          color="inherit"
          sx={{ fontWeight: 500 }}
        >
          The New Collection is Here.
        </Typography>
        <Box>
          <Typography variant="h5" as="p" color="inherit">
            Comfy. Water Resistant. Unisex. Made with 96% Recycled and Natural
            Materials.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: "1rem" }}>
            Shop Now
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
export default Hero;
