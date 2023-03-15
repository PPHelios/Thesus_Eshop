import { Suspense, useCallback, useEffect, useMemo,lazy } from "react";
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

import { useStore } from "./store/useStore";

const MainLayout = lazy(() => import('./layouts/MainLayout'));
const HomePage = lazy(() => import('./features/homePage/HomePage'));
const Signup = lazy(() => import('./features/Authentication/Signup'));
const Login = lazy(() => import('./features/Authentication/Login'));
const Store = lazy(() => import('./features/store/Store'));

//import MainLayout from "./layouts/MainLayout";

dayjs.extend(utc);

function App() {
  const theme = useMuiCustomTheme();
const getProducts= useStore(state => state.getProducts)
useEffect(()=>{
  getProducts()
},[])
  const { i18n } = useTranslation();
  const docDir = i18n.dir();
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />} >
          <Route path="/" element={<HomePage />}  />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/weekendBoots" element={<Store pageProduct={"Weekend Boot"} pageTitle={"4in1h2"} pageParagraph={"4in1p"}/>} />
          <Route path="/terrusClogs" element={<Store pageProduct={"Terrus Clog"} pageTitle={"clogsH1"} />} />
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
