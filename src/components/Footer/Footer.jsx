import { useTranslation } from "react-i18next";
import { Img } from "../muiStyledComponents/muiStyledComponents";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";

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
    <Box as="footer" padding="1rem" backgroundColor="primary.main">
      <Stack
        as="nav"
        justifyContent="space-evenly"
        alignItems="flex-start"
        color="#fff"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Link href="/" component={Link} alignSelf="center">
          <Img
            src={require("../../assets/images/ThesusWhite.webp")}
            alt="company logo"
            sx={{
              width: { xs: "90%", sm: "200px" },
            }}
          />
        </Link>
        <Box>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="h6">
            {t("footer.ourShop")}
          </Typography>
          <List>
            {ourStoreLinks.map((item) => (
              <ListItem
                key={item.label}
                component={Link}
                href={item.link}
                color="#fff"
                disablePadding
                sx={{ py: { xs: "0.5rem", sm: "0.1rem" } }}
              >
                <ListItemText primary={t(`nav_bar.${item.label}`)} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="h6">
            {t("footer.help")}
          </Typography>
          <List>
            {helpLinks.map((item) => (
              <ListItem
                key={item.label}
                component={Link}
                href={item.link}
                color="#fff"
                disablePadding
                sx={{ py: { xs: "0.5rem", sm: "0.1rem" } }}
              >
                <ListItemText primary={t(`footer.${item.label}`)} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="h6">
            {t("footer.aboutUs")}
          </Typography>
          <List>
            {aboutUsLinks.map((item) => (
              <ListItem
                key={item.label}
                component={Link}
                href={item.link}
                color="#fff"
                disablePadding
                sx={{ py: { xs: "0.5rem", sm: "0.1rem" } }}
              >
                <ListItemText primary={t(`footer.${item.label}`)} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Stack>
      <Typography variant="body2" marginTop="0.7rem" color="#fff">
        &#169; 2023 Thesus
      </Typography>
    </Box>
  );
}
export default Footer;
