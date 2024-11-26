// export default Mentorship
import { Box, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { accent, grey } from "../../context/theme";
import image1 from '../../assets/images/Clubs and extracurricular/p2p-1.jpg';
import videoSource from "../../assets/video/p2p.mp4";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import XIcon from '@mui/icons-material/X'; // Use this as X icon if no X icon is available
// import { FaTiktok } from 'react-icons/fa';
import InfoBox from "../../components/infobox";
import P2PInfo from "../../components/p2p";
import { Footer, NavBar, TextBox } from "../../components";
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

// Responsive styling applied
const P2P = () => {

    // const navigate = useNavigate();

    return (
        <Stack minHeight="100vh" sx={{
            gap: { xs: 6, md: 7, lg: 9 }, overflowY: "scroll", backgroundColor: grey,

        }}>
            <NavBar route="P2P" />
            {/* Banner Section */}
            <Box sx={{
                position: "relative",
                width: '100%'
            }}>
                <video style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain', // Ensures the video covers the entire space
                    backgroundColor: 'black',
                    // border: '1px solid red' // for visibility
                }} autoPlay muted loop playsInline>
                    <source src={videoSource} type="video/mp4" />
                </video>
                <TextBox title="Peer 2 Peer Tutorials" />
            </Box>

            {/* Info Section */}
            <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: 'inherit', zIndex: 1 }} alignItems="center">
                {/*  */}
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1.25rem' } }}>
                            About Peer 2 Peer
                        </Typography>
                        <Box sx={{ lineHeight: 1.6 }}>

                            <Typography variant="body1" sx={{ fontSize: { xs: '0.85rem', md: '1.25rem' }, mb: 2 }}>
                                The PAU Peer-to-Peer Tutorial Program offers academic support through student-driven learning, connecting students with high-achieving peers who provide one-on-one or small-group tutoring.
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.85rem', md: '1.25rem' }, mb: 2 }}>
                                The program focuses on helping students understand challenging subjects without assigning grades, tailoring teaching methods to individual learning styles for an effective experience. A code of conduct ensures respect and order during sessions.
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6} sx={{ width: { xs: "100%", md: "100%" }, height: { xs: "auto", md: "100%" } }}>
                        <Box
                            component="img"
                            src={image1}
                            alt="p2p"
                            sx={{
                                objectFit: 'contain',
                                borderRadius: 3,
                                width: { xs: '100%', md: "100%" },
                                height: { xs: 'auto', sm: 300, md: 600 },
                            }}
                        />
                    </Grid>

                </Grid>

                {/*  */}

                <P2PInfo />

                <Grid container spacing={3}
                    sx={{
                        position: "relative", overflowX: 'visible',
                        zIndex: 0,
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '50%',
                            right: 0,
                            transform: 'translate(50%, -50%)  rotate(135deg)',
                            zIndex: -1,
                            border: `15px ${accent} solid`,
                            width: { xs: '50vw' },
                            aspectRatio: "3/5",
                            maxWidth: "350px",
                            borderRadius: 5,
                        }
                    }}>
                    <Grid item xs={12} md={6}>
                        <InfoBox
                            title="Tutorial Guidelines for Tutors"
                            content="Ensure you are familiar with the processes and expectations for participating in the Peer-to-Peer Tutorial Program. This includes understanding the code of conduct, attendance requirements, and preparation tips for your sessions."
                            buttonText="View Tutor Guidelines"
                            onClick={() => {
                                window.open('https://shorturl.at/THU2M', '_blank');
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InfoBox
                            title="Tutorial Guidelines for Tutees"
                            content="The essential documents for tutees, including detailed tutorial guidelines, orientation materials, and other resources, are readily available to help you navigate the program successfully."
                            buttonText="View Tutee Guidelines"
                            onClick={() => {
                                window.open('https://shorturl.at/Mi0QT', '_blank');
                            }}
                        />
                    </Grid>
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
                        sx={{ fontSize: { xs: '0.8rem', md: '16px' }, textAlign: 'center', mb: 2 }}
                    >
                        If you’d like to apply to become a tutor or a tutee, or participate in other activities, please use the links below:
                    </Typography>

                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                        <Typography
                            variant="h6"
                            sx={{ fontSize: { xs: '0.8rem', md: '16px' }, mb: 1 }}
                        >
                            <strong>Tutor Application Form:</strong>{' '}
                            <Link
                                to="https://forms.office.com/r/nifV7kj8Yj"
                                target="_blank"
                                rel="noopener noreferrer" // Updated to ensure proper security
                            >
                                Apply here
                            </Link>
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{ fontSize: { xs: '0.8rem', md: '16px' }, mb: 1 }}
                        >
                            <strong>Tutee Application Form:</strong>{' '}
                            <Link

                                to="https://forms.office.com/r/chFZspTGjB"
                                target="_blank"
                                rel="noopener noreferrer" // Updated for consistency
                            >
                                Apply here
                            </Link>
                        </Typography>
                    </Box>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ width: '100%', textAlign: 'center', fontSize: { xs: '0.85rem', md: '16px' } }}
                    >
                        For more details and updates, contact us on:
                    </Typography>

                    <Stack direction="row" spacing={3} justifyContent="center" alignItems="center">
                        {/* <IconButton
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
                        </IconButton> */}
                        <IconButton
                            aria-label="LinkedIn"
                            href="https://www.linkedin.com/in/peer2peer-tutorials-240720292/"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                            sx={{ fontSize: { xs: '24px', md: '30px' } }}
                        >
                            <LinkedInIcon fontSize="inherit" />
                        </IconButton>

                        <IconButton
                            aria-label="Email"
                            href="mailto:peer2peertutorials@pau.edu.ng"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="primary"
                            sx={{ fontSize: { xs: '24px', md: '30px' } }}
                        >
                            <EmailIcon fontSize="inherit" />
                        </IconButton>

                        <IconButton
                            aria-label="Phone"
                            href="tel:+2349076729319"
                            color="primary"
                            sx={{ fontSize: { xs: '24px', md: '30px' } }}
                        >
                            <PhoneIcon fontSize="inherit" />
                        </IconButton>

                    </Stack>
                </Paper>


            </Stack>

            <Footer />
        </Stack>
    );
};

export default P2P;
