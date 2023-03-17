import { useTranslation } from "react-i18next";
import { useStore } from "../../store/useStore";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import CartItem from "./CartItem";

function Checkout() {
  const { t } = useTranslation("common");
  const navigate = useNavigate();
  const totalItemsNumber = useStore((state) => state.cartTotalItems());
  const cartItems = useStore((state) => state.user.cart);
  const cartTotalItemsPrice = useStore((state) => state.cartTotalItemsPrice());
  const cartTotalItemsPriceBeforeDiscount = useStore((state) =>
    state.cartTotalItemsPriceBeforeDiscount()
  );
  return (
    <Stack mt={20} mb={4} px={5}>
      <Typography variant="h6">
        {t("store.yourCart")} ({totalItemsNumber})
      </Typography>

      <Stack direction="row" spacing={3} justifyContent="space-evenly">
        {!totalItemsNumber ? (
          <Stack>
            <Box mt={2} textAlign="center">
              <ShoppingBagOutlinedIcon sx={{ fontSize: "250px" }} />
              <Typography variant="body2" fontSize="large">
                {t("store.shoppingCartEmpty")}
              </Typography>
            </Box>
          </Stack>
        ) : (
          <Stack width="60%" p={1} spacing={2}>
            {cartItems &&
              cartItems.map((item) => (
                <CartItem key={item._id} item={item} direction="row" />
              ))}
          </Stack>
        )}
        <Stack mt={3} px={2}>
          <Typography
            variant="body1"
            color="red"
            sx={{ textDecoration: "line-through" }}
          >
            {t("store.totalPriceBeforeDiscount")}:{" "}
            {cartTotalItemsPriceBeforeDiscount}
          </Typography>
          <Typography variant="h6">
            {t("store.totalPrice")}: {cartTotalItemsPrice}
          </Typography>
          <Button
            width="100px"
            variant="store"
            color="primary"
            fullWidth
            onClick={
              !totalItemsNumber
                ? () => navigate("/shop")
                : () => navigate("/checkout")
            }
          >
            {!totalItemsNumber
              ? t("button.shopItems")
              : t("button.proceedToCheckOut")}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
export default Checkout;
