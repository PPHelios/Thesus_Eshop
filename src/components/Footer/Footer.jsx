import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "@mui/material/Link";

const ourStoreLinks = [
  { link: "/weekendBoots", label: "weekendBoots" },

    { link: "/terraceClogs", label: "Terrace_Clogs" },

    { link: "/accessories", label: "Accessories" },

    { link: "/shopAll", label: "Shop_All" }
]

const helpLinks = [
  {label:"sizeGuides", link:"/sizeGuides"},
  {label:"shipping", link:"/shipping"},
   {label:"refundPolicy", link:"/refundPolicy"},
  {label:"faq", link:"/faq"},
  ]
const aboutUsLinks = [

  {label:"values", link:"/values"},

  {label:"terms", link:"/terms"},

   {label:"contact", link:"/contact"},



  ]

function Footer() {
  return (
    
<Box>
    <Box>

       

       <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">

        Our Store

      </Typography>
      {ourStoreLinks.map(item => (
       
      <List>

        <ListItem key={item.label} button component={Link} href={item.link}>

          <ListItemText primary={t(`footer.${item.label}`)} />

        </ListItem>

      </List>
      ))}
       </Box>
       
    </Box>
  );
}
export default Footer;
