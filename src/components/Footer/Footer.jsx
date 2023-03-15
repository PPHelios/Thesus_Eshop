import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "@mui/material/Link";
import { useTranslation } from "react-i18next";
import { Img } from "../muiStyledComponents/muiStyledComponents";

const ourStoreLinks = [
  { link: "/weekendBoots", label: "weekendBoots" },

  { link: "/terrusClogs", label: "terrusClogs" },

  { link: "/accessories", label: "accessories" },

  { link: "/shopAll", label: "shopAll" },
];

const helpLinks = [
  { label: "sizeGuides", link: "/sizeGuides" },
  { label: "shippingInfo", link: "/shipping" },
  { label: "refundPolicy", link: "/refundPolicy" },
  { label: "faq", link: "/faq" },
];
const aboutUsLinks = [
  { label: "values", link: "/values" },

  { label: "terms", link: "/terms" },

  { label: "contact", link: "/contact" },
];

function Footer() {
  const { t } = useTranslation("common");

  return (
    <Box display="flex" justifyContent="space-evenly" alignItems="flex-start" color="#fff" backgroundColor="primary.main">
        <Link href="/" component={Link} alignSelf="center">
            <Img
              src={require("../../assets/images/ThesusWhite.webp")}
              alt="company logo"
              sx={{

                width: "150px",
              }}
            />
          </Link>
      <Box>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          {t("footer.ourShop")}
        </Typography>
        <List>
          {ourStoreLinks.map((item) => (
            <ListItem key={item.label} component={Link} href={item.link} color="#fff" disablePadding>
              <ListItemText primary={t(`nav_bar.${item.label}`)} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          {t("footer.help")}
        </Typography>
        <List>
          {helpLinks.map((item) => (
            <ListItem key={item.label} component={Link} href={item.link} color="#fff" disablePadding>
              <ListItemText primary={t(`footer.${item.label}`)} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          {t("footer.aboutUs")}
        </Typography>
        <List>
          {aboutUsLinks.map((item) => (
            <ListItem key={item.label} component={Link} href={item.link} color="#fff" disablePadding>
              <ListItemText primary={t(`footer.${item.label}`)} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
export default Footer;
