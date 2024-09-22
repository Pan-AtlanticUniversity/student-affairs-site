import { Box, Grid, IconButton, Paper, Slider, Stack, Typography } from "@mui/material"
import { Carousel, Footer, NavBar, ProfileCard, TextBox, UnderlinedText } from "../../components"
import { dark, grey } from "../../context/theme"

import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useEffect, useRef, useState } from "react";
// import Title from "../../components/Title";

import PAULogo from '../../assets/svgs/Logo_of_Pan-Atlantic_University.svg';
import anthemAudio from '../../assets/audio/test_song.mp3';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

// import welcomeToPAU from '../../assets/images/welcome-to-pau.png';
// import people from '../../assets/images/chudi.png';
import students from '../../assets/images/2.jpg';
import graduates from '../../assets/images/4.jpg';
import staff from '../../assets/images/5.jpg';
import mentalhealth from '../../assets/images/14.jpg';
// import hugs from '../../assets/images/Clubs and extracurricular/4.jpg';


const About = () => {


    const profiles = [
        {
            imageUrl: 'https://via.placeholder.com/300x200',
            name: 'Anne Osezua',
            role: 'Student Affairs Director',
            contact: '0803 922 6965',
        },
        {
            imageUrl: 'https://via.placeholder.com/300x200',
            name: 'Felix Francis',
            role: 'To update..',
            contact: '0703 016 1494',
        },
        {
            imageUrl: 'https://via.placeholder.com/300x200',
            name: 'Jessica Amie',
            role: 'to update',
            contact: '0814 647 7325',
        },
        {
            imageUrl: 'https://via.placeholder.com/300x200',
            name: 'Calistus Omeje',
            role: 'to update',
            contact: '0813 614 3930',
        },
        {
            imageUrl: 'https://via.placeholder.com/300x200',
            name: 'Augustine Achike',
            role: 'to update',
            contact: '0704 048 1319',
        },


    ];

    const slides = [students, graduates, staff, mentalhealth];

    const audioRef = useRef<HTMLAudioElement>(null);
    // media player
    const [position, setPosition] = useState(0);
    const [duration, setDuration] = useState(0);
    const [paused, setPaused] = useState(true);

    useEffect(() => {
        if (audioRef.current) {
            const handleLoadedMetadata = () => {
                setDuration(Math.floor(audioRef.current!.duration));
            };
            const handleTimeUpdate = () => {
                setPosition(Math.floor(audioRef.current!.currentTime));
            };

            const audioElement = audioRef.current;
            audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
            audioElement.addEventListener('timeupdate', handleTimeUpdate);

            return () => {
                audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
                audioElement.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [audioRef]);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (paused) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
            setPaused(!paused);
        }
    };

    const handleSliderChange = (_: Event, newValue: number | number[]) => {
        if (audioRef.current) {
            const newPosition = newValue as number;
            audioRef.current.currentTime = newPosition;
            setPosition(newPosition);
        }
    };

    const formatDuration = (value: number) => {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    };

    const [value, setValue] = useState<Dayjs | null>(dayjs('2024-08-22'));

    return (
        <Stack minHeight={"100vh"} sx={{
            gap: { xs: 1, md: 1, lg: 0 },
            overflowY: "scroll", overflowX: "hidden"
        }}>
            <NavBar route="About" />

            {/* Carousel & TextBox */}
            <Box sx={{ paddingTop: '80px' }}>
                <Carousel images={slides} />
                <TextBox title="Get to Know Us" description="The Student Affairs Office is dedicated to supporting you throughout your academic journey at Pan-Atlantic University. If you have any questions, need assistance, or simply wish to chat, our doors are always open. Please feel free to visit our office in person, drop us an email, or call any member of our team. Please note that only emails received from students using their official PAU email addresses will be attended to." />
            </Box>


            <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: { xs: 10, md: 15 } }}>

                <Stack sx={{
                    flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-evenly', alignItems: 'center', gap: 10,
                    position: "relative", overflow: 'visible'
                }}>
                    <Stack
                        sx={{
                            width: { xs: "100%", md: "fit-content" },
                            alignItems: { xs: 'center', md: 'start' },
                            zIndex: 1,
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                opacity: 0.1,
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: { xs: "50%", md: '30%', lg: "20%" },
                                height: '80%',
                                backgroundImage: `url(${PAULogo})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                zIndex: -1,
                            }
                        }}
                        gap={2}
                    >
                        <UnderlinedText 
                            text = "School Anthem"
                        />

                        <Typography sx={{ textAlign: { xs: 'center', md: 'start' } }} lineHeight={2.5}>
                            We seek the truth with all our mind and heart, At Pan-Atlantic University
                            <br />
                            We ask God’s help to fill the whole wide world, With cheerful harmony
                            <br />
                            In freedom we follow our noble dream, We have respect for everyone
                            <br />
                            And selfless service lend, Transmitting all we’ve learnt
                            <br />
                            Working hard to reach our goal, Of wisdom, peace and love.
                        </Typography>

                        <Stack sx={{ width: '100%' }} direction={'row'} alignItems={'center'} gap={2}>
                            <IconButton
                                aria-label={paused ? 'Play anthem' : 'Pause anthem'}
                                size="large"
                                color="secondary"
                                onClick={togglePlayPause}
                            >
                                {paused ? <PlayArrowIcon /> : <PauseIcon />}
                            </IconButton>
                            <Slider
                                aria-label="time-indicator"
                                size="medium"
                                value={position}
                                min={0}
                                step={1}
                                max={duration}
                                onChange={handleSliderChange}
                                sx={() => ({
                                    overflow: 'visible',
                                    color: 'secondary.main',
                                    height: 4,
                                    '& .MuiSlider-thumb': {
                                        width: 16,
                                        height: 16,
                                        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                        '&.Mui-active': {
                                            width: 20,
                                            height: 20,
                                        },
                                    },
                                    '& .MuiSlider-rail': {
                                        color: '#000000',
                                        opacity: 0.28,
                                    },
                                    flexGrow: 1
                                })}
                            />
                            <Typography variant="body2" color="text.secondary" whiteSpace='nowrap'>
                                {formatDuration(position)} / {formatDuration(duration)}
                            </Typography>
                        </Stack>
                        <audio ref={audioRef} src={anthemAudio} />
                    </Stack>
                    <Paper
                        square={false}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            gap: 2,
                            padding: "30px 20px 0 20px",
                            borderRadius: "20px",
                            backgroundColor: grey,
                            width: "fit-content",
                            zIndex: 1,
                        }}
                        elevation={3}
                    >
                        <Typography variant="h5" fontFamily={"Barlow"} color={dark}>
                            Upcoming dates and events
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                        </LocalizationProvider>
                    </Paper>
                    <Box
                        sx={{ width: "40vw", aspectRatio: "1", maxWidth: "300px", right: { xs: -50, sm: 35, md: -125 }, bottom: { xs: -75, sm: -90, md: -50, lg: -125 } }}
                        bgcolor={"secondary.main"}
                        position="absolute"
                        zIndex={0}
                        borderRadius={"50%"}
                    />
                </Stack>


                <Stack sx={{
                    flexDirection: 'column', alignItems: 'center', zIndex: 1, position: "relative", overflow: 'visible', width: "100%", marginTop: { xs: 0, md: 0 }
                }}>
                    <UnderlinedText 
                            text = "Meet the Student Affairs Team"
                        />

                    <Grid container spacing={4} justifyContent="center" sx={{ marginTop: '32px' }}>
                        {profiles.map((profile, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <ProfileCard
                                    imageUrl={profile.imageUrl}
                                    name={profile.name}
                                    role={profile.role}
                                    contact={profile.contact}
                                />
                            </Grid>
                        ))}
                    </Grid>


                </Stack>
            </Stack>
            <Footer />
        </Stack>
    )
}

export default About