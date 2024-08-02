import { AppBar, styled, Toolbar, Box, Button, Stack, Menu, MenuItem } from '@mui/material';
import { Image } from 'mui-image'
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useNavigate } from 'react-router-dom';

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
        <AppBar position="sticky" sx={{ backgroundColor: "#F8F8FF", boxShadow: "none", padding: 0 }}>
            <StyledToolBar sx={{ padding: 0 }}>
                <Box sx={{ width: { xs: "125px", md: "150px", lg: "175px" } }}>
                    <Image src="/images/transparent-pau-logo.png" style={{ height: "100%" }} />
                </Box>

                <Stack direction="row" gap={3}>
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
                    </Menu>

                    <Button variant='contained' sx={{ textTransform: 'none', padding: "10px 20px" }} onClick={() => handleNavigation('/login')}>
                        Login
                    </Button>
                </Stack>


            </StyledToolBar>

        </AppBar>
    )
}

export default NavBar