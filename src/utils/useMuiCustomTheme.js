import { forwardRef } from "react";
// Changing mui Link component to react router Link
import {
  Link as RouterLink,
  //  LinkProps as RouterLinkProps,
} from "react-router-dom";
import PropTypes from "prop-types";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { useStore } from "../store/useStore";

const LinkBehavior = forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return (
    <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />
  );
});
LinkBehavior.propTypes = {
  href: PropTypes.oneOfType([
    PropTypes.shape({
      hash: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
    PropTypes.string,
  ]).isRequired,
};
function useMuiCustomTheme() {
  const colorMode = useStore((state) => state.user.theme);
  const { i18n } = useTranslation();
  const docDir = i18n.dir();

  let theme = createTheme({
    direction: docDir, // Both here and <body dir="rtl">
    breakpoints: {
      values: {
        xs: 0,
        sm: 693,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      mode: colorMode,
      ...(colorMode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: "#123026",
              light: "#415951",
              dark: "#0C211A",
              contrastThreshold: 4.5,
            },
            secondary: {
              main: "#D61A82",
              light: "#DDABAE",
              dark: "#95125B",
              contrastThreshold: 4.5,
            },
            // divider: amber[200],
            // text: {
            //   primary: grey[900],
            //   secondary: grey[800],
            // },
          }
        : {}),
    },
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        },
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === "store" &&
              ownerState.color === "primary" && {
                backgroundColor: "#123026",
                color: "#fff",
                borderRadius: "15px",
                transition: "0.5s",
                "&:hover": {
                  backgroundColor: `rgba(18, 48, 38 , 0.7)`,
                },
              }),
          }),
        },
      },
    },
  });

  theme = responsiveFontSizes(theme);
  return theme;
}
export default useMuiCustomTheme;

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
