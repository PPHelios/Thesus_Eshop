import { forwardRef, useMemo } from "react";
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
  console.log("theme");
  const colorMode = useStore((state) => state.user.theme);
  const { i18n } = useTranslation();
  const docDir = i18n.dir();

  let theme = useMemo(
    () =>
      createTheme({
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
          // Disabled button color
          action: {
            disabled: "grey",
          },
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
                gray: {
                  light: "#dee1e2",
                },
                text: {
                  primary: "#123026",
                  secondary: "#123026",
                },
                // divider: amber[200],
              }
            : {
                action: {
                  disabled: "#444",
                  active: "#fff",
                  selected: "#fff",
                },
                primary: {
                  main: "rgba(255, 255, 255, 0.08)",
                  light: "rgba(255, 255, 255, 0.08)",
                  dark: "gray",
                  contrastThreshold: 4.5,
                },
                secondary: {
                  main: "#95125B",
                  light: "gray",
                  dark: "rgba(255, 255, 255, 0.16)",
                  contrastThreshold: 4.5,
                },
                gray: {
                  light: "#000",
                },
                text: {
                  primary: "#fff",
                  secondary: "gray",
                  disabled: "#123026",
                },
              }),
        },
        components: {
          MuiLink: {
            defaultProps: {
              component: LinkBehavior,
            },
          },
          MuiButtonBase: {
            styleOverrides: {
              // Disabled button background
              root: {
                "&.Mui-disabled": {
                  backgroundColor: "#0C211A",
                },
              },
            },

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
          MuiFormHelperText: {
            styleOverrides: {
              root: { color: "red" },
            },
          },
        },
      }),
    [colorMode]
  );

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
