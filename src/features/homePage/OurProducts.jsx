import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Img } from "../../components/muiStyledComponents/muiStyledComponents";
import { useStore } from "../../store/useStore";

export default function OurProducts() {
  const { t, i18n } = useTranslation("common");
  const docDir = i18n.dir();
  const filteredProducts = useStore((state) =>
    state.products.filter((item) => item.ourProducts === true)
  );

  return (
    <Box>
      <Box p="2rem" backgroundColor="primary.main">
        <Typography variant="h2" component="h2" color="text.header">
          {t("home.socially")}
        </Typography>
      </Box>
      <Stack
        sx={{
          mx: "auto",
          pt: 2,
          flexDirection: { sm: "row" },
          justifyContent: "center",
          alignItems: "stretch",
        }}
        backgroundColor="gray.light"
      >
        {filteredProducts &&
          filteredProducts.map((item) => {
            let category;
            if (item.category === "Weekend Boot") {
              category = "weekendBoots";
            } else if (item.category === "Terrus Clog") {
              category = "terrusClogs";
            }
            return (
              <Stack
                key={item._id}
                justifyContent="space-between"
                alignItems="flex-start"
                backgroundColor="gray.light"
                sx={{ maxWidth: { sm: "40%" }, p: "1rem" }}
              >
                <Box>
                  <Typography
                    variant="h3"
                    component="h3"
                    mb={1}
                    color="text.primary"
                  >
                    {t(`nav_bar.${category}`)}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="article"
                    color="text.primary"
                    width="50%"
                  >
                    {docDir === "rtl" ? item.descriptionAr : item.description}
                  </Typography>
                </Box>

                <Img
                  src={require(`../../assets/images/${item.img},w_983.webp`)}
                  alt={item.alt}
                  loading="lazy"
                  sx={{
                    width: "300px",
                    height: "300px",
                    objectFit: "contain",
                  }}
                />
              </Stack>
            );
          })}
      </Stack>
      <Box p="2rem" backgroundColor="primary.main">
        <Typography variant="h2" component="h2" color="text.header">
          {t("home.madeOf1")}
        </Typography>
        <Typography
          variant="h5"
          component="article"
          color="text.header"
          mt="2rem"
        >
          {t("home.madeOf2")}
        </Typography>
      </Box>
      <Img
        src={require("../../assets/images/mentionedBy.webp")}
        alt="site mentioned in these magaines"
        sx={{ width: "80%", mx: "auto", my: 2, display: "block" }}
        loading="lazy"
      />
    </Box>
  );
}
