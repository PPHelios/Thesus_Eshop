import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Img } from "../../components/Img/Img";
import { useTranslation } from "react-i18next";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";

function BeOutside() {
  const [userEmail, setUserEmail] = useState("");
  const { t } = useTranslation("common");
  return (
    <Box>
      <Typography variant="h2" color="green.dark" fontWeight="400">
        #BeOutside
      </Typography>
      <Stack
        sx={{
          flexDirection: { sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Img
          src={require(`../../assets/images/beOutside1.webp`)}
          sx={{
            width: { xs: "70%", sm: "25%" },
            maxHeight: { xs: 660, sm: 450 },
            objectFit: "cover",
            objectPosition: "0% 5%",
          }}
          alt=""
        />
        <Img
          src={require(`../../assets/images/beOutside2.webp`)}
          sx={{
            width: { xs: "70%", sm: "25%" },
            maxHeight: { xs: 660, md: 450 },
            objectFit: "cover",
            objectPosition: "0% 65%",
          }}
          alt=""
        />
        <Img
          src={require(`../../assets/images/beOutside3.webp`)}
          sx={{
            width: { xs: "70%", sm: "25%" },
            maxHeight: { xs: 660, md: 450 },
            objectFit: "cover",
            objectPosition: "0% 75%",
          }}
          alt=""
        />
      </Stack>
      <Box backgroundColor="#efefef" mt={4} width="60%">
        <Typography variant="h3" color="green.dark">
          {t("home.stayInTouch", { val: 10, valEgp: 300 })}
        </Typography>
        <FormControl>
          <TextField
            id="email"
            label="email"
            type="email"
            placeholder="Enter Your Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <Button variant="contained" color="success" display="inline-block">
            Join
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}
export default BeOutside;
