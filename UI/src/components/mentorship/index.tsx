import { Box, Grid, Typography, CardMedia, Link } from '@mui/material';
import image1 from '../../assets/images/Guidance counselling & mentoring/Ezinne-Olukoya/Ezinne-O.jpeg';
import image2 from '../../assets/images/Guidance counselling & mentoring/Emmanuel-Enaholo/Emmanuel-Enaholo.jpg';
import image3 from '../../assets/images/14.jpg';
import { grey } from '../../context/theme';

const MentorshipInfo = () => {
    return (
        <Box sx={{
            padding: { xs: 2, sm: 4, md: 6 }, // Adjust padding for different screen sizes
            margin: { xs: 1, sm: 2, md: 3 },  // Adjust margins for responsiveness
            width: '100%',  // Ensures it takes full width on all screens
            maxWidth: { xs: '100%', sm: '90%', md: '100%' },  // Adjust max-width for different screen sizes
            mx: 'auto',  // Centers the Box horizontally
            backgroundColor: grey,
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            zIndex: 1

        }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontSize: { xs: '1.5rem', md: '1.95rem' },
                        position: 'relative',
                        display: 'inline-block',
                        textAlign: { xs: 'center', md: 'center' }, //aligment based on screen size
                        '::after': {
                            content: '""',
                            display: 'block',
                            width: '50%', // Adjust the width of the underline as desired
                            height: '3px', // Height of the underline
                            backgroundColor: 'primary.main', // Use your theme's primary color or any color you prefer
                            margin: '5px auto 0', // Adds some space between the text and the underline
                            borderRadius: '2px', // Optional: rounded underline
                        },
                        paddingBottom: { xs: '20px', md: '30px' }
                    }}
                >
                    Meet Our Team
                </Typography>
            </Box>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        <Typography variant="h6" fontWeight={"bold"} gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>Mrs. Ezinne Olukoya</Typography>
                        - Our University Guidance Counselor is available for physical counseling sessions from Monday to Friday, 8:30 AM to 5:00 PM. Her office is located in the Mentoring Room on the second floor of the T.Y. Danjuma Academic Complex. Students can either walk in or book an appointment via email at <Link href="mailto:eolukoya@pau.edu.ng?subject=Schedule%20a%20Session">
                               eolukoya@pau.edu.ng
                        </Link>.

                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
                    <CardMedia
                        component="img"
                        image={image1}
                        alt="Person working on laptop"
                        sx={{
                            borderRadius: 3,
                            width: { xs: '100%', sm: 400, md: 600 },
                            height: { xs: 'auto', sm: 300, md: 500 },
                        }}
                    />
                </Grid>
            </Grid>

            {/* Part 2 */}
            <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
                <Grid item xs={12} md={6} order={{ xs: 3, md: 4 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        <Typography variant="h6" fontWeight={"bold"} gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>Mr. Emmanuel Enaholo</Typography>
                        - Available for both virtual and physical counseling sessions. To schedule a session with him, send an email to <Link href="mailto:eenaholo@pau.edu.ng?subject=Schedule%20a%20Session">
                            eenaholo@pau.edu.ng
                        </Link>.

                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 4, md: 3 }}>
                    <CardMedia
                        component="img"
                        image={image2}
                        alt="Team working together"
                        sx={{
                            borderRadius: 3,
                            width: { xs: '100%', sm: 400, md: 600 },
                            height: { xs: 'auto', sm: 300, md: 500 },
                        }}
                    />
                </Grid>
            </Grid>

            {/* Part 1 */}
            {/* <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        Mrs. Ezinne Olukoya - Our University Guidance Counselor is available for physical counseling sessions from Monday to Friday, 8:30 AM to 5:00 PM. Her office is located in the Mentoring Room on the second floor of the T.Y. Danjuma Academic Complex. Students can either walk in or book an appointment via email at eolukoya@pau.edu.ng.
                    </Typography>

                </Grid>
                <Grid item xs={12} md={6}>
                    <CardMedia
                        component="img"
                        image={image1}
                        alt="Person working on laptop"
                        sx={{
                            borderRadius: 3,
                            width: { xs: '100%', sm: 400, md: 600 },  // 100% for extra small screens, 400px for small, 600px for medium
                            height: { xs: 'auto', sm: 300, md: 500 }, // auto height for extra small, and specific heights for small and medium screens
                        }}
                    />
                </Grid>
            </Grid>

            {/* Part 2 */}
            {/* <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
                <Grid item xs={12} md={6}>
                    <CardMedia
                        component="img"
                        image={image2}
                        alt="Team working together"
                        sx={{
                            borderRadius: 3,
                            width: { xs: '100%', sm: 400, md: 600 },  // 100% for extra small screens, 400px for small, 600px for medium
                            height: { xs: 'auto', sm: 300, md: 500 }, // auto height for extra small, and specific heights for small and medium screens
                        }}
                    />

                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        Mr Emmanuel Enaholo - Available for both virtual and physical counselling sessions. To schedule a session with him, send an email to eenaholo@pau.edu.ng.
                    </Typography>
                </Grid>
            // </Grid> */}

            {/* Part 3 */}
            <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        Health and Wellness Team
                    </Typography>
                    <Box sx={{}}>
                        <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                            In collaboration with the Guidance and Counseling Unit, the University’s Health and Wellness Team (H.W. Team) is composed of select staff members dedicated to supporting students with mental and psychological health concerns. The team offer a variety of resources, including counseling services, wellness workshops, and stress management programs.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardMedia
                        component="img"
                        image={image3}
                        alt="University activities"
                        sx={{
                            borderRadius: 3,
                            width: { xs: '100%', sm: 400, md: 600 },  // 100% for extra small screens, 400px for small, 600px for medium
                            height: { xs: 'auto', sm: 300, md: 500 }, // auto height for extra small, and specific heights for small and medium screens
                        }}
                    />

                </Grid>
            </Grid>
        </Box>

    );
};

export default MentorshipInfo;
