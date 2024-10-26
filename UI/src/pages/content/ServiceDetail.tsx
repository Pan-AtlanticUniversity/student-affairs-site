import { Box, Stack, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Banner, Footer, NavBar, TextBox } from '../../components';
import { accent, dark, grey } from '../../context/theme';
import { ServiceInterface } from '../../components/Services'

const ServiceDetail = () => {

    const location = useLocation();
    const { service }: { service: ServiceInterface } = location.state;

    if (!service) {
        return <Typography variant="h6">No service details available.</Typography>;
    }

    const paragraphs = service?.content?.split('\n');

    return (
        <Stack minHeight={"100vh"} sx={{
            gap: { xs: 6, md: 10, lg: 14 },
            overflowY: "scroll", overflowX: "hidden",
            backgroundColor: grey,
            backgroundSize: "cover",
        }}>
            <NavBar route="Home" />

            <Box sx={{
                position: "relative",
                width: '100%',
                zIndex: 0,
                '&::before': {
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
                <Banner bannerImage={service?.image} />
                <TextBox
                    title={service?.name}
                />
            </Box>

            <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: { xs: 5, md: 7 } }}>
                <Box sx={{
                    position: "relative",
                    width: '100%',
                    overflowX: 'visible',
                    zIndex: 0,
                    padding: { xs: "10px", md: "30px" }, // Adjust padding for different screen sizes
                    // backgroundColor: "#f5f5f5", // Light background color to make it stand out
                    borderRadius: "10px", // Rounded corners for the container
                    marginBottom: 2, // Space below the container
                    boxShadow: 1, // Subtle shadow for some depth
                    // zIndex: 1 
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '75%',
                        left: 0,
                        transform: 'rotate(35deg) translate(-70%, 0)',
                        width: { xs: '50%', lg: '300px', xl: '500px' },
                        aspectRatio: "4/5",
                        borderRadius: '10px',
                        border: `15px ${accent} solid`,
                        opacity: 0.2,
                        zIndex: -1,
                    },
                }}>
                    {paragraphs?.map((paragraph, index) => {
                        // Check if the line starts with ## for an <h2> or ### for an <h3>
                        if (paragraph.startsWith('###')) {
                            return (
                                <>
                                    <br />
                                    <Typography
                                        key={index}
                                        variant="h6" // You can change the variant to match the header level
                                        color={dark}
                                        zIndex={1}
                                        textAlign={'left'}
                                        gutterBottom // Adds margin below the header
                                    >
                                        {paragraph.replace('###', '')}
                                    </Typography>
                                </>

                            );
                        } else if (paragraph.startsWith('##')) {
                            return (
                                <>
                                    <br />
                                    <Typography
                                        key={index}
                                        variant="h4" // You can change the variant to match the header level
                                        color={dark}
                                        zIndex={1}
                                        textAlign={'left'}
                                        gutterBottom
                                    >
                                        {paragraph.replace('##', '')}
                                    </Typography>
                                </>

                            );
                        } else {
                            // Regular paragraph text
                            return (
                                <Typography
                                    key={index}
                                    variant="body1"
                                    color={dark}
                                    zIndex={1}
                                    textAlign={'left'}
                                    paragraph // Adds margin below the paragraph
                                >
                                    {paragraph}
                                </Typography>
                            );
                        }
                    })}
                </Box>
            </Stack>
            <Footer />
        </Stack>
    );
};

export default ServiceDetail;
