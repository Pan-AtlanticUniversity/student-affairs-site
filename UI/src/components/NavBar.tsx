import { AppBar, styled, Toolbar, Box, Button, Stack, Menu, MenuItem } from '@mui/material';
import { Image } from 'mui-image'
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useNavigate } from 'react-router-dom';
import { grey } from '../context/theme';

import PAULogo from '../assets/images/transparent-pau-logo.png';
import DefaultUser from '../assets/svgs/default-user.svg';

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});
const StyledMenuItem = styled(MenuItem)({
    padding: "8px 35px",
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
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
                <Box
                    sx={{ width: { xs: "125px", md: "150px", lg: "175px" }, height: "100%" }}
                    component={'img'}
                    src={PAULogo}
                />

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
                            Know your
                            <br />
                            mentor!
                        </StyledMenuItem>
                    </Menu>
                </Stack>


            </StyledToolBar>

        </AppBar>
    )
}

export default NavBar