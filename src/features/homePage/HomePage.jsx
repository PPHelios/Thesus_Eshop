import Box from "@mui/material/Box";
import Hero from "./Hero";
import NewIn from "./NewIn";
import OurProducts from "./OurProducts";
import BeOutside from "./BeOutside";

function HomePage() {
  return (
    <Box mt="120px" w="100%" as="header">
      <Hero />
      <NewIn />
      <OurProducts />
      <BeOutside />
    </Box>
  );
}
export default HomePage;
