import { Box, Paper, Stack, Typography } from "@mui/material"
import { Carousel, Footer, NavBar } from "../../components"
import { dark, disabled, grey } from "../../context/theme"

import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState } from "react";
import Title from "../../components/Title";

const About = () => {
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
                    <Typography textAlign="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    </Typography>
                </Stack>

                <Stack sx={{
                    flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-evenly', alignItems: 'center', gap: 10,
                    position: "relative", overflow: 'visible'
                }}>
                    <Stack
                        sx={{
                            width: { xs: "100%", md: "60%" },
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
                                backgroundImage: 'url(svgs/Logo_of_Pan-Atlantic_University.svg)',
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
                        <Typography sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        </Typography>
                        <Typography sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        </Typography>
                        <Typography sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        </Typography>
                        <Typography sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        </Typography>
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
                        gap:  7, 
                        flexDirection: "row",
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: {xs: '-50vw'},
                        transform: 'translateY(-50%)  rotate(35deg)',
                        zIndex: -1,
                        border: '15px #18BC9C solid',
                        width: {xs: '65vw'},
                        aspectRatio: "3/5",
                        maxWidth: "350px",
                        borderRadius: 5,
                        display: {xs: "block", md: "none"}
                        

                    }}
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