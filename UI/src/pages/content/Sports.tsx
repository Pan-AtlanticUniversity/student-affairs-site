// export default Mentorship
import { Box, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { Banner, Footer, NavBar, PhotoGallery, SportInfo, TextBox, UnderlinedText } from "../../components";
import { accent, grey } from "../../context/theme";
import image1 from '../../assets/images/Clubs and extracurricular/PAUS-2.jpg';

import image3 from '../../assets/images/Clubs and extracurricular/3.jpg';
import sportsCommitee from '../../assets/images/Clubs and extracurricular/sports-committee.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X'; // Use this as X icon if no X icon is available
import { FaTiktok } from 'react-icons/fa';

// Responsive styling applied
const Sports = () => {
    return (
        <Stack minHeight="100vh" sx={{
            gap: { xs: 6, md: 7, lg: 9 }, overflowY: "scroll", backgroundColor: grey,

        }}>
            <NavBar route="Sports" />

            {/* Banner Section */}
            <Box sx={{
                position: "relative", width: "100%", zIndex: 0, '&::before': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    transform: 'translate(-50%, 50%)',
                    zIndex: -1,
                    backgroundColor: accent,
                    width: "clamp(150px, 50vw, 300px)",
                    aspectRatio: 1,
                    maxWidth: "350px",
                    borderRadius: '50%'
                }
            }}>
                <Banner bannerImage={image3} />
                <TextBox title="Sports @ Pan-Atlantic University" />
            </Box>

            {/* Info Section */}
            <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: 'inherit', zIndex: 1 }} alignItems="center">
                {/*  */}
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1.25rem' } }}>
                            About PAU Sports
                        </Typography>
                        <Box sx={{ lineHeight: 1.6 }}>

                            <Typography variant="body1" sx={{ fontSize: { xs: '0.85rem', md: '1.25rem' }, mb: 2 }}>
                                At PAU, we understand the importance of sports and physical activity in fostering community, promoting health, and encouraging teamwork.
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.85rem', md: '1.25rem' }, mb: 2 }}>
                                We offer a wide range of sporting activities, ensuring that all students, regardless of skill level, have the opportunity to participate and compete.
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6} sx={{ width: { xs: "100%", md: "500px" }, height: { xs: "auto", md: "300px" } }}>
                        <Box
                            component="img"
                            src={image1}
                            alt="Mentorship"
                            sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 2 }}
                        />
                    </Grid>

                </Grid>

                {/*  */}
                <PhotoGallery />
                <SportInfo />

                {/*  */}

                {/* commitee Profiles Section */}
                <UnderlinedText text="Meet the Team!" />
                <Grid container justifyContent="center" position="relative" zIndex={0} sx={{
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        transform: 'translate(-65%, -50%) rotate(35deg)',
                        zIndex: -1,
                        border: `15px ${accent} solid`,
                        width: { xs: '40vw' },
                        aspectRatio: "3/5",
                        maxWidth: "350px",
                        borderRadius: 5,
                    }
                }}>
                    <img
                        src={sportsCommitee}
                        alt="Mentorship Visual"
                        style={{
                            width: '100%',
                            maxWidth: '1000px', // adjust max width as needed
                            borderRadius: 25
                        }}
                    />
                </Grid>


                <Paper
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: { xs: "20px 15px", md: "30px 25px" },
                        borderRadius: "15px",
                        backgroundColor: "#FFFFFF",
                        width: { xs: '95%', sm: '85%', md: '80%', lg: '95%' },
                        gap: 2,
                    }}
                    elevation={3}
                >
                    <Typography
                        variant="h6"
                        color="text.primary"
                        sx={{ fontSize: { xs: '0.85rem', md: '18px' }, textAlign: 'center' }}
                    >
                        We encourage all students to stay engaged with our sports community by following our sports social media handles for updates, competitions, and announcements.
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ width: '100%', textAlign: 'center', fontSize: { xs: '0.85rem', md: '16px' } }}
                    >
                        For more details and updates, follow us on:
                    </Typography>

                    <Stack direction="row" spacing={3} justifyContent="center" alignItems="center">
                        <IconButton
                            aria-label="Instagram"
                            href="https://www.instagram.com/PAUSports"  // Link to Instagram
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                            sx={{ fontSize: { xs: '24px', md: '30px' } }}
                        >
                            <InstagramIcon fontSize="inherit" />
                        </IconButton>

                        <IconButton
                            aria-label="Twitter"
                            href="https://x.com/SportsPAU"  // Link to Twitter/X {to update}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                            sx={{ fontSize: { xs: '24px', md: '30px' } }}
                        >
                            <XIcon fontSize="inherit" />
                        </IconButton>

                        <IconButton
                            aria-label="Tik Tok"
                            href=" https://www.tiktok.com/@pau.sports"  // Link to Twitter/X {to update}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                            sx={{ fontSize: { xs: '24px', md: '30px' } }}
                        >
                            <FaTiktok fontSize="inherit" />
                        </IconButton>

                    </Stack>
                </Paper>


            </Stack>

            <Footer />
        </Stack>
    );
};

export default Sports;
