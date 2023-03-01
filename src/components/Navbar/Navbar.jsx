import { useState } from "react";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function DrawerAppBar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [listDrawerOpen, setListDrawerOpen] = useState(false);
  const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);

  const handleMenuDrawerToggle = () => {
    setMobileDrawerOpen((prevState) => !prevState);
  };
  const handleListDrawerToggle = () => {
    setListDrawerOpen((prevState) => !prevState);
  };

  const handleProfileDrawerToggle = () => {
    setProfileDrawerOpen((prevState) => !prevState);
  };
  const drawerWidth = 240;

  const navLinks = [
    {
      link: "Profile",
      label: "Profile",
      links: [
        { link: "Men", label: "Profile_Settings", icon: "" },
        { link: "Women", label: "Favorites", icon: "" },
      ],
    },
    { link: "Terrace Clogs", label: "Terrace_Clogs" },
    { link: "Accessories", label: "Accessories" },
    { link: "Shop All", label: "Shop_All" },
    { link: "Values", label: "Values" },
  ];

  const navItems = navLinks.map((item) => {
    const menuItems = item?.links?.map((item) => (
      <ListItem button component={Link} to={item.link} sx={{ pl: 4 }}>
        <ListItemText primary={item.label} disablePadding />
      </ListItem>
    ));
    if (menuItems) {
      return (
        <>
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={handleListDrawerToggle}
              height="20"
              backgroundColor="red"
            >
              <ListItemText primary={item.label} disablePadding />
              {listDrawerOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {!listDrawerOpen && <Divider />}
          <Collapse in={listDrawerOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {menuItems}
            </List>
            <Divider />
          </Collapse>
        </>
      );
    }
    return (
      <ListItem key={item} disablePadding>
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText primary={item.label} />
        </ListItemButton>
      </ListItem>
    );
  });

  // const menuDrawer = (
  //   <Box onClick={handleMenuDrawerToggle} sx={{ textAlign: "center" }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       NONA SHOP
  //     </Typography>
  //     <Divider />
  //     <List></List>
  //   </Box>
  // );
  // const profileDrawer = (
  //   <Box onClick={handleProfileDrawerToggle} sx={{ textAlign: "center" }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       NONA SHOP2
  //     </Typography>
  //     <Divider />
  //     <ThemeToggler />
  //     <Divider />
  //     <List>
  //       {navItems.map((item) => (
  //         <ListItem key={item} disablePadding>
  //           <ListItemButton sx={{ textAlign: "center" }}>
  //             <ListItemText primary={item} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );
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
          {/**************** Nav Menu ****************/}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((item) => (
              <Button sx={{ color: "green.dark" }} to={item.link}>
                {item.label}
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
        {/***** Hamburger Menu Drawer *****/}
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
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
              </ListSubheader>
            }
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LanguageSwitcher />
              <ThemeToggler />
            </Box>
            {navItems}
          </List>
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
          {navItems}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
