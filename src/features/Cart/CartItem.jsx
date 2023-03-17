import { useTranslation } from "react-i18next";
import { useStore } from "../../store/useStore";
import { Img } from "../../components/muiStyledComponents/muiStyledComponents";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function CartItem({ item, direction = "column" }) {
  const { i18n } = useTranslation("common");
  const lang = i18n.dir();
  const increaseCartItem = useStore((state) => state.increaseCartItem);
  const decreaseCartItem = useStore((state) => state.decreaseCartItem);
  const deleteCartItem = useStore((state) => state.deleteCartItem);
  const discountedPrice =
    item.price - (item.price / 100) * item.discountPercentage;
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="space-between"
      alignItems="center"
    >
      <Img
        src={require(`../../assets/images/${item.img},w_300.webp`)}
        sx={{ width: 90 }}
      />
      <Grid
        container
        flexGrow={1}
        width="30%"
        justifyContent="center"
        alignItems="center"
        spacing={direction === "column" ? 0 : 2}
      >
        <Grid item xs={direction === "column" ? 12 : 3}>
          <Typography variant="body1">
            {lang === "rtl" ? item.nameAr : item.name}
          </Typography>
        </Grid>
        <Grid item xs={direction === "column" ? 12 : 3}>
          {item.discountPercentage > 0 && (
            <Typography
              variant="body1"
              color="red"
              sx={{ textDecoration: "line-through" }}
            >
              {item.price}
            </Typography>
          )}
        </Grid>
        <Grid xs={direction === "column" ? 12 : 3}>
          <Typography variant="body1">
            {discountedPrice} ({discountedPrice * item.quantity})
          </Typography>
        </Grid>
        <Grid xs={direction === "column" ? 12 : 3}>
          <Stack
            p={0.5}
            direction="row"
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
            sx={{ border: 1, borderColor: "primary.dark" }}
          >
            <IconButton
              aria-label="decrease item quantity"
              onClick={() => decreaseCartItem(item._id)}
            >
              <RemoveIcon />
            </IconButton>
            <Typography variant="body1">{item.quantity}</Typography>
            <IconButton
              aria-label="increase item quantity"
              onClick={() => increaseCartItem(item._id)}
            >
              <AddIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
      <IconButton
        sx={{ alignSelf: direction === "column" ? "flex-start" : "center" }}
        aria-label="remove item from cart"
        onClick={() => deleteCartItem(item._id)}
      >
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    </Stack>
  );
}
export default CartItem;
