import { Box, IconButton, Paper, Stack, Typography } from '@mui/material';
import { Banner, Footer, NavBar } from '../../components';

import { dark, disabled, grey } from '../../context/theme';
import dayjs from 'dayjs';
import { useLocation } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { ClubItem } from '../../components/Club';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ClubDetail = () => {
    const CLUB_MAPPING: { [key: string]: JSX.Element } = {
        twitter: <XIcon fontSize="small" />,
        youtube: <YouTubeIcon fontSize="small" />,
        facebook: <FacebookIcon fontSize="small" />,
    }

    const location = useLocation();
    const { club }: { club: ClubItem } = location.state;

    if (!club) {
        return <Typography variant="h6">No club details available.</Typography>;
    }

    return (
        <Stack minHeight={"100vh"} sx={{ gap: { xs: 5, md: 8 } }}>
            <NavBar route="Clubs" />
            <Stack sx={{ gap: { xs: 1, md: 5 } }}>
                <Banner bannerImage={club.image} />
                <Typography
                    sx={{ fontSize: { xs: '24px', md: '32px' }, zIndex: 1 }}
                    width={'100%'}
                    textAlign={'center'}
                    fontFamily={'leckerli-one'}
                    color={dark}
                >
                    {club.club_name}
                </Typography>
            </Stack>

            <Stack position={'relative'}
                pl={2} pr={2}
                sx={{
                    flexDirection: "column",
                    overflowX: "visible",
                    overflowY: 'hidden',
                    gap: { xs: 5, md: 7 },
                    alignItems: 'center',
                    padding: '0 3 1 3',
                    zIndex: 0,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        transform: 'translate(-50%, -45%)  rotate(35deg)',
                        zIndex: -1,
                        border: '15px #18BC9C solid',
                        width: { xs: '65vw' },
                        aspectRatio: '1',
                        maxWidth: "300px",
                        borderRadius: 5,
                        display: "block"
                    }
                }}

            >

                <Typography variant="body1" color={dark} zIndex={1} sx={{textAlign: {xs: 'center', md: 'left'}}}>
                    {club.about}
                </Typography>

                {
                    club.executives.length > 0 &&
                    <Stack gap={'inherit'}>

                        <Typography variant="h5" fontFamily={"leckerli-one"} color={dark} width={'100%'} textAlign='center'>
                            Executives
                        </Typography>

                        <Stack alignItems='center' justifyContent={"center"} flexWrap={"wrap"} sx={{
                            gap: 7,
                            flexDirection: "row",
                        }}>
                            {
                                club.executives.map(exec => (
                                    <Stack direction={'column'} alignItems={'center'} sx={{ gap: 2, width: 'auto' }}>
                                        <Typography variant="body1" fontFamily={"Poppins"} color={disabled}>
                                            {exec.full_name}
                                        </Typography>
                                        <Box
                                            component="img"
                                            src={exec.image}
                                            sx={{
                                                width: {
                                                    xs: "35%", sm: "150px", lg: '200px',
                                                    aspectRatio: "1/1",
                                                    borderRadius: '50%'
                                                }
                                            }}
                                            alt='Club executive'
                                        />

                                        <Typography variant="h6" color={dark} fontWeight={300}>
                                            {exec.post}
                                        </Typography>
                                    </Stack>
                                ))
                            }
                        </Stack>


                    </Stack>
                }
                <Paper
                    square={false}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: 2,
                        padding: "20px 10px 15px 10px",
                        position: 'relative',
                        borderRadius: "20px",
                        backgroundColor: grey,
                        width: { xs: '100%', md: '50%' },
                    }}
                    elevation={3}
                >
                    <Stack gap={5} direction={'row'} justifyContent={'space-between'} alignItems={'center'} width='100%' >
                        <Typography variant="caption" color="text.secondary">
                            More Information
                        </Typography>

                        <Stack flexWrap={'wrap'} gap={0.5} direction={'row'} alignItems={'inherit'}>
                            <PersonIcon sx={{ color: disabled }} />
                            <Typography variant="caption" color="text.secondary">
                                {club.member_count}
                            </Typography>

                        </Stack>
                    </Stack>

                    <Typography variant="caption" color="text.secondary" sx={{ width: '100%', textAlign: 'left' }}>
                        Meeting Time: {dayjs(club.meeting_time).format("hA dddd")}s
                    </Typography>

                    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                        {
                            club.social_media_handles.map(item => (
                                <IconButton aria-label={item.handle} color="primary">
                                    {CLUB_MAPPING[item.handle]}
                                </IconButton>
                            ))
                        }
                    </Stack>
                </Paper>
            </Stack>
            <Footer />
        </Stack>
    );
};

export default ClubDetail;
