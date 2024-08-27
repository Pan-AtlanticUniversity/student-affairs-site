import { AppBar, styled, Toolbar, Box, Button, Stack, Menu, MenuItem, Typography } from '@mui/material';
import { Image } from 'mui-image'
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useNavigate } from 'react-router-dom';
import useAuth from '../context/authContext';
import { grey } from '../context/theme';

import PAULogo from '../assets/images/transparent-pau-logo.png';
import DefaultUser from '../assets/svgs/default-user.svg';

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});
const StyledMenuItem = styled(MenuItem)({
    padding: "8px 35px"
});

interface NavBarProps {
    route: string;
}

const NavBar: React.FC<NavBarProps> = ({ route }) => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleNavigation = (path: string) => {
        navigate(path);
        handleClose();
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position="fixed" sx={{ backgroundColor: grey, boxShadow: "none", padding: "10px 10px" }}>
            <StyledToolBar sx={{ padding: 0 }}>
                <Box sx={{ width: { xs: "125px", md: "150px", lg: "175px" } }}>
                    <Image src={PAULogo} style={{ height: "100%" }} />
                </Box>

                <Stack direction="row" sx={{ gap: { xs: 1, md: 3 } }} alignItems={'center'}>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        sx={{ textTransform: "none" }}
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
                        >
                            Know your mentor!
                        </StyledMenuItem>

                    </Menu>
                    {
                        user
                            ? <Stack direction={"row"} alignItems={"center"} gap={1}>
                                <Typography variant='body1' color={'primary'} fontWeight={"400"} component={'h6'}>{user}</Typography>
                                <Box sx={{ width: "35px" }}>
                                    <Image src={DefaultUser} style={{ height: "100%" }} />
                                </Box>
                            </Stack>

                            : <Button variant='contained' sx={{ textTransform: 'none', padding: "10px 20px" }} onClick={() => handleNavigation('/login')}>
                                Login
                            </Button>

                    }
                </Stack>


            </StyledToolBar>

        </AppBar>
    )
}

export default NavBar