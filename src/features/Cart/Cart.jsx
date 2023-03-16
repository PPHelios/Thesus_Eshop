import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useStore } from "../../store/useStore";

function Cart({ onClick }) {
  const totalItemsNumber = 2; //useStore((state) => state.cartTotalItems());
  return (
    <Stack backgroundColor="secondary.light" height="100%" minWidth={300}>
      <Stack p={2} flexDirection="row" justifyContent="space-between">
        <Typography variant="h6">Your Cart ({totalItemsNumber})</Typography>
        <IconButton aria-label="close" onClick={onClick}>
          <CloseIcon />
        </IconButton>
      </Stack>
      {!totalItemsNumber ? (
        <Stack>
          <Box mt={2} textAlign="center">
            <ShoppingBagOutlinedIcon sx={{ fontSize: "250px" }} />
            <Typography variant="body2" fontSize="large">
              Your Shopping Cart Is Empty...
            </Typography>
          </Box>
        </Stack>
      ) : (
        <Stack>
          <div>kokowawa</div>
        </Stack>
      )}
    </Stack>
  );
}
export default Cart;
