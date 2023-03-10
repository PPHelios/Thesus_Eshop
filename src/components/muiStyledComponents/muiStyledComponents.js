import styled from "@mui/material/styles/styled";
import Paper from '@mui/material/Paper';
export const Img = styled("img")({});
export const Form = styled("form")({});
export const Label = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

