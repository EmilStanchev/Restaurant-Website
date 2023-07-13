import * as React from "react";
import AppBar from "@mui/material/AppBar";
import logo from "../../assets/logo.png";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { ThemeContext } from "../../themes/Theme";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function SideBar({ pages }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = React.useContext(ThemeContext);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AppBar position="static" sx={{}}>
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", gap: 7 }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton></IconButton>
        <Link href="/">
          <IconButton>
            <img
              src={logo}
              alt="logo"
              style={{ width: 75, backgroundColor: "orange", borderRadius: 50 }}
            />
          </IconButton>
        </Link>
        <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
          <CloseIcon
            onClick={() => setIsOpen(!isOpen)}
            sx={{
              fontSize: "42px",
              float: "right",
              "&:hover": {
                color: "black",
                background: "white",
              },
            }}
          />
          <List sx={{}} onClick={toggleDrawer}>
            {pages?.map((page) => (
              <Link key={page.name} href={page.path}>
                <ListItem>
                  <ListItemIcon>
                    <page.icon />
                  </ListItemIcon>
                  <ListItemText>{page.name}</ListItemText>
                </ListItem>
              </Link>
            ))}
            <ListItem>
              <ListItemIcon>
                <Button
                  sx={{ textAlign: "center" }}
                  onClick={theme.toggleTheme}
                >
                  {theme.isDark ? <NightlightIcon /> : <LightModeIcon />}
                </Button>
              </ListItemIcon>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
