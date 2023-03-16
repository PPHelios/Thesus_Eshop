import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductCard from "../../components/ProductCard/ProductCard";
import Stack from "@mui/material/Stack";
import { useStore } from "../../store/useStore";
import { XyzTransitionGroup } from "@animxyz/react";
import "@animxyz/core";
function NewIn() {
  const { t } = useTranslation("common");
  const filteredProducts = useStore((state) =>
    state.products.filter((item) => item.newArrival === true)
  );

  return (
    <Box as="section" py="2rem" px="1rem" backgroundColor="gray.light">
      <Typography variant="h3" as="h3" sx={{ mx: "auto", my: 2, pl: 2 }}>
        {t("home.newIn")}
      </Typography>
      <XyzTransitionGroup
        duration="auto"
        xyz="fade small stagger"
        appearVisible={{ threshold: 0.6, rootMargin: "100px" }}
      >
        <Stack
          direction={{ xs: "row", sm: "row" }}
          spacing={5}
          sx={{
            maxWidth: { xs: "96%", sm: "86%" },
            mx: "auto",
            mt: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {filteredProducts.map((item) => (
            <ProductCard item={item} key={item._id} />
          ))}
        </Stack>
      </XyzTransitionGroup>
    </Box>
  );
}
export default NewIn;
