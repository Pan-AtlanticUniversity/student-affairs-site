import { AppBar, styled, Toolbar, Box, Button } from '@mui/material';
import { Image } from 'mui-image'
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const AuthNavBar = () => {
    const navigate = useNavigate();
    return (
        <AppBar position="sticky" sx={{ backgroundColor: "transparent", boxShadow: "none", paddingTop: "15px" }}>
            <StyledToolBar>
                <Box sx={{ width: { xs: "125px", md: "150px", lg: "175px" } }}>
                    <Image src="/images/transparent-pau-logo.png" style={{ height: "100%" }} />
                </Box>
                <Button sx={{ textTransform: 'none', color: "#F8F8FF" }} endIcon={<HomeIcon />} onClick={() => navigate("/")}>
                    Home
                </Button>
            </StyledToolBar>

        </AppBar>
    )
}

export default AuthNavBar