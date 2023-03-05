import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <Box>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Text only
      </Typography>
      <List>
        <ListItem key={item.label} button component={Link} href={item.link}>
          <ListItemText primary={t(`nav_bar.${item.label}`)} />
        </ListItem>
      </List>
    </Box>
  );
}
export default Footer;
