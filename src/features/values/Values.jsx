import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductCard from "../../components/ProductCard/ProductCard";
import Stack from "@mui/material/Stack";
import { Img } from "../../components/muiStyledComponents/muiStyledComponents";
import { useStore } from "../../store/useStore";
import { XyzTransitionGroup } from "@animxyz/react";
import { XyzTransition } from "@animxyz/react";
import "@animxyz/core";

function Values() {
  const { t } = useTranslation("common");
  return (
    <Box mt="120px" backgroundColor="gray.light">
      <Box as="main" position="relative">
        <Img
          sizes="(max-width: 1280px) 50vw, 1280px"
          srcSet={`${require(`../../assets/images/valuesHero,w_300.webp`)} 300w,
${require(`../../assets/images/valuesHero,w_657.webp`)} 657w,
${require(`../../assets/images/valuesHero,w_941.webp`)} 941w,
${require(`../../assets/images/valuesHero,w_1221.webp`)} 1221w,
${require(`../../assets/images/valuesHero,w_1280.webp`)} 1280w`}
          src={require(`../../assets/images/valuesHero,w_1280.webp`)}
          alt="a girl enjoing the sun in the fields"
          width="100%"
          sx={{
            minHeight: { xs: "210px", md: "470px" },
            filter: "brightness(80%)",
          }}
        />
        <XyzTransition appear duration="auto" xyz="fade up delay-5 duration-30">
          <Stack
            position="absolute"
            display="flex"
            justifyContent="center"
            alignItems="center"
            left={0}
            width="100%"
            height="100%"
            color="white"
            textAlign="center"
            sx={{ top: { xs: "2vw", sm: "-12vw" } }}
          >
            <Typography
              as="h2"
              sx={{
                fontSize: { xs: "1.6rem", sm: "calc(2rem + 4vw)" },
                fontWeight: "700",
              }}
            >
              {t("store.storeBootsHero")}
            </Typography>
            <Typography
              as="p"
              sx={{ fontSize: { xs: "1rem", sm: "calc(0.3rem + 1vw)" } }}
            >
              {t("store.storeBootsHeroSub")}
            </Typography>
          </Stack>
        </XyzTransition>
      </Box>
    </Box>
  );
}
export default Values;
