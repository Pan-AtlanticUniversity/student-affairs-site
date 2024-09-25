import { IconButton, Stack, Typography, Box, Grid, Divider } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import StrathmoreLogo from '../../assets/images/transparent-pau-logo.png';
import { grey, primary } from "../../context/theme";

const Footer = () => {
    return (
        <Box
            component="footer"
            width="100%"
            bgcolor={primary} // Gradient background
            color={grey}
            pt={4}
            pb={6}
            mt={6}
            zIndex={1}
            sx={{ borderStartEndRadius: 15, borderStartStartRadius: 15 }}
        >
            <Grid
                container
                spacing={5}
                justifyContent="space-between"
                alignItems="flex-start"
                px={{ xs: 3, md: 6 }}
            >
                {/* Left Section: Logo and Name */}
                <Grid item xs={12} md={4}>
                    <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }}>
                        <Box
                            component="img"
                            src={StrathmoreLogo}
                            alt="PAU Logo"
                            sx={{
                                width: { xs: '100px', md: '150px' }, // Responsive sizing
                                height: 'auto',
                            }}
                        />
                        <Typography
                            textAlign={{ xs: 'center', md: 'left' }}
                            variant="h6"
                            fontFamily={'Barlow'}
                            sx={{
                                fontSize: { xs: '1rem', md: '1.1rem' },
                            }}
                        >
                            STUDENT AFFAIRS, PAN-ATLANTIC UNIVERSITY
                        </Typography>
                    </Stack>
                </Grid>

                {/* Right Section: Connect with Us */}
                <Grid item xs={12} md={4}>
                    <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-end' }}>
                        <Typography
                            variant="h6"
                            fontFamily={'Barlow'}
                            color="inherit"
                            sx={{ textAlign: { xs: 'center', md: 'left' } }}
                        >
                            Connect with Us
                        </Typography>
                        <Stack direction="row" spacing={1} justifyContent={{ xs: 'center', md: 'flex-start' }} gap={2}>
                            {[
                                { icon: <LinkedInIcon sx={{ fontSize: { xs: '28px', md: '32px' } }} />, link: "https://ng.linkedin.com/school/pan-atlantic-university/" },
                                { icon: <FacebookIcon sx={{ fontSize: { xs: '28px', md: '32px' } }} />, link: "https://web.facebook.com/PanAtlanticUniversityNG/" },
                                { icon: <XIcon sx={{ fontSize: { xs: '28px', md: '32px' } }} />, link: "https://x.com/pau_nigeria" },
                                { icon: <InstagramIcon sx={{ fontSize: { xs: '28px', md: '32px' } }} />, link: "https://www.instagram.com/pau_nigeria/?hl=en" }
                            ].map((item, index) => (
                                <IconButton
                                    sx={{
                                        color: grey,
                                        padding: 0,
                                        transition: "transform 0.3s ease, color 0.3s",
                                        '&:hover': {
                                            transform: 'scale(1.15)',
                                            color: grey[300]
                                        }
                                    }}
                                    component="a"
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={index}
                                >
                                    {item.icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>

            {/* Divider */}
            <Divider sx={{ bgcolor: grey[500], my: 4 }} />

            {/* Footer Bottom */}
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent="center"
                alignItems="center"
                spacing={5}
                pl={2}
                pr={2}
            >
                <Typography
                    variant="body2"
                    color={grey[400]}
                    sx={{
                        textAlign: 'center',
                        '&:hover': { color: grey[300] }
                    }}
                    lineHeight={3}
                >
                    Student Support Services | Counseling & Guidance | Career Services | Student Housing | Health & Wellness | Contact Student Affairs
                </Typography>

                <Typography
                    variant="body2"
                    color={grey[500]}
                    textAlign="center"
                    sx={{ mt: { xs: 2, md: 0 } }}
                >
                    © Pan-Atlantic University. All Rights Reserved.
                </Typography>
            </Stack>
        </Box>
    );
};

export default Footer;
