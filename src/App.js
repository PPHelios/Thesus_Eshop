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

// Date Picker
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// To Localie Date Picker
import "dayjs/locale/ar";
// To use UTC
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./features/homePage/HomePage";
import Signup from "./features/authentication/Signup";
import Login from "./features/authentication/Login";
import Store from "./features/store/Store";

dayjs.extend(utc);

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
          <Route path="/store" element={<Store />} />
        </Route>
      </>
    )
  );
  return (
    <CacheProvider value={docDir === "rtl" ? cacheRtl : cacheLtr}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="ar"
          dateLibInstance={dayjs.utc}
        >
          <Suspense fallback="Loading...">
            <>
              <CssBaseline />
              <RouterProvider router={router} />
            </>
          </Suspense>
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
