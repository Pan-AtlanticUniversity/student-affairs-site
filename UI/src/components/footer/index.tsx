import { IconButton, Stack, Typography, Box, Grid, Divider, Link } from "@mui/material";
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
                sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}
                px={{ xs: 3, md: 6 }}
            >
                {/* Left Section: Logo and Name */}
                <Grid item xs={12} md={3}>
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

                            sx={{
                                fontSize: { xs: '1rem', md: '1.1rem' },
                            }}
                        >
                            STUDENT AFFAIRS, PAN-ATLANTIC UNIVERSITY
                        </Typography>
                    </Stack>
                </Grid>

                {/* Quick Links */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" color="inherit" sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                        Quick Links
                    </Typography>
                    <Stack spacing={1} pt={2} sx={{ alignItems: { xs: 'center', md: 'start' } }}>
                        <Link

                            fontFamily={'Poppins'}
                            href={"https://pau.edu.ng/chaplaincy/"} // Anchor link pattern
                            target={"_blank"}
                            sx={{
                                textDecoration: 'none',
                                color: grey,
                                '&:hover': { color: grey[100] }
                            }}
                        >
                            Chaplaincy
                        </Link>

                        <Link

                            fontFamily={'Poppins'}
                            href={"/guidance"} // Anchor link pattern
                            target={"_blank"}
                            sx={{
                                textDecoration: 'none',
                                color: grey,
                                '&:hover': { color: grey[100] }
                            }}
                        >
                            Guidance & Counseling
                        </Link>

                        <Link

                            fontFamily={'Poppins'}
                            href={"https://drive.google.com/file/d/1X5rna2wlYiHAsj-aEVlb1MAqRoFkKxbZ/view?usp=sharing"} // Anchor link pattern
                            target={"_blank"}
                            sx={{
                                textDecoration: 'none',
                                color: grey,
                                '&:hover': { color: grey[100] }
                            }}
                        >
                            Student Handbook & Policies
                        </Link>

                        <Link

                            fontFamily={'Poppins'}
                            href={"https://elearning.pau.edu.ng/"} // Anchor link pattern
                            target={"_blank"}
                            sx={{
                                textDecoration: 'none',
                                color: grey,
                                '&:hover': { color: grey[100] }
                            }}
                        >
                           E-Learning
                        </Link>

                        <Link

                            fontFamily={'Poppins'}
                            href={"https://portal.pau.edu.ng/students/login?msg=4&accesscheck=%2Fstudents%2Findex.php"} // Anchor link pattern
                            target={"_blank"}
                            sx={{
                                textDecoration: 'none',
                                color: grey,
                                '&:hover': { color: grey[100] }
                            }}
                        >
                          PAU-SIMS
                        </Link>

                        <Link

                            fontFamily={'Poppins'}
                            sx={{
                                textDecoration: 'none',
                                color: grey,
                                '&:hover': { color: grey[100] }
                            }}
                            onClick={() => alert('Coming soon!')}
                        >
                            Student Council
                        </Link>

                        <Link
                            fontFamily={'Poppins'}
                            sx={{
                                textDecoration: 'none',
                                color: grey,
                                '&:hover': { color: grey[100] }
                            }}
                            onClick={() => alert('Coming soon!')}
                        >
                            Student Businesses
                        </Link>

                        <Link
                            fontFamily={'Poppins'}
                            sx={{
                                textDecoration: 'none',
                                color: grey,
                                '&:hover': { color: grey[100] }
                            }}
                            onClick={() => alert('Coming soon!')}
                        >
                            Careers Office
                        </Link>

                    </Stack>
                </Grid>

                {/* Contact Information */}
                <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                    <Typography variant="h6" color="inherit">
                        Contact Information
                    </Typography>
                    <Typography pt={2} variant="body2" color={grey[300]} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                        Email: studentaffairs@pau.edu.ng
                    </Typography>
                    <Typography variant="body2" color={grey[300]} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                        Phone: +234 814 366 8196
                    </Typography>
                    <Typography variant="body2" color={grey[300]} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                        Address: Pan-Atlantic University, Km 52 Lekki-Epe Expressway, Ibeju-Lekki, Lagos, Nigeria
                    </Typography>
                </Grid>

                {/* Social Media Links */}
                <Grid item xs={12} md={2}>
                    <Typography
                        variant="h6"

                        color="inherit"
                        textAlign={{ xs: 'center', md: 'left' }} // Responsive alignment
                        pl={1}
                    >
                        Connect with Us
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={-1}
                        justifyContent={{ xs: 'center', md: 'flex-start' }} // Center on small screens, align left on medium+
                        pt={2}
                        flexWrap="wrap" // Wrap the icons on small screens to avoid overflow
                    >
                        {[
                            {
                                icon: <LinkedInIcon sx={{ fontSize: { xs: '24px', sm: '28px', md: '32px' } }} />, // Responsive font size
                                link: "https://ng.linkedin.com/school/pan-atlantic-university/"
                            },
                            {
                                icon: <FacebookIcon sx={{ fontSize: { xs: '24px', sm: '28px', md: '32px' } }} />, // Responsive font size
                                link: "https://web.facebook.com/PanAtlanticUniversityNG/"
                            },
                            {
                                icon: <XIcon sx={{ fontSize: { xs: '24px', sm: '28px', md: '32px' } }} />, // Responsive font size
                                link: "https://x.com/pau_nigeria"
                            },
                            {
                                icon: <InstagramIcon sx={{ fontSize: { xs: '24px', sm: '28px', md: '32px' } }} />, // Responsive font size
                                link: "https://www.instagram.com/pau_nigeria/?hl=en"
                            }
                        ].map((item, index) => (
                            <IconButton
                                sx={{
                                    color: grey,
                                    padding: { xs: 0.5, sm: 1 }, // Adjust padding for smaller screens
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
                </Grid>

            </Grid>

            {/* Divider */}
            <Divider sx={{ bgcolor: grey, my: 4 }} />

            {/* Legal Section */}
            <Grid container justifyContent="center">
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={5} pl={2} pr={2} alignItems="center">
                    <Typography
                        variant="body2"
                        color={grey[400]}
                        sx={{
                            textAlign: 'center',
                            '&:hover': { color: grey[300] }
                        }}
                    >
                        <Link href="#privacy-policy" sx={{ color: grey, textDecoration: 'none', '&:hover': { color: grey[100] } }}>
                            Privacy Policy
                        </Link> |
                        <Link href="#terms-of-service" sx={{ pl: 0.35, color: grey, textDecoration: 'none', '&:hover': { color: grey[100] } }}>
                            Terms of Service
                        </Link>
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
            </Grid>
        </Box>
    );
};

export default Footer;
