import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Img } from "../../components/muiStyledComponents/muiStyledComponents";

const products = [
  {
    id: 1,
    name: "weekendBoots",
    description: "bootDescription",
    img: "boot2",
    alt: "Marlin Weekend blue Boot with orange laces",
  },
  {
    id: 0,
    name: "Terrace_Clogs",
    description: "clogDescription",
    img: "clog1",
    alt: "Beige Clog",
  },
];
export default function OurProducts() {
  const { t } = useTranslation("common");
  return (
    <Box>
      <Box mt="2rem" p="2rem" backgroundColor="primary.main">
        <Typography variant="h1" component="h2" color="secondary.light">
          {t("home.socially")}
        </Typography>
      </Box>
      <Stack
        sx={{
          mx: "auto",
          mt: 2,
          flexDirection: { sm: "row" },
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {products.map((item) => {
          return (
            <Stack
              key={item.id}
              justifyContent="space-between"
              alignItems="flex-start"
              backgroundColor="#efefef"
              sx={{ maxWidth: { sm: "40%" }, p: "1rem" }}
            >
              <Box>
                <Typography
                  variant="h3"
                  component="h3"
                  mb={1}
                  color="primary.main"
                >
                  {t(`nav_bar.${item.name}`)}
                </Typography>
                <Typography
                  variant="h6"
                  component="article"
                  color="primary.main"
                  width="50%"
                >
                  {t(`home.${item.description}`)}
                </Typography>
              </Box>

              <Img
                src={require(`../../assets/images/${item.img}.webp`)}
                alt={item.alt}
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
      <Box mt="2rem" p="2rem" backgroundColor="primary.main">
        <Typography variant="h2" component="h2" color="secondary.light">
          {t("home.madeOf1")}
        </Typography>
        <Typography
          variant="h5"
          component="article"
          color="secondary.light"
          mt="2rem"
        >
          {t("home.madeOf2")}
        </Typography>
      </Box>
      <Img
        src={require("../../assets/images/mentionedBy.webp")}
        alt="site mentioned in these magaines"
        sx={{ width: "80%", mx: "auto", my: 2, display: "block" }}
      />
    </Box>
  );
}
