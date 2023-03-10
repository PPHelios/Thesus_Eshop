import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useTranslation } from "react-i18next";



const  ProductCard = ({ item }) => {
  const { t, i18n } = useTranslation("common");
  const lang = i18n.dir();
  let discountedPrice;
  if (item?.discountPercentage > 0) {
    discountedPrice = Math.floor(
      item.price - (item.price / 100) * item.discountPercentage
    );
  } else {
    discountedPrice = false;
  }

  return (

    <Card key={item.id} sx={{ width:{xs:"43%", sm:"22%"} ,display:"flex", flexDirection:"column", justifyContent:"space-between"}}>

      <Box position="relative">
      {item.discountPercentage > 0 && (
            <Typography
              variant="body1"
              p={0.6}
              backgroundColor="secondary.light"
              borderRadius={3}
              boxShadow={2}
              position="absolute"
              top="10px"
              left="10px"
              zIndex={100}
            >
              {`-${item.discountPercentage}%`}
            </Typography>
          )}
          {(item.soldOut || (item.stockQuantity === 0)) && (
              <Typography
                variant="body1"
                p={0.6}
                color="white"
                backgroundColor="primary.dark"
                borderRadius={3}
                boxShadow={2}
                position="absolute"
                top="10px"
                left="10px"
                zIndex={100}
              >
                {t("product.soldOut")}
              </Typography>
            )}
      </Box>
      <CardMedia
      component="img"
      height="160"
       loading="lazy"
            sizes="(max-width: 1280px) 25vw,
            (max-700: 1280px) 50vw
            , 1280px"
            srcSet={`${require(`../../assets/images/${item.img},w_300.webp`)} 300w,
${require(`../../assets/images/${item.img},w_663.webp`)} 663w,
${require(`../../assets/images/${item.img},w_983.webp`)} 983w,
${require(`../../assets/images/${item.img},w_1166.webp`)} 1166w,
${require(`../../assets/images/${item.img},w_1280.webp`)} 1280w`}
            src={require(`../../assets/images/${item.img},w_1280.webp`)}
      alt={item.alt}
      sx={{
        width:"100%",
     height:"200px",
        display: "block",
        maxHeight: "400px",
        objectFit: "contain",
        transition: "0.5s",
        ":hover": {
          transform: "scale(1.2)",
        },
      }}
    />
    <CardContent>
      <Typography variant="h6" as="h6">
        {lang === "rtl" ? item.nameAr : item.name}
      </Typography>

      
      {!discountedPrice ? (
        <Typography variant="subtitle2">
          {t("product.price", { val: item.price})}
        </Typography>
      ) : (
        <Typography
          variant="subtitle2"
          color="red"
          sx={{ textDecoration: "line-through" }}
        >
          {t("product.price", { val: item.price})}
        </Typography>
      )}
      {discountedPrice && (
        <Typography variant="subtitle2">
          {t("product.price", {
            val: discountedPrice
          })}
        </Typography>
      )}
    </CardContent>
    <CardActions disableSpacing>

      <Button
      variant="store"
      color="primary"
      w="50px"
      mt="5px"
      sx={{fontSize:{sm:"1rem,"}}}
      disabled={item.soldout || item.stockQuantity === 0}
    >
      {t("button.addToCart")}
    </Button>
    </CardActions>

      </Card>

  );
}
export default ProductCard;
