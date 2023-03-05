import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { Img } from "../muiStyledComponents/muiStyledComponents";
function ProductCard({ item }) {
  const { t, i18n } = useTranslation("common");
  const lang = i18n.dir();
  return (
    <>
      <Stack
        key={item.id}
        spacing={1}
        sx={{
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ overflow: "hidden" }}>
          <Img
            src={require(`../../assets/images/${item.img}.webp`)}
            alt={item.alt}
            sx={{
              display: "block",
              maxHeight: "400px",
              objectFit: "cover",
              transition: "0.5s",
              ":hover": {
                transform: "scale(1.2)",
              },
            }}
          />
        </Box>
        <Typography variant="h6" as="h6">
          {lang === "rtl" ? item.nameAr : item.name}
        </Typography>
        <Typography variant="subtitle2">
          {t("product.price", { valEgp: item.priceEgp, valUsd: item.price })}
        </Typography>
        <Button variant="store" color="primary" w="50px">
          {t("button.addToCart")}
        </Button>
      </Stack>
    </>
  );
}
export default ProductCard;
