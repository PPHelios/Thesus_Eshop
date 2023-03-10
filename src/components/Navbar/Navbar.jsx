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
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Popover from "@mui/material/Popover";
import Badge from "@mui/material/Badge";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import {Img} from "../muiStyledComponents/muiStyledComponents";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [listDrawerOpen, setListDrawerOpen] = useState(false);
  const [profilePopoverOpen, setProfilePopoverOpen] = useState(null);

  const { t } = useTranslation("common");

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
      link: "/user/profile",
      label: "profile",
      links: [
        { link: "/user/profile/settings", label: "profileSettings", icon: "" },
        { link: "/user/favorites", label: "favorites", icon: "" },
        { link: "/login", label: "login", icon: "" },
        { link: "/logout", label: "logout", icon: "LogoutOutlinedIcon" },
      ],
    },
    { link: "/weekendBoots", label: "weekendBoots" },
    { link: "/terraceClogs", label: "terraceClogs" },
    { link: "/accessories", label: "accessories" },
    { link: "/shopAll", label: "shopAll" },
    { link: "/values", label: "values" },
  ];

  const navItems = navLinks.map((item) => {
    const menuItems = item?.links?.map((subItem) => {
      return (
        <ListItem
          key={subItem.label}
          sx={{ pl: 4 }}
      
          onClick={() => setMobileDrawerOpen(false)}
        >
          <Link     href={subItem.link} underline="none">
           <ListItemText primary={t(`button.${subItem.label}`)} />
          </Link>
         
        </ListItem>
      );
    });
    if (menuItems) {
      return (
        <Box key={item.label}>
          <ListItem disablePadding>
            <ListItemButton onClick={handleListDrawerToggle} height="20">
              <ListItemText primary={t(`button.${item.label}`)} />
              {listDrawerOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          {!listDrawerOpen && <Divider />}
          <Collapse in={listDrawerOpen} timeout="auto" unmountOnExit>
            <List>{menuItems}</List>
            <Divider />
          </Collapse>
        </Box>
      );
    }
    return (
      <ListItem
        key={item.label}
        component={Link}
        disablePadding
        href={item.link}
        onClick={() => setMobileDrawerOpen(false)}
      >
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
            backgroundColor: "primary.main",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography align="center" variant="h5" component="p">
            {t("nav_bar.Announcement", { val: 50})}
          </Typography>
        </Stack>
        {/**************** Navbar ****************/}
        <Toolbar
          sx={{
            height: 60,
            backgroundColor: "secondary.light",
            color: "primary.main",
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
          <Link href="/" component={Link}>
            <Img
              src={require("../../assets/images/Thesus_logo.webp")}
              alt="company logo"
             
              sx={{ width:"90px",
              minWidth:"90px"}}
            />
          </Link>
          {/**************** Humburger Nav Menu ****************/}
          <List sx={{ display: { xs: "none", sm: "inline-flex" } }}>
            {navLinks
              .filter((item) => !item.links)
              .map((item) => (
                <ListItem  key={item.label} disablePadding>
                <Link
                  component={Link}
                  sx={{
                    color: "primary.main",
                    width:"max-content",
                    textDecoration:"none",
                    padding: "calc(0.2rem + 0.7vw)"
                    
                  }}
                  href={item.link}
                >
                  {t(`nav_bar.${item.label}`)}
                </Link>
                </ListItem>
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
              <Badge badgeContent={4} color="primary" invisible={false && true}>
                <ShoppingBagOutlinedIcon />
              </Badge>
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
                  bgcolor: "secondary.light",
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
                  <ListItem
                    disablePadding
                    href="/"
                    onClick={() => setProfilePopoverOpen(null)}
                  >
                    <ListItemIcon>
                      <ManageAccountsOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={t(`button.profileSettings`)} />
                  </ListItem>
                  <ListItem
                    
                    component={Link}
                    href="/"
                    disablePadding
                    onClick={() => setProfilePopoverOpen(null)}
                  >
                    <ListItemIcon>
                      <FavoriteBorderOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={t(`button.favorites`)} />
                  </ListItem>
                  <ListItem
                    
                    component={Link}
                    href="/login"
                    disablePadding
                    onClick={() => setProfilePopoverOpen(null)}
                  >
                    <ListItemIcon m={0}>
                      <LoginOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={t(`button.login`)} />
                  </ListItem>
                  <ListItem
                    
                    component={Link}
                    href="/login"
                    disablePadding
                    onClick={() => setProfilePopoverOpen(null)}
                  >
                    <ListItemIcon>
                      <LogoutOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={t(`button.logout`)} />
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
              height: "max-content",
              maxWidth: 360,
              bgcolor: "secondary.light",
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
              <LanguageSwitcher closeHamburgerDrawer={handleMenuDrawerToggle} />
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
