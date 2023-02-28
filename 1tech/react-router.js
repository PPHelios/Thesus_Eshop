import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./features/about/About";
import Contact from "./features/contact/Contact";
import { Home } from "./features/home/Home";
import Location from "./features/location/Location";
import Shop from "./features/shop/Shop";
import Layout from "./features/layout/Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          {/* add <Outlet /> in <Layout /> */}
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/location" element={<Location />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}
export default App;
