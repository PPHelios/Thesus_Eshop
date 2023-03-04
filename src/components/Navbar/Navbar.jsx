import { useState } from "react";
import { useTranslation } from "react-i18next";
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
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Popover from "@mui/material/Popover";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [listDrawerOpen, setListDrawerOpen] = useState(false);
  const [profilePopoverOpen, setProfilePopoverOpen] = useState(null);

  const { t, i18n } = useTranslation("common");

  const handleMenuDrawerToggle = () => {
    setMobileDrawerOpen((prevState) => !prevState);
  };
  const handleListDrawerToggle = () => {
    setListDrawerOpen((prevState) => !prevState);
  };

  const handleProfileButtonClick = (event) => {
    setProfilePopoverOpen(event.currentTarget);
  };
  const handleProfilePopoverClose = () => {
    setProfilePopoverOpen(null);
  };
  const open = Boolean(profilePopoverOpen);
  const id = open ? "profile settings menu" : undefined;
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
    { link: "Terrace Clogs", label: "weekendBoots" },
    { link: "Terrace Clogs", label: "Terrace_Clogs" },
    { link: "Accessories", label: "Accessories" },
    { link: "Shop All", label: "Shop_All" },
    { link: "Values", label: "Values" },
  ];

  const navItems = navLinks.map((item) => {
    const menuItems = item?.links?.map((subItem) => (
      <ListItem
        key={subItem.label}
        button
        component={Link}
        to={subItem.link}
        href="#"
        sx={{ pl: 4 }}
      >
        <ListItemText primary={t(`nav_bar.${subItem.label}`)} />
      </ListItem>
    ));
    if (menuItems) {
      return (
        <Box key={item.label}>
          <ListItem disablePadding>
            <ListItemButton onClick={handleListDrawerToggle} height="20">
              <ListItemText primary={t(`nav_bar.${item.label}`)} />
              {listDrawerOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {!listDrawerOpen && <Divider />}
          <Collapse in={listDrawerOpen} timeout="auto" unmountOnExit>
            <List component="div">{menuItems}</List>
            <Divider />
          </Collapse>
        </Box>
      );
    }
    return (
      <ListItem key={item.label} disablePadding>
        <ListItemButton sx={{ textAlign: "center" }}>
          <ListItemText primary={t(`nav_bar.${item.label}`)} />
        </ListItemButton>
      </ListItem>
    );
  });

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
            {t("nav_bar.Announcement")}
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
            width="90"
          />
          {/**************** Nav Menu ****************/}
          <List sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks
              .filter((item) => !item.links)
              .map((item) => (
                <Button
                  component={Link}
                  key={item.label}
                  sx={{
                    color: "green.dark",
                  }}
                  to={item.link}
                  href="#"
                >
                  {t(`nav_bar.${item.label}`)}
                </Button>
              ))}
          </List>
          {/**************** Profile Bar ****************/}
          <Box
            sx={{
              display: "flex",
              flexGrow: 0,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "stretch",
              alignSelf: "stretch",
              gap: 1,
            }}
          >
            <IconButton color="inherit" sx={{ p: 0 }} aria-label="search">
              <SearchOutlinedIcon />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{ p: 0 }}
              aria-label="shopping cart"
            >
              <ShoppingBagOutlinedIcon />
            </IconButton>
            <IconButton
              aria-label="profile menu"
              color="inherit"
              aria-describedby={id}
              onClick={handleProfileButtonClick}
              sx={{
                p: 0,
                display: { xs: "none", sm: "block" },
              }}
            >
              <AccountCircleOutlinedIcon viewBox="0 0 24 19" />
            </IconButton>
            {/*********** Profile Bar Popover *************/}
            <Popover
              id={id}
              open={open}
              // anchorReference="anchorPosition"
              // anchorPosition={{ top: 70, left: 0 }}
              anchorEl={profilePopoverOpen}
              onClose={handleProfilePopoverClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Stack
                sx={{
                  p: 2,
                  bgcolor: "pink.main",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    pb: 3,
                  }}
                >
                  <LanguageSwitcher
                    closeProfilePopover={handleProfilePopoverClose}
                  />
                  <ThemeToggler />
                </Box>
                <Divider />
                <List>
                  <ListItem button component={Link} to={"/"} href="#">
                    <ListItemText primary={t(`nav_bar.Profile_Settings`)} />
                  </ListItem>
                  <ListItem button component={Link} to={"/"} href="#">
                    <ListItemText primary={t(`nav_bar.Favorites`)} />
                  </ListItem>
                </List>
              </Stack>
            </Popover>
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
            sx={{
              width: "100%",
              height: "100%",
              maxWidth: 360,
              bgcolor: "pink.main",
              paddingTop: 5,
            }}
            component="nav"
            aria-labelledby="nested-list"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                pb: 3,
              }}
            >
              <LanguageSwitcher />
              <ThemeToggler />
            </Box>
            {navItems}
          </List>
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
