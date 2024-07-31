import React, { useEffect, useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Switch from "@mui/material/Switch";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    // primary main is normally blue "primary.main"
    <AppBar position="fixed" sx={{ zIndex: 1400, bgcolor: theme === "dark" ? "grey.900" : "blue" }}>
      <Container>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {/* menudropdown list */}
            <MenuItem onClick={handleMenuClose} component="a" href="/">Home</MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="/club">Clubs</MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="/blog">Blogs</MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="/rules-guidelines">Rules & Guidelines</MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="/rules-guidelines">Add Content</MenuItem>
            {/* Add more MenuItem components for other navigation links */}

            
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PAU Student-Affairs
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>

            {/* menuitems */}
            <Button color="inherit" href="/">Home</Button>
            <Button color="inherit" href="/club">Clubs</Button>
            <Button color="inherit" href="/blog">Blogs</Button>
            <Button color="inherit" href="/rules-guidelines">Rules & Guidelines</Button>
            <Button color="inherit" href="/admin">Add Content</Button>
            {/* Add more Button components for other navigation links */}

          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Switch checked={theme === "dark"} onChange={handleThemeChange} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
