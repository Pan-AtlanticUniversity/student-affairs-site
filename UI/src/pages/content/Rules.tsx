import { Box, Button, Stack, styled, Typography } from "@mui/material"
import { Banner, Footer, NavBar } from "../../components"
import { dark, grey } from "../../context/theme"
import DownloadIcon from '@mui/icons-material/Download';
import rulesGuy from '../../assets/images/CS-3625-820x400-1.jpg'
import Smiley from '../../assets/images//smiley.png';
import GuideLines from '../../assets/svgs/guidelines.svg';
import DressSense from '../../assets/svgs/dress-sense.svg';

const StyledButton = styled(Button)({
    padding: "20px 0",
    textTransform: "none",
    width: "100%",
    backgroundColor: grey,
    color: dark,
    borderRadius: 20,
    boxShadow: "0px 3px 3px 2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
});



const About = () => {
    return (
        <Stack minHeight={"100vh"} sx={{
            gap: { xs: 6, md: 10, lg: 14 },
            overflowY: "scroll", overflowX: "hidden",
            backgroundColor: grey,
            backgroundSize: "cover",
        }}>
            <NavBar route="Rules" />
            <Banner bannerImage={rulesGuy} bannerTitle={"Rules and regulations"} titleBackground={'primary.main'} titleColor={grey} />
            <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: { xs: 10, md: 15 } }} alignItems={'center'}>
                <Typography color={dark} sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, textAlign: 'center', zIndex: 1 }}>
                    To ensure a smooth experience here at PAU, here are a few guidelines to get you up and going<span>
                        <Box
                            component="img"
                            src={Smiley}
                            pl={1}
                            sx={{
                                objectFit: 'contain',
                                backgroundSize: "contain",
                                width: '40px',
                                height: '100%',
                                verticalAlign: 'middle'

                            }}
                        /></span>
                </Typography>

                <Stack width={"100%"} flexDirection={'column'} gap={3} sx={{ overflowX: 'visible' }}>
                    <Typography variant="h4" fontFamily={"Barlow"} color={dark} textAlign={'center'}>
                        Dress codes
                    </Typography>
                    <Stack sx={{ flexDirection: { xs: "column-reverse", md: "row" }, justifyContent: "space-evenly", alignItems: "center", overflowX: 'visible' }} >
                        <Stack sx={{ width: "clamp(256px, 100%, 1200px)", marginBottom: { xs: "75px" } }} gap={5} pl={1} pr={1}>

                            <Typography sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                                <b>DRESS FOR SUCCESS AT PAU</b>
                                <br />
                                <br />
                                At Pan-Atlantic University, we believe that how you present yourself reflects your commitment to excellence.
                                <br />
                                Our Dress Code is designed to foster a culture of professionalism, modesty, and respect, consistent with
                                our values and Christian identity.
                                <br />
                                <br />
                                Whether you're attending lectures, participating in professional events,
                                or engaging in recreational activities, your attire should always reflect a sense of decency
                                and care for your appearance.
                                <br />
                                This policy outlines the standards expected of all students to maintain a respectful
                                and professional environment on campus.
                            </Typography>

                            <StyledButton variant="contained" endIcon={<DownloadIcon />}>Get full PDF</StyledButton>
                        </Stack>
                        <Box
                            sx={{
                                position: 'relative',
                                display: 'inline-block',
                                width: '100%',
                                maxWidth: { xs: "500px", xl: '850px' },
                                height: '100%',
                                overflowX: 'visible',
                                zIndex: 0,
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: '-5%',
                                    right: '-25%',
                                    width: { xs: '50vw', lg: '300px', xl: '500px' },
                                    aspectRatio: "1",
                                    borderRadius: '50%',
                                    backgroundColor: "secondary.main",
                                    zIndex: -1,
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={DressSense}
                                sx={{
                                    objectFit: 'cover',
                                    backgroundSize: "cover",
                                    height: '100%',
                                    verticalAlign: 'middle',
                                    width: '100%',
                                    zIndex: 0,
                                    position: 'relative',
                                }}
                            />
                        </Box>

                    </Stack>
                </Stack>

                <Stack width={"100%"} flexDirection={'column'} gap={3} alignItems={'center'} sx={{ overflowX: 'visible' }}>
                    <Typography variant="h4" fontFamily={"Barlow"} color={dark} textAlign={'center'}>
                        Process and Guidelines
                    </Typography>
                    <Stack sx={{ flexDirection: { xs: "column", md: "row", overflowX: 'visible' }, justifyContent: "space-evenly", alignItems: "center" }} >
                        <Box
                            sx={{
                                position: 'relative',
                                display: 'inline-block',
                                width: '100%',
                                maxWidth: { xs: "500px", xl: '850px' },
                                height: '100%',
                                overflowX: 'visible',
                                zIndex: 0,
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: '-5%',
                                    left: '-25%',
                                    transform: 'rotate(35deg)',
                                    width: { xs: '50%', lg: '300px', xl: '500px' },
                                    aspectRatio: "4/5",
                                    borderRadius: '10px',
                                    border: '15px #18BC9C solid',
                                    zIndex: -1,
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={GuideLines}
                                sx={{
                                    objectFit: 'cover',
                                    backgroundSize: "cover",
                                    height: '100%',
                                    verticalAlign: 'middle',
                                    width: '100%',
                                }}
                            />
                        </Box>
                        <Stack sx={{ width: "clamp(256px, 100%, 1200px)", marginBottom: { xs: "75px" } }} gap={5} pl={1} pr={1}>
                            <Typography sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                                Understanding the processes and guidelines that shape your experience at Pan-Atlantic University
                                is essential for a smooth and successful academic journey.
                                <br />
                                <br />
                                Below, you'll find a comprehensive guide that outlines everything from the academic calendar
                                and grading system to student policies and support services.
                                <br />
                                <br />
                                This document will equip you with the knowledge needed to help you pass through
                                PAU without a scratch and come out victorious and confident!
                            </Typography>

                            <StyledButton variant="contained" endIcon={<DownloadIcon />}>Get full PDF</StyledButton>
                        </Stack>

                    </Stack>
                </Stack>
            </Stack>

            <Footer />
        </Stack>
    )
}

export default About