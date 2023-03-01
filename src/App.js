import "./App.css";
import { Suspense, useCallback, useEffect, useMemo, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import PropTypes from "prop-types";
import { LinkProps } from "@mui/material/Link";
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useStore } from "./store/useStore";

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

function App() {
  const colorMode = useStore((state) => state.user.theme);
  const theme = useCallback(
    createTheme({
      palette: {
        mode: colorMode,
        ...(colorMode === "light"
          ? {
              // palette values for light mode
              green: {
                main: "#0c6349",
                dark: "#123026",
                contrastThreshold: 4.5,
              },
              pink: {
                main: "#ddabae",
                contrastThreshold: 4.5,
              },
              // divider: amber[200],
              // text: {
              //   primary: grey[900],
              //   secondary: grey[800],
              // },
            }
          : {
              // palette values for dark mode
              // green: {
              //   main: "#121212",
              //   darker: "#121212",
              //   contrastThreshold: 4.5,
              // },
              // pink: {
              //   main: "#121212",
              //   contrastThreshold: 4.5,
              // },
              // divider: deepOrange[700],
              // background: {
              //   default: deepOrange[900],
              //   paper: deepOrange[900],
              // },
              // text: {
              //   primary: "#fff",
              //   secondary: grey[500],
              // },
            }),
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
      },
    }),
    [colorMode]
  );
  const { i18n } = useTranslation();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />} />
      </>
    )
  );
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback="Loading...">
        <>
          <CssBaseline />
          <RouterProvider router={router} />
        </>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
