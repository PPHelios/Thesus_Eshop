import Stack from "@mui/material/Stack";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const Img = styled("img")({});
function ProductCard({ item }) {
  return (
    <>
      <Stack key={item.id} spacing={1} sx={{ alignItems: "flex-start" }}>
        <Img
          src={require(`../../assets/images/${item.img}.webp`)}
          alt={item.alt}
          sx={{
            display: "block",
            maxWidth: "100%",
            maxHeight: "400px",
          }}
        />
        <Typography variant="h6" as="h6">
          {item.name}
        </Typography>
        <Typography variant="subtitle2">{item.price}</Typography>
        <Button variant="contained" color="primary" w="50px">
          Add To Cart
        </Button>
      </Stack>
    </>
  );
}
export default ProductCard;
