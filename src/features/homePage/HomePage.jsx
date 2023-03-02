import Box from "@mui/material/Box";
import Hero from "./Hero";
import NewIn from "./NewIn";

function HomePage() {
  return (
    <Box sx={{ mx: 0, mt: "120px", w: "100%" }} as="header">
      <Hero />
      <NewIn />
    </Box>
  );
}
export default HomePage;
