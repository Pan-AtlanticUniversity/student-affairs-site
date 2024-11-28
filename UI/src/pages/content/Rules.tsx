import { Box, Button, Stack, styled, Typography } from "@mui/material"
import { Banner, Footer, NavBar, TextBox } from "../../components"
import { accent, dark, grey } from "../../context/theme"
import DownloadIcon from '@mui/icons-material/Download';
import rulesGuy from '../../assets/images/CS-3625-820x400-1.jpg'
import Smiley from '../../assets/images//smiley.png';
import GuideLines from '../../assets/svgs/guidelines.svg';
import DressSense from '../../assets/svgs/dress-sense.svg';
import governance from '../../assets/svgs/governance.svg';

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
                <Banner bannerImage={rulesGuy} />
                <TextBox
                    title="Rules and Regulations"
                />
            </Box>

            <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: 'inherit' }} alignItems={'center'}>
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
                    <Typography variant="h4" color={dark} textAlign={'center'}>
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

                            <StyledButton variant="contained" endIcon={<DownloadIcon />}
                                onClick={() => {
                                    window.open('https://drive.google.com/file/d/1FbIo1D9MY-68kvNQRYMCsIGH-YEBtyNQ/view?usp=sharing', '_blank');
                                }}>Get full PDF</StyledButton>
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

                <Stack width={"100%"} flexDirection={'column'} gap={3} alignItems={'center'} sx={{ overflowX: 'visible' }} id="process-guidelines">
                    <Typography variant="h4" color={dark} textAlign={'center'}>
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

                            <StyledButton variant="contained" endIcon={<DownloadIcon />}
                                onClick={() => {
                                    window.open('https://drive.google.com/file/d/1X5rna2wlYiHAsj-aEVlb1MAqRoFkKxbZ/view?usp=sharing', '_blank');
                                }}
                            >Get full PDF</StyledButton>
                        </Stack>

                    </Stack>
                </Stack>

                <Stack width={"100%"} flexDirection={'column'} gap={3} sx={{ overflowX: 'visible' }}>
                    <Typography variant="h4" color={dark} textAlign={'center'}>
                        Student Governance Framework

                    </Typography>
                    <Stack sx={{ flexDirection: { xs: "column-reverse", md: "row" }, justifyContent: "space-evenly", alignItems: "center", overflowX: 'visible' }} >
                        <Stack sx={{ width: "clamp(256px, 100%, 1200px)", marginBottom: { xs: "75px" } }} gap={5} pl={1} pr={1}>
                            <Typography sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                                <b>Student Governance Framework at PAU</b>
                                <br />
                                <br />
                                The Student Governance Framework outlines the processes and guidelines for managing student associations, clubs,
                                and initiatives, ensuring they operate effectively and align with institutional goals
                                <br />
                                {/* Our Dress Code is designed to foster a culture of professionalism, modesty, and respect, consistent with
                                our values and Christian identity.
                                <br />
                                <br />
                                Whether you're attending lectures, participating in professional events,
                                or engaging in recreational activities, your attire should always reflect a sense of decency
                                and care for your appearance.
                                <br />
                                This policy outlines the standards expected of all students to maintain a respectful
                                and professional environment on campus. */}
                            </Typography>

                            <StyledButton variant="contained" endIcon={<DownloadIcon />}
                                onClick={() => {
                                    window.open('https://pau.edu.ng/pau-uploads/Student%20Governance%20Framework%20-%200.3.1.1.pdf?_t=1710595698', '_blank');
                                }}>Get full PDF</StyledButton>
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
                                src={governance}
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


            </Stack>



            <Footer />
        </Stack>
    )
}

export default About