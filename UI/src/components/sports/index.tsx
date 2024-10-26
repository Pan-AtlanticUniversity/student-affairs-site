import { Box, Grid, Typography, CardMedia } from '@mui/material';
import image1 from '../../assets/images/Clubs and extracurricular/AM-45.jpg';
import image2 from '../../assets/images/Clubs and extracurricular/PAUC-10.jpg';
import image3 from '../../assets/images/14.jpg';
import { grey } from '../../context/theme';

const SportInfo = () => {
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
 


            {/* Part 1 */}
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        Available Sports at PAU
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '0.75rem', md: '1.20rem' } }}>
                        The sports available currently are:
                    </Typography>
                    <Box component="ul" sx={{ paddingLeft: '1.5rem', listStyleType: 'disc', lineHeight: 1.6 }}>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', md: '1.20rem' } }}>
                                • Football (Male and Female)
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', md: '1.20rem' } }}>
                                • Basketball (Male and Female)
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', md: '1.20rem' } }}>
                                • Tennis (Male and Female)
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', md: '1.20rem' } }}>
                                • Volleyball (Male and Female)
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', md: '1.20rem' } }}>
                                • Table Tennis (Male and Female)
                            </Typography>
                        </li>
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ paddingTop: "20px", fontSize: { xs: '0.75rem', md: '1.20rem' } }}>
                        We also have new additions including:
                    </Typography>
                    <Box component="ul" sx={{ paddingLeft: '1.5rem', listStyleType: 'disc', lineHeight: 1.6 }}>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', md: '1.20rem' } }}>
                                <strong> • Chess Community:</strong> For students who enjoy strategic thinking and mental challenges, the Chess Community offers a space to practice, learn, and compete.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', md: '1.20rem' } }}>
                                <strong> •  Games Night:</strong> The PAU Games Night is a social event aimed at bringing together students and staff for low-impact, recreational activities. It includes board games, card games, and other fun group activities designed to foster inclusivity and relaxation.
                            </Typography>
                        </li>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
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
            <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>

                <Grid item xs={12} md={6} order={{ xs: 3, md: 4 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        Signature Events
                    </Typography>
                    <Box component="ul" sx={{ paddingLeft: '1.5rem', listStyleType: 'disc', lineHeight: 1.6 }}>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', md: '1.20rem' } }}>
                                • <strong>Inter Hostel Games</strong>: The Inter Hostel Games is a sporting event that sees students from different hostels compete against each other. It is an opportunity for students to showcase themselves and bring everyone in the school community together. There would be a variety of sports for students to participate in.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', md: '1.20rem' } }}>
                                • <strong>Battle of the Cohorts</strong>: A thrilling event where different year groups compete for bragging rights across several sports disciplines.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', md: '1.20rem' } }}>
                                •	<strong>Inter-University Games</strong>: An annual multi-sport event that brings together universities from across the country. PAU students have the opportunity to represent the school and showcase their athletic talents at the highest level.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', md: '1.20rem' } }}>
                                • <strong>Coupe De Escriva Draft Night</strong>:  Modeled after the NBA Draft, captains from the four basketball teams select their picks for the annual Coupe De Escriva Tournament. It’s a night of excitement, anticipation, and team building.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', md: '1.20rem' } }}>
                                •	<strong>Coupe De Escriva Tournament</strong>: The biggest sports event at PAU, featuring four teams competing in football (male), volleyball (male and female), and basketball (male and female). The tournament typically runs from March to June.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', md: '1.20rem' } }}>
                                • <strong>PAU Marathon</strong>: Every year, PAU hosts a 10km marathon, offering students and staff the chance to test their endurance and push their physical limits.
                            </Typography>
                        </li>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 4, md: 3 }}>
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
            </Grid>


        </Box>

    );
};

export default SportInfo;
