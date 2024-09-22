import React, { useState } from 'react';
import { AppBar, Box, Button, Drawer, IconButton, Stack, Toolbar, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Menu icon for mobile view
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Back arrow icon
import { Image } from 'mui-image';
import { useNavigate, useLocation } from 'react-router-dom';
import PAULogo from '../../assets/images/transparent-pau-logo.png'; // Replace with your logo

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 0', // Adjust padding for better spacing
});

const NavLinkButton = styled(Button)({
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'uppercase', // Matching the uppercase style of text
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // On hover, slight white background
  },
});

const SupportButton = styled(Button)({
  backgroundColor: '#D4A251', // Gold color from the image
  color: 'white',
  borderRadius: '25px', // Rounded corners
  padding: '10px 20px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#C19345', // Slightly darker on hover
  },
});

const DrawerContainer = styled(Box)({
  width: 250,
  height: '100%',
  padding: '20px',
  backgroundColor: '#002E6D',
});

interface NavBarProps {
  route: string;
}

const NavBar: React.FC<NavBarProps> = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current path
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Check if we are in a detail route (e.g., /blogs/:id or /clubs/:id)
  const isDetailRoute = location.pathname.includes('/blogs/') || location.pathname.includes('/clubs/');

  const handleNavigation = (path: string) => {
    navigate(path);
    setDrawerOpen(false); // Close the drawer after navigation
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#002E6D', boxShadow: 'none' }}>
        <StyledToolBar>
          {/* Conditionally render back button if on a detail route */}
          {isDetailRoute && (
            <IconButton onClick={() => navigate(location.pathname.includes('/blogs') ? '/blogs' : '/clubs')} sx={{ color: 'white' }}>
              <ArrowBackIcon />
            </IconButton>
          )}

          {/* Logo Section */}
          <Box sx={{ width: '150px' }}>
            <Image src={PAULogo} style={{ height: '100%', width: '100%' }} />
          </Box>

          {/* Desktop Navigation Links */}
          <Stack direction="row" spacing={4} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavLinkButton onClick={() => handleNavigation('/')}>Home</NavLinkButton>
            <NavLinkButton onClick={() => handleNavigation('/about')}>About</NavLinkButton>
            <NavLinkButton onClick={() => handleNavigation('/clubs')}>Clubs</NavLinkButton>
            <NavLinkButton onClick={() => handleNavigation('/blogs')}>Blog</NavLinkButton>
            <NavLinkButton onClick={() => handleNavigation('/rules')}>Rules</NavLinkButton>
          </Stack>

          {/* Support Button */}
          <SupportButton
            onClick={() => window.location.href = 'mailto:studentaffairs@pau.edu.ng?subject=Know%20Your%20Mentor'}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            Contact Us!
          </SupportButton>

          {/* Mobile Hamburger Menu */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Drawer for mobile view */}
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <DrawerContainer>
              <NavLinkButton fullWidth onClick={() => handleNavigation('/')}>Home</NavLinkButton>
              <NavLinkButton fullWidth onClick={() => handleNavigation('/about')}>About</NavLinkButton>
              <NavLinkButton fullWidth onClick={() => handleNavigation('/clubs')}>Clubs</NavLinkButton>
              <NavLinkButton fullWidth onClick={() => handleNavigation('/blogs')}>Blog</NavLinkButton>
              <NavLinkButton fullWidth onClick={() => handleNavigation('/rules')}>Rules</NavLinkButton>
              <SupportButton fullWidth onClick={() => window.location.href = 'mailto:studentaffairs@pau.edu.ng?subject=Know%20Your%20Mentor'}>Contact Us</SupportButton>
            </DrawerContainer>
          </Drawer>
        </StyledToolBar>
      </AppBar>

      {/* Add padding to prevent content from being hidden behind the fixed navbar */}
      {/* <Box sx={{ paddingTop: '80px' }}>
        {/* Your content goes here */}
      {/* </Box> */}
    </>
  );
};

export default NavBar;
