import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductCard from "../../components/ProductCard/ProductCard";
import Stack from "@mui/material/Stack";
import { useStore } from "../../store/useStore";

function NewIn() {
  const { t } = useTranslation("common");
  const filteredProducts = useStore(state=>state.products.filter(item => item.newArrival===true)) 

  return (
    <Box as="section" mt="2rem" px="1rem">
      <Typography variant="h3" as="h3" sx={{ mx: "auto", my: 2, pl: 2 }}>
        {t("home.newIn")}
      </Typography>

      <Stack
        direction={{ xs: "row", sm: "row" }}
        spacing={5}

        sx={{
          maxWidth: { xs: "96%", sm: "86%" },
          mx: "auto",
          mt: "2rem",
          justifyContent: "center",
          alignItems:"center",
        }}
      >
        {filteredProducts.map((item) => (

          <ProductCard item={item} key={item._id}/>


        ))}
      </Stack>
    </Box>
  );
}
export default NewIn;
