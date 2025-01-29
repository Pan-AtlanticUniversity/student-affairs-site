import { Box, Grid, IconButton, Slider, Stack, Typography } from "@mui/material"
import { Banner, Calendar, Footer, NavBar, ProfileCard, TextBox, UnderlinedText } from "../../components"
import { accent, dark, grey } from "../../context/theme"

import { useEffect, useRef, useState } from "react";
// import Title from "../../components/Title";

import PAULogo from '../../assets/svgs/Logo_of_Pan-Atlantic_University.svg';
import anthemAudio from '../../assets/audio/test_song.mp3';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import getToKnowUs from '../../assets/images/chudi.png';
import axios from 'axios';


const About = () => {

    interface TitleItem {
        _id: string;
        post: string;
        name: string;
        email: string;
        phone: string;
        image: string
    }

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

    const [members, setMembers] = useState<TitleItem[]>([]);

    useEffect(() => {
        const getMembers = async () => {
            try {
                const res = await axios.get<TitleItem[]>('api/v1/member');
                console.log(res)
                setMembers(res.data);
            } catch (error) {
                console.log("Error fetching member details:", error);
            }
        };
        getMembers();
    }, []);

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

    return (
        <Stack minHeight={"100vh"} sx={{
            gap: { xs: 6, md: 10, lg: 14 },
            overflowY: "scroll", overflowX: "hidden",
            backgroundColor: grey,
            backgroundSize: "cover",
        }}>
            <NavBar route="About" />

            <Box sx={{
                position: "relative",
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
                <Banner bannerImage={getToKnowUs} />
                <TextBox
                    title="Get to Know Us"
                    description="The Student Affairs Office is dedicated to supporting you throughout your academic journey at Pan-Atlantic University. If you have any questions, need assistance, or simply wish to chat, our doors are always open. Please feel free to visit our office in person, drop us an email, or call any member of our team. Please note that only emails received from students using their official PAU email addresses will be attended to." />
            </Box>

            <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: 'inherit' }}>
                <Typography textAlign="center" lineHeight={1.8} color={dark} sx={{ display: { xs: 'block', md: 'none' }, zIndex: 1 }}>
                    The Student Affairs Office is dedicated to supporting you throughout your academic journey at Pan-Atlantic University.
                    If you have any questions, need assistance, or simply wish to chat, our doors are always open.
                    Please feel free to visit our office in person, drop us an email, or call any member of our team.
                    Please note that only emails received from students using their official PAU email addresses will be attended to.
                </Typography>
                <Stack sx={{
                    flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-evenly', alignItems: 'center', gap: 10,
                    position: "relative", overflow: 'visible',
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
                            text="School Anthem"
                        />

                        <Typography sx={{ textAlign: { xs: 'center', md: 'start' } }} lineHeight={2.2}>
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
                    <Calendar isAdmin={false} />
                    <Box
                        sx={{ width: "40vw", aspectRatio: "1", maxWidth: "300px", right: { xs: -50, sm: 35, md: -125 }, bottom: { xs: -75, sm: -90, md: -50, lg: -125 } }}
                        bgcolor={"secondary.main"}
                        position="absolute"
                        zIndex={0}
                        borderRadius={"50%"}
                    />
                </Stack>



                <Stack sx={{
                    flexDirection: 'column', alignItems: 'center', zIndex: 1, position: "relative", overflow: 'visible', width: "100%", gap: 5
                }}>
                    <UnderlinedText
                        text="Meet the Student Affairs Team"
                    />

                    <Grid container spacing={4} justifyContent="center" alignItems={'center'}
                        position={'relative'} overflow={'visible'} zIndex={0}
                        sx={{
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: '50%',
                                left: 0,
                                transform: 'translate(-65%, -50%)  rotate(35deg)',
                                zIndex: -1,
                                border: `15px ${accent} solid`,
                                width: { xs: '40vw' },
                                aspectRatio: "3/5",
                                maxWidth: "350px",
                                borderRadius: 5,
                            }
                        }}>
                        {members.map((profile, index) => (
                            <Grid item key={index} xs={12} sm={6} md={3}>
                                <ProfileCard
                                    imageUrl={profile.image}
                                    name={profile.name}
                                    role={profile.post}
                                    contact={profile.phone}
                                    mail={profile.email}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </Stack>
            <Footer />
        </Stack >
    )
}

export default About