import { useTranslation } from "react-i18next";
import { useStore } from "../../store/useStore";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { Img } from "../muiStyledComponents/muiStyledComponents";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "90vw",
  maxWidth: "90vw",
  maxHeight: "85vh",
  bgcolor: "background.paper",
  border: "2px solid primary.dark",
  boxShadow: 24,
  p: 2,
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: { xs: 0, sm: 2 },
  overflow: "auto",
};

export default function ProductModal({ item, open, handleClose }) {
  const { t, i18n } = useTranslation("common");
  const lang = i18n.dir();
  const addItemToCart = useStore((state) => state.addItemToCart);
  let discountedPrice;
  if (item?.discountPercentage > 0) {
    discountedPrice = Math.floor(
      item.price - (item.price / 100) * item.discountPercentage
    );
  } else {
    discountedPrice = false;
  }
  return (
    <>
      <Modal
        aria-labelledby="product modal"
        aria-describedby={lang === "rtl" ? item.nameAr : item.name}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Stack sx={style}>
            <Img
              height="200px"
              loading="lazy"
              sizes="(max-width: 983px) 25vw,
            (max-700: 1280px) 50vw , 1280px"
              srcSet={`${require(`../../assets/images/${item.img},w_300.webp`)} 300w,
${require(`../../assets/images/${item.img},w_663.webp`)} 663w,
${require(`../../assets/images/${item.img},w_983.webp`)} 983w,`}
              src={require(`../../assets/images/${item.img},w_983.webp`)}
              alt={item.alt}
              sx={{
                display: "block",
                objectFit: "contain",
              }}
            />
            <Box>
              <Typography variant="h3" as="h3" my={2}>
                {lang === "rtl" ? item.nameAr : item.name}
              </Typography>

              {!discountedPrice ? (
                <Typography variant="h6" as="div">
                  {t("product.price", { val: item.price })}
                </Typography>
              ) : (
                <Typography
                  variant="h6"
                  as="div"
                  color="red"
                  sx={{ textDecoration: "line-through" }}
                >
                  {t("product.price", { val: item.price })}
                </Typography>
              )}
              {discountedPrice && (
                <Typography variant="h5" as="div">
                  {t("product.price", {
                    val: discountedPrice,
                  })}
                </Typography>
              )}
              <Rating name="rating" value={item.rating} readOnly />
              <Typography id="transition-modal-description" sx={{ my: 2 }}>
                {lang === "rtl" ? item.descriptionAr : item.descriptionAr}
              </Typography>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                flexWrap="wrap"
                gap={2}
              >
                {item.stock.map((item) =>
                  item.quantity > 0 ? (
                    <Box
                      width="3.5rem"
                      height="3.5rem"
                      padding={1}
                      fontSize="1.7rem"
                      color="text.primary"
                      borderRadius="50%"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      key={item._id}
                      sx={{
                        border: 1,
                        borderColor: "text.primary",
                        borderRadius: "50%",
                        cursor: "pointer",
                      }}
                    >
                      {item.size}
                    </Box>
                  ) : (
                    <Box
                      width="3.5rem"
                      height="3.5rem"
                      padding={1}
                      fontSize="1.7rem"
                      color="text.primary"
                      borderRadius="50%"
                      position="relative"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      key={item._id}
                      sx={{
                        border: 1,
                        borderColor: "text.primary",
                        borderRadius: "50%",
                        cursor: "not-allowed",

                        " &:after": {
                          content: '""',
                          width: "2px",
                          height: "100%",
                          position: "absolute",
                          top: 0,
                          left: "50%",
                          transform: "rotate(45deg)",
                          backgroundColor: "text.primary",
                        },
                      }}
                    >
                      {item.size}
                    </Box>
                  )
                )}
              </Box>
              <Stack mt={2}>
                <Button
                  variant="store"
                  color="primary"
                  sx={{
                    fontSize: { sm: "1rem" },
                    width: { sm: "50%" },
                    mt: 2,
                  }}
                  disabled={item.soldout || item.stockQuantity === 0}
                  onClick={() => {
                    addItemToCart(item);
                    handleClose();
                  }}
                >
                  {t("button.addToCart")}
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Fade>
      </Modal>
    </>
  );
}
