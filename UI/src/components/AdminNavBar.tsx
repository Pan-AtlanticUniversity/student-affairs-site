import { useState } from 'react';
import { AppBar, Box, Button, Menu, MenuItem, Stack, Toolbar, styled } from '@mui/material';
import { Image } from 'mui-image';
import { useNavigate } from 'react-router-dom';
import PAULogo from '../assets/images/transparent-pau-logo.png'; // Replace with your logo
import user from '../assets/svgs/default-user.svg'
import { grey, primary } from '../context/theme';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface NavBarProps {
    route: string;
}

const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: { xs: '10px 0', sm: '10px 0' }, // Adjust padding for better spacing
});

const NavLinkButton = styled(Button)({
    color: grey,
    fontSize: '1rem',
    textTransform: 'Capitalize', // Matching the uppercase style of text
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // On hover, slight white background
        transition: '0.5s'
    },
});



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
                    </Stack>

                    {/* Support Button */}

                    <Stack direction={'row'} gap={1} alignItems={'center'}>

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
                            <StyledMenuItem
                                onClick={() => window.location.href = 'mailto:studentaffairs@pau.edu.ng?subject=Know%20Your%20Mentor'}
                                sx={{ background: primary, color: grey }}
                            >
                                Contact Us
                            </StyledMenuItem>
                        </Menu>
                        <Box
                            component="img"
                            src={user}
                            sx={{
                                objectFit: 'contain',
                                backgroundSize: "contain",
                                width: { xs: '25px', md: '50px' },
                                height: '100%',
                                verticalAlign: 'middle'


                            }}
                        />
                    </Stack>



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
