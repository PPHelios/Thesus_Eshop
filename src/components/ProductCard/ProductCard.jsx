import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { Img } from "../muiStyledComponents/muiStyledComponents";

function ProductCard({ item }) {
  const { t, i18n } = useTranslation("common");
  const lang = i18n.dir();
  let discountedPrice;
  if (item?.discountPercentage > 0) {
    discountedPrice = Math.floor(
      item.price - (item.price / 100) * item.discountPercentage
    );
  } else {
    discountedPrice = false;
  }

  return (
    <>
      <Stack
        key={item.id}
        spacing={1}
        p={2}
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ minWidth: { xs: "25%", sm: "25%" } }}
      >
        <Box position="relative" sx={{ overflow: "hidden" }}>
          {item.discountPercentage > 0 && (
            <Typography
              variant="body1"
              p={0.4}
              backgroundColor="secondary.light"
              position="absolute"
              top="10px"
              left="10px"
              zIndex={100}
            >
              {`-${item.discountPercentage}%`}
            </Typography>
          )}
          {item.soldOut ||
            (item.stockQuantity === 0 && (
              <Typography
                variant="body1"
                p={0.4}
                color="white"
                backgroundColor="black"
                position="absolute"
                top="10px"
                left="10px"
                zIndex={100}
              >
                {t("shop.soldOut")}
              </Typography>
            ))}
          <Img
            sizes="(max-width: 1280px) 100vw, 1280px"
            srcset={`${require(`../../assets/images/${item.img},w_300.webp`)} 300w,
${require(`../../assets/images/${item.img},w_663.webp`)} 663w,
${require(`../../assets/images/${item.img},w_983.webp`)} 983w,
${require(`../../assets/images/${item.img},w_1166.webp`)} 1166w,
${require(`../../assets/images/${item.img},w_1280.webp`)} 1280w}`}
            src={require(`../../assets/images/${item.img},w_1280.webp`)}
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

        {discountedPrice && (
          <Typography variant="subtitle2">
            {t("product.price", {
              valEgp: discountedPrice,
              valUsd: discountedPrice,
            })}
          </Typography>
        )}
        {!discountedPrice ? (
          <Typography variant="subtitle2">
            {t("product.price", { valEgp: item.priceEgp, valUsd: item.price })}
          </Typography>
        ) : (
          <Typography
            variant="subtitle2"
            color="red"
            sx={{ textDecoration: "line-through" }}
          >
            {t("product.price", { valEgp: item.priceEgp, valUsd: item.price })}
          </Typography>
        )}
        <Button
          variant="store"
          color="primary"
          w="50px"
          disabled={item.soldout || item.stockQuantity === 0}
        >
          {t("button.addToCart")}
        </Button>
      </Stack>
    </>
  );
}
export default ProductCard;
