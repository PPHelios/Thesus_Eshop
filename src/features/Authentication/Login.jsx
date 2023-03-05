import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
function Login() {
  return (
    <Box width="50%" mx="auto" mt="150px" as="section">
      <div>Login</div>
      <TextField label="rrr" />
    </Box>
  );
}
export default Login;

// export const theme = createTheme({
//   components: {
//     MuiInputLabel: {
//       styleOverrides: {
//         root: {
//           left: "inherit",
//           right: "1.75rem",
//           transformOrigin: "right",
//         },
//       },
//     },
//     MuiOutlinedInput: {
//       styleOverrides: {
//         notchedOutline: {
//           textAlign: "right",
//         },
//       },
//     },
//   },
// });
