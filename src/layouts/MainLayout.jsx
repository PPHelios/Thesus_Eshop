import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ThemeToggler from "../components/ThemeToggler/ThemeToggler";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
export default MainLayout;
