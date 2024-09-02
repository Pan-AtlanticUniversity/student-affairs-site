import { Box, IconButton, Paper, Slider, Stack, Typography } from "@mui/material"
import { Carousel, Footer, NavBar } from "../../components"
import { dark, grey } from "../../context/theme"

import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useEffect, useRef, useState } from "react";
import Title from "../../components/Title";

import PAULogo from '../../assets/svgs/Logo_of_Pan-Atlantic_University.svg';
import anthemAudio from '../../assets/audio/test_song.mp3';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const About = () => {

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
        <Stack minHeight={"100vh"} sx={{ gap: { xs: 14, md: 18, lg: 20 } }}>
            <NavBar route="About" />
            <Carousel />

            <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: { xs: 10, md: 15 } }}>

                <Stack sx={{ width: "100%", alignItems: "center", marginTop: { md: 4, lg: 0 } }} gap={5}>
                    <Typography variant="h5" fontFamily={"leckerli-one"} color={dark}>
                        Get to know us
                    </Typography>
                    <Typography textAlign="center" lineHeight={1.8}>
                        Pan-Atlantic University is a private, non-profit institution located in Lekki, Lagos State.
                        <br />
                        Established in 2002, we evolved from the Lagos Business School to offer a diverse range of programs and initiatives.
                        Our campuses in Ibeju-Lekki and Ajah provide a setting for academic and personal growth.
                    </Typography>
                </Stack>

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
                        <Typography variant="h5" fontFamily={"leckerli-one"} color={dark}>
                            School Anthem
                        </Typography>

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
                        <Typography variant="h6" fontFamily={"leckerli-one"} color={dark}>
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
                    flexDirection: 'column', alignItems: 'center', gap: 5, zIndex: 1, position: "relative", overflow: 'visible', width: "100%", marginTop: { xs: 10, md: 0 }
                }}>
                    <Typography variant="h5" fontFamily={"leckerli-one"} color={dark}>
                        Meet the Student Council
                    </Typography>
                    <Stack alignItems={'center'} justifyContent={"center"} flexWrap={"wrap"} sx={{
                        gap: 7,
                        flexDirection: "row",
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '50%',
                            left: { xs: '-50vw' },
                            transform: 'translateY(-50%)  rotate(35deg)',
                            zIndex: -1,
                            border: '15px #18BC9C solid',
                            width: { xs: '65vw' },
                            aspectRatio: "3/5",
                            maxWidth: "350px",
                            borderRadius: 5,
                            display: { xs: "block", md: "none" }


                        }
                    }
                    }>
                        {Array(7).fill(< Title position={"President"} name={"Miracle Nnadiukwu"} email={'miracle@mail.com'} phone={'+234 812 456 2930'} />)}
                    </Stack>

                </Stack>
            </Stack>
            <Footer />
        </Stack>
    )
}

export default About