import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const drawerWidth = 240;
const navItems = [
  "Profile",
  "Terrace Clogs",
  "Accessories",
  "Shop All",
  "Values",
];

function DrawerAppBar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);

  const handleMenuDrawerToggle = () => {
    setMobileDrawerOpen((prevState) => !prevState);
  };

  const handleProfileDrawerToggle = () => {
    setProfileDrawerOpen((prevState) => !prevState);
  };

  return (
    <Box>
      <AppBar component="nav">
        {/**************** Anouncement Bar ****************/}
        <Stack
          sx={{
            height: 60,
            backgroundColor: "green.dark",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography align="center" variant="h5" component="p">
            Free Shipping on Orders Over 100$
          </Typography>
        </Stack>
        {/**************** Navbar ****************/}
        <Toolbar
          sx={{
            height: 60,
            backgroundColor: "pink.main",
            color: "green.dark",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/**************** Humburger Menu ****************/}
          <IconButton
            color="inherit"
            aria-label="open menu drawer"
            edge="start"
            onClick={handleMenuDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/**************** Logo ****************/}
          <img
            src={require("../../assets/images/Thesus_logo.webp")}
            alt="company logo"
            width="100"
          />
          {/**************** Nav MEnu ****************/}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "green.dark" }}>
                {item}
              </Button>
            ))}
          </Box>
          {/**************** Profile Bar ****************/}
          <Box sx={{ display: "flex", flexGrow: 0, flexDirection: "row" }}>
            <Tooltip title="Open settings">
              <IconButton
                color="inherit"
                aria-label="open profile drawer"
                edge="end"
                onClick={handleProfileDrawerToggle}
                sx={{
                  p: 0,
                  marginRight: 3,
                  display: { xs: "none", sm: "block" },
                }}
              >
                <AccountCircleOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        {/***** Menu Drawer *****/}
        <Drawer
          variant="temporary"
          open={mobileDrawerOpen}
          onClose={handleMenuDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {menuDrawer}
        </Drawer>
        {/***** Profile Drawer *****/}
        <Drawer
          variant="persistent"
          anchor="right"
          open={profileDrawerOpen}
          onClose={handleProfileDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {profileDrawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
