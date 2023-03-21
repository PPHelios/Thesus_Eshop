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

function Store({ pageProduct, pageTitle, pageParagraph }) {
  const { t } = useTranslation("common");
  const products = useStore((state) => state.products);
  let filteredProducts;
  if (pageProduct) {
    filteredProducts = products.filter(
      (product) => product.category === pageProduct
    );
  } else {
    filteredProducts = products;
  }

  return (
    <Box mt="120px" backgroundColor="gray.light">
      {pageProduct === "Weekend Boot" && (
        <Box as="main" position="relative">
          <Img
            sizes="(max-width: 1280px) 50vw, 1280px"
            srcSet={`${require(`../../assets/images/weekendBootsHero,w_300.webp`)} 300w,
${require(`../../assets/images/weekendBootsHero,w_657.webp`)} 657w,
${require(`../../assets/images/weekendBootsHero,w_941.webp`)} 941w,
${require(`../../assets/images/weekendBootsHero,w_1221.webp`)} 1221w,
${require(`../../assets/images/weekendBootsHero,w_1280.webp`)} 1280w`}
            src={require(`../../assets/images/weekendBootsHero,w_941.webp`)}
            alt="a girl with beige weekend boots"
            width="100%"
            sx={{
              minHeight: { xs: "210px", md: "470px" },
              filter: "brightness(80%)",
            }}
          />
          <XyzTransition
            appear
            duration="auto"
            xyz="fade up delay-5 duration-30"
          >
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
                sx={{ fontSize: { xs: "0.8rem", sm: "calc(0.2rem + 1vw)" } }}
              >
                {t("store.storeBootsHeroSub")}
              </Typography>
            </Stack>
          </XyzTransition>
        </Box>
      )}

      {pageProduct === "Terrus Clog" && (
        <Box as="main" position="relative">
          <Img
            sizes="(max-width: 1280px) 50vw, 1280px"
            srcSet={`${require(`../../assets/images/terrusClogsHero,w_300.webp`)} 300w,
${require(`../../assets/images/terrusClogsHero,w_657.webp`)} 657w,
${require(`../../assets/images/terrusClogsHero,w_941.webp`)} 941w,
${require(`../../assets/images/terrusClogsHero,w_1221.webp`)} 1221w,
${require(`../../assets/images/terrusClogsHero,w_1280.webp`)} 1280w`}
            src={require(`../../assets/images/terrusClogsHero,w_941.webp`)}
            alt="a girl with beige terrus clog"
            width="100%"
            sx={{
              minHeight: { xs: "210px", md: "470px" },
              filter: "brightness(80%)",
            }}
          />
          <XyzTransition
            appear
            duration="auto"
            xyz="fade up delay-5 duration-30"
          >
            <Stack
              position="absolute"
              display="flex"
              justifyContent="center"
              alignItems="center"
              left={0}
              top={0}
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
                {t("store.storeClogsHero")}
              </Typography>
              <Typography
                as="p"
                sx={{ fontSize: { xs: "0.8rem", sm: "calc(0.3rem + 1vw)" } }}
              >
                {t("store.storeClogsHeroSub")}
              </Typography>
            </Stack>
          </XyzTransition>
        </Box>
      )}
      {!pageProduct && (
        <Box as="main" position="relative">
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
              {t("store.storeClogsHero")}
            </Typography>
            <Typography
              as="p"
              sx={{ fontSize: { xs: "0.8rem", sm: "calc(0.2rem + 1vw)" } }}
            >
              {t("store.storeClogsHeroSub")}
            </Typography>
          </Stack>
        </Box>
      )}
      <Box p="1rem">
        <Stack mt={2} mb={7} spacing={1} alignItems="center">
          <Typography variant="h2" width="90%" textAlign="center">
            {t(`store.${pageTitle}`)}
          </Typography>
          {pageParagraph && (
            <Typography variant="body2" as="p" width="70%" textAlign="center">
              {t(`store.${pageParagraph}`)}
            </Typography>
          )}
        </Stack>

        <XyzTransitionGroup
          duration="auto"
          xyz="fade small stagger-2 duration-5 "
          appearVisible={{ threshold: 0.4, rootMargin: "200px" }}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            flexWrap="wrap"
            gap={2}
          >
            {filteredProducts &&
              filteredProducts.map((product) => (
                <ProductCard item={product} key={product._id} />
              ))}
          </Stack>
        </XyzTransitionGroup>
      </Box>
    </Box>
  );
}
export default Store;
