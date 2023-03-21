import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

function NotFound404() {
  return (
    <Stack minHeight="60vh" mt={5} justifyContent="center" alignItems="center">
      <Typography variant="h3" as="p">
        There Is No Such Page
      </Typography>
      <Link href="/" color="secondary.main">
        {" "}
        Back To Home
      </Link>
    </Stack>
  );
}
export default NotFound404;
