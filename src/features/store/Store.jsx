import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import ProductCard from "../../components/ProductCard/ProductCard";
import Stack from "@mui/material/Stack";
import { Img } from "../../components/muiStyledComponents/muiStyledComponents";
const products = [
  {
    id: 1,
    name: "The Farrah Weekend Boot",
    nameAr: "حذاء فرح لعطله نهايه الاسبوع",
    price: 2207,
    discountedPrice: 0,
    discountPercentage: 10,
    soldOut: false,
    img: "boot3",
    alt: "Farah Weekend red Boot",
    sku: "1234567",
    stockQuantity: 10,
  },
  {
    id: 3,
    name: "The Farrah Weekend Boot",
    nameAr: "حذاء فرح لعطله نهايه الاسبوع",
    price: 2207,
    discountedPrice: 0,
    discountPercentage: 0,
    soldOut: false,
    img: "boot3",
    alt: "Farah Weekend red Boot",
    sku: "1234567",
    stockQuantity: 0,
  },
  {
    id: 2,
    name: "The Farrah Weekend Boot",
    nameAr: "حذاء فرح لعطله نهايه الاسبوع",
    price: 2207,
    discountedPrice: 0,
    discountPercentage: 0,
    soldOut: false,
    img: "boot3",
    alt: "Farah Weekend red Boot",
    sku: "1234567",
    stockQuantity: 10,
  },
];

function Store() {
  const { t } = useTranslation("common");
  return (
    <Box mt="85px">
      <Box as="main" position="relative">
        <Img
          src={require("../../assets/images/shopHero.webp")}
          alt="a girl with beige weekend boots"
          minHeight="400px"
          maxHeight="85vh"
        />
        <Stack
          position="absolute"
          display="flex"
          justifyContent="center"
          alignItems="center"
          top="-5vw"
          left={0}
          width="100%"
          height="100%"
          color="white"
          textAlign="center"
        >
          <Typography variant="h1">{t("store.storeHero")}</Typography>
          <Typography variant="h5" as="p">
            {t("store.storeHeroSub")}
          </Typography>
        </Stack>
      </Box>
      <Stack direction="row" flexWrap="wrap">
        {products.map((product) => (
          <ProductCard item={product} />
        ))}
      </Stack>
    </Box>
  );
}
export default Store;
