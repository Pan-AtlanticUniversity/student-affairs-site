import { useState } from 'react';
import { AppBar, Box, Button, Menu, MenuItem, Stack, Toolbar, styled } from '@mui/material';
import { Image } from 'mui-image';
import { useNavigate } from 'react-router-dom';
import PAULogo from '../../assets/images/transparent-pau-logo.png'; // Replace with your logo
import { disabled, grey, primary } from '../../context/theme';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface NavBarProps {
  route: string;
}

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1.25, 1.5), // 10px = 1.25 * theme.spacing(8px)
}));

const NavLinkButton = styled(Button)(() => ({
  color: grey, // Accessing grey color from the theme
  fontSize: '1rem',
  textTransform: 'capitalize', // Lowercase 'Capitalize'
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transition: '0.5s',
  },
}));

const SupportButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${grey}`, // Access grey color from the theme
  color: grey, // Grey text color from theme
  borderRadius: 5, // Rounded corners
  textTransform: 'capitalize', // Use lowercase 'capitalize'
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: grey, // Darker grey on hover
    color: theme.palette.primary.main, // Primary color from the theme
    transition: '0.5s',
  },
}));


interface NavBarProps {
  route: string;
}

const NavBar: React.FC<NavBarProps> = ({ route }) => {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
    handleClose();
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledMenuItem = styled(MenuItem)({
    padding: "8px 35px",
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  });

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: primary, boxShadow: 'none' }}>
        <StyledToolBar>

          {/* Logo Section */}
          <Box sx={{ width: { xs: '100px', sm: '150px' } }}>
            <Image src={PAULogo} style={{ height: '100%', width: '100%' }} />
          </Box>

          {/* Desktop Navigation Links */}
          <Stack direction="row" spacing={3} alignItems="center" sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <NavLinkButton onClick={() => handleNavigation('/')}>Home</NavLinkButton>
            <NavLinkButton onClick={() => handleNavigation('/about')}>About</NavLinkButton>
            <NavLinkButton onClick={() => handleNavigation('/clubs')}>Clubs</NavLinkButton>
            <NavLinkButton onClick={() => handleNavigation('/blogs')}>Blog</NavLinkButton>
            <NavLinkButton onClick={() => handleNavigation('/rules')}>Rules</NavLinkButton>
            <NavLinkButton onClick={() => handleNavigation('/mentorship')}>Mentorship</NavLinkButton>
          </Stack>

          {/* Support Button */}
          <SupportButton
            onClick={() => window.location.href = 'mailto:studentaffairs@pau.edu.ng?subject=Contact%20Us%20'}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Contact Us!
          </SupportButton>

          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            sx={{ textTransform: "none", display: { xs: 'visible', sm: 'none' }, color: grey }}
          >
            {route}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <StyledMenuItem onClick={() => handleNavigation('/')}>Home</StyledMenuItem>
            <StyledMenuItem onClick={() => handleNavigation('/about')}>About</StyledMenuItem>
            <StyledMenuItem onClick={() => handleNavigation('/clubs')}>Clubs</StyledMenuItem>
            <StyledMenuItem onClick={() => handleNavigation('/blogs')}>Blog</StyledMenuItem>
            <StyledMenuItem onClick={() => handleNavigation('/rules')}>Rules</StyledMenuItem>
            <StyledMenuItem onClick={() => handleNavigation('/mentorship')}>Mentorship</StyledMenuItem>
            <StyledMenuItem
              onClick={() => window.location.href = 'mailto:studentaffairs@pau.edu.ng?subject=Contact%20Us%20'}
              sx={{ background: disabled, color: grey }}
            >
              Contact Us
            </StyledMenuItem>
          </Menu>
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
