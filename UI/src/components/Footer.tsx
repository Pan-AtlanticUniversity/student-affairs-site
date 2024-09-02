import { IconButton, Stack, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { grey, primary } from "../context/theme";

const Footer = () => {
    return (
        <Stack gap={5} bgcolor={primary} width={"100%"} alignItems={"center"} pt={"5vh"} pb={"10vh"} borderRadius={"20px 20px 0 0"} zIndex={1}>
            <Typography variant="h6" color={grey}>
                PAU Student Affairs
            </Typography>

            <Stack sx={{ flexDirection: "row" }} gap={1}>
                <IconButton sx={{ color: "#F8F8FF", }}>
                    <LinkedInIcon sx={{ fontSize: { xs: '20px', md: '28px' } }} />
                </IconButton>
                <IconButton sx={{ color: "#F8F8FF", }}>
                    <FacebookIcon sx={{ fontSize: { xs: '20px', md: '28px' } }} />
                </IconButton>
                <IconButton sx={{ color: "#F8F8FF", }}>
                    <XIcon sx={{ fontSize: { xs: '20px', md: '28px' } }} />
                </IconButton>
                <IconButton sx={{ color: "#F8F8FF", }}>
                    <YouTubeIcon sx={{ fontSize: { xs: '20px', md: '28px' } }} />
                </IconButton>
            </Stack>

            <Typography color={grey}>
                Copyright All rights reserved
            </Typography>
        </Stack>
    )
}

export default Footer