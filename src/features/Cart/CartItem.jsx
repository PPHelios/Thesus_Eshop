import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function CartItem() {
  return (
    <Stack>
      <IconButton aria-label="delete">
        <RemoveIcon />
      </IconButton>
    </Stack>
  );
}
export default CartItem;
