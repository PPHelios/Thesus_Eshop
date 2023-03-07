import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductCard from "../../components/ProductCard/ProductCard";
import Stack from "@mui/material/Stack";

const data = [
  // {
  //   id: 0,
  //   name: "The Simone Weekend Boot",
  //   nameAr: "حذاء سيمون لعطله نهايه الاسبوع",
  //   price: 65,
  //   discountedPrice: 0,
  //   discounrtPercentage: 0,
  //   onSale: false,
  //   soldout: false,
  //   img: "boot1",
  //   alt: "Simone Weekend beige Boot with blue laces",
  //   sku: "1234567",
  //   stockQuantity: 10,
  // },
  // {
  //   id: 1,
  //   name: "The Marlin Weekend Boot",
  //   nameAr: "حذاء مارلين لعطله نهايه الاسبوع",
  //   price: 75,
  //   priceEgp: 2300,
  //   discountedPrice: 0,
  //   discounrtPercentage: 0,
  //   onSale: false,
  //   soldout: false,
  //   img: "boot2",
  //   alt: "Marlin Weekend blue Boot with orange laces",
  //   sku: "1234567",
  //   stockQuantity: 10,
  // },
  {
    id: 3,
    name: "The Farrah Weekend Boot",
    nameAr: "حذاء فرح لعطله نهايه الاسبوع",
    price: 75,
    price: 2400,
    discountedPrice: 0,
    discounrtPercentage: 0,
    onSale: false,
    soldout: true,
    img: "boot3",
    alt: "Farah Weekend red Boot",
    sku: "1234567",
    stockQuantity: 10,
  },
  {
    id: 3,
    name: "The Farrah Weekend Boot",
    nameAr: "حذاء فرح لعطله نهايه الاسبوع",
    price: 75,
    price: 2400,
    discountedPrice: 0,
    discounrtPercentage: 0,
    onSale: false,
    soldout: true,
    img: "boot3",
    alt: "Farah Weekend red Boot",
    sku: "1234567",
    stockQuantity: 10,
  },
];
function NewIn() {
  const { t } = useTranslation("common");
  return (
    <Box as="section" mt="2rem" px="1rem">
      <Typography variant="h3" as="h3" sx={{ mx: "auto", my: 2, pl: 2 }}>
        {t("home.newIn")}
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={5}
        sx={{
          maxWidth: { xs: "96%", sm: "86%" },
          mx: "auto",
          mt: "2rem",
          justifyContent: "center",
        }}
      >
        {data.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </Stack>
    </Box>
  );
}
export default NewIn;
