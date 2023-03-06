import { Suspense, useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
// custum Mui theme
import useMuiCustomTheme from "./utils/useMuiCustomTheme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// RTL support
import { CacheProvider } from "@emotion/react";
import { cacheRtl, cacheLtr } from "./utils/rtlCache";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./features/homePage/HomePage";
import Signup from "./features/Authentication/Signup";
import Login from "./features/Authentication/Login";

function App() {
  const theme = useMuiCustomTheme();

  const { i18n } = useTranslation();
  const docDir = i18n.dir();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Route>
      </>
    )
  );
  return (
    <CacheProvider value={docDir === "rtl" ? cacheRtl : cacheLtr}>
      <ThemeProvider theme={theme}>
        <Suspense fallback="Loading...">
          <>
            <CssBaseline />
            <RouterProvider router={router} />
          </>
        </Suspense>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
