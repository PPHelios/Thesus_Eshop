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

function Cart({ onClick }) {
  const { t } = useTranslation("common");
  const navigate = useNavigate();
  const totalItemsNumber = useStore((state) => state.cartTotalItems());
  const cartItems = useStore((state) => state.user.cart);
  const cartTotalItemsPrice = useStore((state) => state.cartTotalItemsPrice());
  const cartTotalItemsPriceBeforeDiscount = useStore((state) =>
    state.cartTotalItemsPriceBeforeDiscount()
  );
  return (
    <Stack
      minWidth={200}
      maxWidth="90vw"
      maxHeight="max-content"
      minHeight="100%"
      backgroundColor="secondary.light"
    >
      <Stack p={2} flexDirection="row" justifyContent="space-between">
        <Typography variant="h6">
          {t("store.yourCart")} ({totalItemsNumber})
        </Typography>
        <IconButton aria-label="close" onClick={onClick}>
          <CloseIcon />
        </IconButton>
      </Stack>
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
        <Stack height="64%" p={1} spacing={2} sx={{ overflowY: "auto" }}>
          {cartItems &&
            cartItems.map((item) => <CartItem key={item._id} item={item} />)}
        </Stack>
      )}
      <Stack mt={3} px={2}>
        <Typography
          variant="body1"
          color="red"
          sx={{ textDecoration: "line-through" }}
        >
          {cartTotalItemsPriceBeforeDiscount > 0 &&
            cartTotalItemsPriceBeforeDiscount !== cartTotalItemsPrice &&
            t("store.totalPriceBeforeDiscount", {
              val: cartTotalItemsPriceBeforeDiscount,
            })}
        </Typography>
        <Typography variant="h6">
          {cartTotalItemsPrice > 0 &&
            t("store.totalPrice", { val: cartTotalItemsPrice })}
        </Typography>
        <Button
          width="100px"
          variant="store"
          color="primary"
          fullWidth
          onClick={
            !totalItemsNumber
              ? () => {
                  navigate("/shopall");
                  onClick();
                }
              : () => {
                  navigate("/checkout");
                  onClick();
                }
          }
        >
          {!totalItemsNumber
            ? t("button.shopItems")
            : t("button.proceedToCheckOut")}
        </Button>
      </Stack>
    </Stack>
  );
}
export default Cart;
