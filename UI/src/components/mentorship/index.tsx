import { Box, Grid, Typography, CardMedia } from '@mui/material';
import image1 from '../../assets/images/FIG/1.jpg';
import image2 from '../../assets/images/Guidance counselling & mentoring/2.jpg';
import image3 from '../../assets/images/14.jpg';
import { accent, grey } from '../../context/theme';

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

        }}>
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
                }}
            >
                Ready to be mentored?
            </Typography>


            {/* Part 1 */}
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        Mentoring Objectives
                    </Typography>
                    <Box component="ul" sx={{ paddingLeft: '1.5rem', listStyleType: 'disc', lineHeight: 1.6 }}>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                                •	To guide students at the start of their university journey.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                                •	 Develop personal habits and professional skills.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                                •	Offer guidance on academic pathways and career choices.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                                •	Provide career advice and support.
                            </Typography>
                        </li>
                    </Box>
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
            <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
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
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        Important Characteristics
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ fontSize: { xs: '0.875rem', md: '1.25rem' }, lineHeight: 1.6 }}>
                        Mentoring is personal and voluntary, focused on guiding students beyond academics, helping develop initiative and responsibility.
                    </Typography>
                    <Box component="ul" sx={{ paddingLeft: '1.5rem', listStyleType: 'disc', lineHeight: 1.6 }}>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                                •	It offers individual advice and guidance to all students.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                                •	Mentoring is voluntary, non-assessed, and doesn't form part of the curriculum.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                                •	It promotes growth in areas like culture, sports, and solidarity beyond academics.
                            </Typography>
                        </li>
                    </Box>
                </Grid>
            </Grid>

            {/* Part 3 */}
            <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        The Mentoring Process
                    </Typography>
                    <Box component="ul" sx={{ paddingLeft: '1.5rem', listStyleType: 'disc', lineHeight: 1.6 }}>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                                •	Start with good study habits, and discuss these with your advisor.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                                •	Integrate into university life through knowledge and core values.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                                •	Develop professional behaviors and attitudes from day one.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                                •	Engage in university activities beyond academics to enhance personal growth.
                            </Typography>
                        </li>
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
