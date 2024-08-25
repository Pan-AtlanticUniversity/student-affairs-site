import { IconButton, Stack, styled, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { grey, primary } from "../context/theme";


const StyledMenuItem = styled(IconButton)({
    color: "#F8F8FF"
});


const Footer = () => {
    return (
        <Stack gap={5} bgcolor={primary} width={"100%"} alignItems={"center"} pt={"5vh"} pb={"10vh"} borderRadius={"20px 20px 0 0"} zIndex={1}>
            <Typography variant="h6" color={grey}>
                PAU Student Affairs
            </Typography>

            <Stack sx={{flexDirection: {xs: "column", md: "row"}}} gap={1}>
                <StyledMenuItem aria-label="Linked In">
                    <LinkedInIcon />
                </StyledMenuItem>
                <StyledMenuItem aria-label="Facebook">
                    <FacebookIcon />
                </StyledMenuItem>
                <StyledMenuItem aria-label="Twitter">
                    <XIcon />
                </StyledMenuItem>
                <StyledMenuItem aria-label="Youtube">
                    <YouTubeIcon />
                </StyledMenuItem>
            </Stack>

            <Typography color={grey}>
                Copyright All rights reserved
            </Typography>
        </Stack>
    )
}

export default Footer