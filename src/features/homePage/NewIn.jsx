import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductCard from "../../components/ProductCard/ProductCard";
import Stack from "@mui/material/Stack";

const data = [
  {
    id: 0,
    name: "The Simone Weekend Boot",
    price: 2000,
    img: "boot1",
    alt: "Simone Weekend beige Boot with blue laces",
  },
  {
    id: 0,
    name: "The Marlin Weekend Boot",
    price: 2300,
    img: "boot2",
    alt: "Marlin Weekend blue Boot with orange laces",
  },
];
function NewIn() {
  return (
    <Box as="section">
      <Typography
        variant="h3"
        as="h3"
        sx={{ mx: "auto", my: 2, pl: 2, textAlign: "left" }}
      >
        New In
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={5}
        sx={{
          maxWidth: { xs: "96%", sm: "86%" },
          mx: "auto",
          justifyContent: "center",
        }}
      >
        {data.map((item) => (
          <ProductCard item={item} />
        ))}
      </Stack>
    </Box>
  );
}
export default NewIn;
