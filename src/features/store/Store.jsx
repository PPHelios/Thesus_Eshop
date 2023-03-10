import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductCard from "../../components/ProductCard/ProductCard";
import Stack from "@mui/material/Stack";
import { Img } from "../../components/muiStyledComponents/muiStyledComponents";
const weekendBoots = [
  {
    id: 1,
    name: "Blue Weekend Boot",
    nameAr: "حذاء البوت الأزرق لعطله نهايه الاسبوع",
    price: 2207,
    discountedPrice: 0,
    discountPercentage: 0,
    soldOut: false,
    img: "weekendBootBlue",
    alt: "blue Weekend Boot ",
    sku: "1234567",
    stockQuantity: 10,
  },
  {
    id: 2,
    name: "Weekend Boot Indigo",
    nameAr: "حذاء البوت السماوي لعطله نهايه الاسبوع",
    price: 2207,
    discountedPrice: 0,
    discountPercentage: 10,
    soldOut: false,
    img: "weekendBootIndigo",
    alt: "weekend Boot Indigo",
    sku: "1234547",
    stockQuantity: 10,
  },
  {
    id: 3,
    name: "Week End Boot Teal",
    nameAr: "حذاء البوت الكحلي لعطله نهايه الاسبوع",
    price: 2207,
    discountedPrice: 0,
    discountPercentage: 10,
    soldOut: false,
    img: "weekendBootTeal",
    alt: "weekend Boot Teal",
    sku: "1234367",
    stockQuantity: 10,
  },
  {
    id: 4,
    name: "Weekend Boot Allegra",
    nameAr: "حذاء البوت الأبيض لعطله نهايه الاسبوع",
    price: 2207,
    discountedPrice: 0,
    discountPercentage: 0,
    soldOut: true,
    img: "weekendBootAllegra",
    alt: "Farah Weekend red Boot",
    sku: "1234562",
    stockQuantity: 0,
  },
  {
    id: 5,
    name: "Weekend Boot ZGrey",
    nameAr: "حذاء البوت الرمادي لعطله نهايه الاسبوع",
    price: 2207,
    discountedPrice: 0,
    discountPercentage: 10,
    soldOut: false,
    img: "weekendBootZGrey",
    alt: "Farah Weekend red Boot",
    sku: "1234561",
    stockQuantity: 10,
  },
  {
    id: 6,
    name: "The Farrah Weekend Boot",
    nameAr: "حذاء فرح لعطله نهايه الاسبوع",
    price: 75,
    price: 2400,
    discountedPrice: 0,
    discounrtPercentage: 0,
    onSale: false,
    soldout: false,
    img: "bootRed",
    alt: "Farah Weekend red Boot",
    sku: "1234567",
    stockQuantity: 10,
  },
  {
    id: 7,
    name: "The Simone Weekend Boot",
    nameAr: "حذاء سيمون لعطله نهايه الاسبوع",
    price: 75,
    price: 2400,
    discountedPrice: 0,
    discounrtPercentage: 0,
    onSale: false,
    soldout: false,
    img: "bootMarlin",
    alt: "Farah Weekend red Boot",
    sku: "1234567",
    stockQuantity: 10,
  },
];
const terraceClogs = [
  {
    id: 1,
    name: "Terrus Allegra",
    nameAr: "حذاء تراس الخفيف لون أبيض",
    price: 2207,
    discountedPrice: 0,
    discountPercentage: 0,
    soldOut: false,
    img: "TerrusAllegra",
    alt: "Terrus Allegra clog ",
    sku: "1234567",
    stockQuantity: 10,
  },
  {
    id: 3,
    name: "Terrus Beige",
    nameAr: "حذاء تراس الخفيف لون بيج",
    price: 2207,
    discountedPrice: 0,
    discountPercentage: 10,
    soldOut: false,
    img: "TerrusBeige",
    alt: "Terrus Beige clog",
    sku: "1234567",
    stockQuantity: 10,
  },
  {
    id: 2,
    name: "Terrus Sage",
    nameAr: "حذاء تراس الخفيف لون زيتي",
    price: 2207,
    discountedPrice: 0,
    discountPercentage: 0,
    soldOut: false,
    img: "TerrusSage",
    alt: "Terrus Sage clog",
    sku: "1234567",
    stockQuantity: 10,
  },
 
];
function Store({pageProduct}) {
  const { t } = useTranslation("common");
  const product = eval(pageProduct)

  return (
    <Box mt="120px">
    
{  pageProduct==="weekendBoots"  &&  <Box as="main" position="relative">
        <Img
          sizes="(max-width: 1280px) 50vw, 1280px"
      
          srcSet={`${require(`../../assets/images/weekendBootsHero,w_300.webp`)} 300w,
${require(`../../assets/images/weekendBootsHero,w_657.webp`)} 657w,
${require(`../../assets/images/weekendBootsHero,w_941.webp`)} 941w,
${require(`../../assets/images/weekendBootsHero,w_1221.webp`)} 1221w,
${require(`../../assets/images/weekendBootsHero,w_1280.webp`)} 1280w`}
src={require(`../../assets/images/weekendBootsHero,w_941.webp`)}
          alt="a girl with beige weekend boots"
          width="100%"
        />
        <Stack
          position="absolute"
          display="flex"
          justifyContent="center"
          alignItems="center"
          left={0}
          width="100%"
          height="100%"
          color="white"
          textAlign="center"
          sx={{  top:{xs:"2vw", sm:"-12vw"}}}
        >
          <Typography as="h1" sx={{fontSize:{xs:"1.6rem",sm:"calc(2rem + 4vw)"}}}>{t("store.storeBootsHero")}</Typography>
          <Typography  as="p" sx={{fontSize:{xs:"0.8rem",sm:"calc(0.2rem + 1vw)"}}}>
            {t("store.storeBootsHeroSub")}
          </Typography>
        </Stack>
      </Box>}



      {  pageProduct==="terraceClogs"  &&  <Box as="main" position="relative">
        <Img
          sizes="(max-width: 1280px) 50vw, 1280px"
      
          srcSet={`${require(`../../assets/images/terrusClogsHero,w_300.webp`)} 300w,
${require(`../../assets/images/terrusClogsHero,w_657.webp`)} 657w,
${require(`../../assets/images/terrusClogsHero,w_941.webp`)} 941w,
${require(`../../assets/images/terrusClogsHero,w_1221.webp`)} 1221w,
${require(`../../assets/images/terrusClogsHero,w_1280.webp`)} 1280w`}
src={require(`../../assets/images/terrusClogsHero,w_941.webp`)}
          alt="a girl with beige terrus clog"
          width="100%"
        />
        <Stack
          position="absolute"
          display="flex"
          justifyContent="center"
          alignItems="center"
          left={0}
          width="100%"
          height="100%"
          color="white"
          textAlign="center"
          sx={{  top:{xs:"2vw", sm:"-12vw"}}}
        >
          <Typography as="h1" sx={{fontSize:{xs:"1.6rem",sm:"calc(2rem + 4vw)"}}}>{t("store.storeClogsHero")}</Typography>
          <Typography  as="p" sx={{fontSize:{xs:"0.8rem",sm:"calc(0.2rem + 1vw)"}}}>
            {t("store.storeClogsHeroSub")}
          </Typography>
        </Stack>
      </Box>}
      <Stack mt={2} mb={7} spacing={1} alignItems="center">
         <Typography variant="h1" width="90%" textAlign="center">{t("store.clogsH1")}</Typography>
      </Stack>
     

      <Stack
       direction="row" 
       justifyContent="center"
          alignItems="stretch" 
          flexWrap="wrap"
          gap={2}
          >
        {product.map((product) => (
          <ProductCard item={product} key={product.id}/>
        ))}
      </Stack>
    </Box>
  );
}
export default Store;
