import { IconButton, Stack, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { grey, primary } from "../context/theme";

const Footer = () => {
    return (
        <Stack gap={5} bgcolor={primary} width={"100%"} alignItems={"center"} pt={"5vh"} pb={"10vh"} borderRadius={"20px 20px 0 0"} zIndex={1}>
            <Typography variant="h6" color={grey}>
                PAU Student Affairs
            </Typography>

            <Stack sx={{ flexDirection: "row" }} gap={1}>

                <IconButton
                    sx={{ color: "#F8F8FF", }}
                    component="a"
                    href="https://ng.linkedin.com/school/pan-atlantic-university/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedInIcon sx={{ fontSize: { xs: '20px', md: '28px' } }} />
                </IconButton>

                <IconButton
                    sx={{ color: "#F8F8FF", }}
                    component="a"
                    href="https://web.facebook.com/PanAtlanticUniversityNG/?_rdc=1&_rdr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FacebookIcon sx={{ fontSize: { xs: '20px', md: '28px' } }} />
                </IconButton>

                <IconButton
                    sx={{ color: "#F8F8FF", }}
                    component="a"
                    href="https://x.com/pau_nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <XIcon sx={{ fontSize: { xs: '20px', md: '28px' } }} />
                </IconButton>

                <IconButton
                    sx={{ color: "#F8F8FF", }}
                    component="a"
                    href="https://www.instagram.com/pau_nigeria/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon sx={{ fontSize: { xs: '20px', md: '28px' } }} />
                </IconButton>

            </Stack>

            <Typography color={grey}>
                Copyright All rights reserved
            </Typography>
        </Stack>
    )
}

export default Footer