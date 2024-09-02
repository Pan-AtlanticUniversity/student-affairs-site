import { Box, Button, Stack, styled, Typography } from "@mui/material"
import { Banner, Footer, NavBar } from "../../components"
import { dark, grey } from "../../context/theme"
import DownloadIcon from '@mui/icons-material/Download';
import ChudiImage from '../../assets/images/chudi.png';
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
        <Stack minHeight={"100vh"} sx={{ gap: { xs: 14, md: 18, lg: 20 } }}>
            <NavBar route="Rules" />
            <Banner bannerTitle="Rules and Regulations" titleBackground={grey} titleColor={"primary.main"} bannerImage={ChudiImage} />
            <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: { xs: 10, md: 15 } }} alignItems={'center'}>
                <Typography fontFamily={"Poppins"} color={dark} sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, textAlign: 'center' }}>
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

                <Stack width={"100%"} flexDirection={'column'} gap={3}
                    sx={{
                        overflow: 'visible',
                        zIndex: 1,
                        position: 'relative',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            transform: { xs: 'translate(50%, 25%)', md: 'translate(50%, 0)' },
                            width: "clamp(150px, 35%, 300px)",
                            aspectRatio: "1",
                            borderRadius: '50%',
                            backgroundColor: "secondary.main",
                            zIndex: -1,
                        }
                    }}>
                    <Typography variant="h5" fontFamily={"leckerli-one"} color={dark} textAlign={'center'}>
                        Dress codes
                    </Typography>
                    <Stack sx={{ flexDirection: { xs: "column-reverse", md: "row" }, justifyContent: "space-evenly", alignItems: "center" }} >
                        <Stack sx={{ width: "clamp(100%, 100%, 45%)", marginBottom: { xs: "75px" } }} gap={5} pl={1} pr={1}>
                            
                            <Typography sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                                <b>DRESS FOR SUCCESS AT PAU</b>
                                <br/>
                                <br/>
                                At Pan-Atlantic University, we believe that how you present yourself reflects your commitment to excellence. 
                                <br/>
                                Our Dress Code is designed to foster a culture of professionalism, modesty, and respect, consistent with 
                                our values and Christian identity.
                                <br/>
                                <br/>
                                Whether you're attending lectures, participating in professional events, 
                                or engaging in recreational activities, your attire should always reflect a sense of decency 
                                and care for your appearance. 
                                <br/>
                                This policy outlines the standards expected of all students to maintain a respectful 
                                and professional environment on campus.
                            </Typography>

                            <StyledButton variant="contained" endIcon={<DownloadIcon />}>Get full PDF</StyledButton>
                        </Stack>
                        <Box
                            component="img"
                            src={DressSense}
                            sx={{
                                objectFit: 'cover',
                                backgroundSize: "cover",
                                flexGrow: 1,
                                maxWidth: "500px",
                                height: '100%',
                                verticalAlign: 'middle',
                                width: '100%',
                            }}
                        />
                    </Stack>
                </Stack>

                <Stack width={"100%"} flexDirection={'column'} gap={3} alignItems={'center'}
                    sx={{
                        overflow: 'visible',
                        zIndex: 1,
                        position: 'relative',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            transform: { xs: 'translate(-50%, 25%) rotate(35deg)', md: 'translate(-50%, 0) rotate(35deg)' },
                            width: "clamp(150px, 45%, 300px)",
                            aspectRatio: "4/5",
                            borderRadius: '10px',
                            border: '15px #18BC9C solid',
                            zIndex: -1,
                        }
                    }}>
                    <Typography variant="h5" fontFamily={"leckerli-one"} color={dark} textAlign={'center'}>
                        Process and Guidelines
                    </Typography>
                    <Stack sx={{ flexDirection: { xs: "column", md: "row" }, justifyContent: "space-evenly", alignItems: "center" }} >
                        <Box
                            component="img"
                            src={GuideLines}
                            sx={{
                                objectFit: 'cover',
                                backgroundSize: "cover",
                                flexGrow: 1,
                                maxWidth: "500px",
                                height: '100%',
                                verticalAlign: 'middle',
                                width: '100%',
                            }}
                        />
                        <Stack sx={{ width: "clamp(100%, 100%, 45%)", marginBottom: { xs: "75px" } }} gap={5} pl={1} pr={1}>
                            <Typography sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            </Typography>
                            <Typography sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            </Typography>
                            <Typography sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
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