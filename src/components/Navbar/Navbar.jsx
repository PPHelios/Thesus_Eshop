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
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Popover from "@mui/material/Popover";
import Badge from "@mui/material/Badge";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { Img } from "../muiStyledComponents/muiStyledComponents";
import { useStore } from "../../store/useStore";
import Cart from "../../features/Cart/Cart";

function Navbar() {
  const products = useStore((state) => state.products);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [listDrawerOpen, setListDrawerOpen] = useState(false);
  const [profilePopoverOpen, setProfilePopoverOpen] = useState(null);
  const [value, setValue] = useState("");

  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const loggedInUser = useStore((state) => state.user?.firstName);
  const logout = useStore((state) => state.logout);
  const theme = useStore((state) => state.user.theme);

  const totalCartItemsNumber = useStore((state) => state.cartTotalItems());
  const { t, i18n } = useTranslation("common");
  const docDir = i18n.dir();
  const handleMenuDrawerToggle = () => {
    setMobileDrawerOpen((prevState) => !prevState);
  };
  const handleCartDrawerToggle = () => {
    setCartDrawerOpen((prevState) => !prevState);
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
  const handleSearchDrawerToggle = () => {
    setSearchDrawerOpen((prevState) => !prevState);
  };
  const open = Boolean(profilePopoverOpen);
  const id = open ? "profile settings menu" : undefined;
  const drawerWidth = 240;

  const navLinks = [
    {
      link: "/user/profile",
      label: "profile",
      links: [
        {
          link: "/user/profile/settings",
          label: "profileSettings",
          icon: "",
          show: loggedInUser,
        },

        { link: "/login", label: "login", icon: "", show: !loggedInUser },
        {
          link: "#",
          label: "logout",
          icon: "LogoutOutlinedIcon",
          show: loggedInUser,
        },
      ],
    },
    { link: "/weekendBoots", label: "weekendBoots" },
    { link: "/terrusClogs", label: "terrusClogs" },
    { link: "/shopAll", label: "shopAll" },
    { link: "/values", label: "values" },
  ];

  const navItems = navLinks.map((item) => {
    const menuItems = item?.links?.map((subItem) => {
      if (subItem.show) {
        return (
          <ListItem
            key={subItem.label}
            sx={{ pl: 4 }}
            onClick={
              subItem.label === "logout"
                ? () => {
                    setProfilePopoverOpen(null);
                    logout();
                  }
                : () => setMobileDrawerOpen(false)
            }
          >
            <Link href={subItem.link} underline="none">
              <ListItemText primary={t(`button.${subItem.label}`)} />
            </Link>
          </ListItem>
        );
      }
    });
    if (menuItems) {
      return (
        <Box key={item.label} color="text.primary">
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
        color="text.primary"
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
          <Typography align="center" variant="h6" component="p">
            {t("nav_bar.Announcement", { val: 1000 })}
          </Typography>
        </Stack>
        <Divider />
        {/**************** Navbar ****************/}
        <Toolbar
          sx={{
            height: 60,
            backgroundColor: "secondary.light",
            color: "text.primary",
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
              src={
                theme === "light"
                  ? require("../../assets/images/Thesus_logo.webp")
                  : require("../../assets/images/ThesusWhite.webp")
              }
              alt="company logo"
              sx={{
                width: "90px",
                minWidth: "90px",
              }}
            />
          </Link>
          {/**************** Humburger Nav Menu ****************/}
          <List sx={{ display: { xs: "none", sm: "inline-flex" } }}>
            {navLinks
              .filter((item) => !item.links)
              .map((item) => (
                <ListItem key={item.label} disablePadding>
                  <Link
                    component={Link}
                    sx={{
                      color: "text.primary",
                      width: "max-content",
                      textDecoration: "none",
                      padding: "calc(0.2rem + 0.7vw)",
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
              color: "text.primary",
              flexGrow: 0,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              gap: 1,
              position: "relative",
            }}
          >
            {/***** Search Drawer *****/}
            <Drawer
              variant="temporary"
              open={searchDrawerOpen}
              onClose={handleSearchDrawerToggle}
              ModalProps={{
                keepMounted: false, // Better open performance on mobile.
              }}
              anchor="top"
              sx={{
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  height: 130,
                  backgroundColor: "secondary.light",
                },
              }}
            >
              <Autocomplete
                freeSolo
                size="small"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                id="search"
                options={products.map((item) => ({
                  label: docDir === "rtl" ? item.nameAr : item.name,
                  img: item.img,
                }))}
                renderOption={(props, option) => (
                  <Link
                    href="/shopall"
                    sx={{
                      "& > img": { mr: 2, flexShrink: 0 },
                      color: "text.primary",
                    }}
                    {...props}
                    onClick={handleSearchDrawerToggle}
                  >
                    <img
                      loading="lazy"
                      width="60"
                      src={require(`../../assets/images/${option.img},w_300.webp`)}
                      alt={option.alt}
                    />
                    {option.label}
                  </Link>
                )}
                sx={{
                  px: 2,
                }}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    label={t("button.search")}
                    sx={{
                      mt: 2,
                      mx: "auto",
                      "& label.Mui-focused": {
                        color: "text.primary",
                      },
                    }}
                  />
                )}
              />
            </Drawer>

            <IconButton
              color="inherit"
              aria-label="search"
              onClick={handleSearchDrawerToggle}
            >
              <SearchOutlinedIcon />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{ p: 0 }}
              aria-label="shopping cart"
              onClick={handleCartDrawerToggle}
            >
              <Badge
                badgeContent={totalCartItemsNumber}
                color="primary"
                invisible={false && true}
                sx={{ "& .MuiBadge-colorPrimary": { color: "white" } }}
              >
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
                <List color="text.primary">
                  {loggedInUser && (
                    <ListItem
                      color="inherit"
                      disablePadding
                      href="/"
                      onClick={() => setProfilePopoverOpen(null)}
                    >
                      <ListItemIcon>
                        <ManageAccountsOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={t(`button.profileSettings`)} />
                    </ListItem>
                  )}

                  {!loggedInUser && (
                    <ListItem
                      color="inherit"
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
                  )}

                  {loggedInUser && (
                    <ListItem
                      color="inherit"
                      component={Link}
                      href="#"
                      disablePadding
                      onClick={() => {
                        setProfilePopoverOpen(null);
                        logout();
                      }}
                    >
                      <ListItemIcon>
                        <LogoutOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={t(`button.logout`)} />
                    </ListItem>
                  )}
                </List>
              </Stack>
            </Popover>
          </Box>
        </Toolbar>
      </AppBar>
      {/***** Hamburger Menu Drawer *****/}
      <Box component="nav">
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
              minHeight: "100vh",
              maxWidth: 360,
              bgcolor: "secondary.light",
              paddingTop: 5,
            }}
            component="nav"
            aria-labelledby="nested-list"
          >
            <Box textAlign="center">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  pb: 1,
                }}
              >
                <LanguageSwitcher
                  closeHamburgerDrawer={handleMenuDrawerToggle}
                />
                <ThemeToggler />
              </Box>
              <Divider />
            </Box>
            <Divider />
            {navItems}
          </List>
        </Drawer>
      </Box>
      {/***** Cart Drawer *****/}
      <Box component="nav">
        <Drawer
          variant="temporary"
          //  anchor={docDir === "rtl" ? "left" : "left"}
          SlideProps={{ direction: docDir === "rtl" ? "left" : "right" }}
          open={cartDrawerOpen}
          onClose={handleCartDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "max-content",
            },
          }}
        >
          <Cart onClick={handleCartDrawerToggle} />
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
