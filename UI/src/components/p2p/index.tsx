// export default SportInfo;
import { Box, Grid, Typography, CardMedia } from '@mui/material';
import image1 from '../../assets/images/Clubs and extracurricular/p2p-2.jpg';
import { grey } from '../../context/theme';

const P2PInfo = () => {
    return (
        <Box sx={{
            padding: { xs: 2, sm: 4, md: 6 },
            margin: { xs: 1, sm: 2, md: 3 },
            width: '100%',
            maxWidth: { xs: '100%', sm: '100%', md: '100%' },
            mx: 'auto',
            backgroundColor: grey,
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            zIndex: 1,
        }}>

            {/* Part 1 */}
            <Grid container spacing={5} alignItems="center">
                <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.25rem' }, mb: 2 }}
                    >
                        Eligibility Criteria
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '0.85rem', md: '1.20rem' },
                            mb: 3,
                            lineHeight: 1.6,
                        }}
                    >
                        To qualify to become a tutee in the Peer-to-Peer Tutorial Program, the prospective student must meet the following requirements:
                    </Typography>
                    <Box component="ul" sx={{ paddingLeft: '1.5rem', listStyleType: 'disc', lineHeight: 1.6, mb: 3 }}>
                        <li>
                            <Typography
                                variant="body1"
                                sx={{ fontSize: { xs: '0.85rem', md: '1.20rem' }, mb: 1 }}
                            >
                                <strong>Currently enrolled in Pan-Atlantic University:</strong> Only students actively enrolled in PAU are eligible to join the program.
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                variant="body1"
                                sx={{ fontSize: { xs: '0.85rem', md: '1.20rem' }, mb: 1 }}
                            >
                                <strong>Willing to show commitment:</strong> Students must demonstrate dedication by attending sessions regularly and actively participating.
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                variant="body1"
                                sx={{ fontSize: { xs: '0.85rem', md: '1.20rem' }, mb: 1 }}
                            >
                                <strong>Attend an orientation program:</strong> New tutees are required to attend an orientation session to familiarize themselves with the program's expectations and code of conduct.
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
                            width: { xs: '100%', sm: 400, md: 600 },
                            height: { xs: 'auto', sm: 300, md: 500 },
                        }}
                    />
                </Grid>
            </Grid>

        </Box >
    );
};

export default P2PInfo;
