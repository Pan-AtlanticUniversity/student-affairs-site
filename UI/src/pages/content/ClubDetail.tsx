import { Box, createSvgIcon, Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import { Banner, Footer, NavBar } from '../../components';

import { dark, disabled, grey } from '../../context/theme';
import dayjs from 'dayjs';
import { useLocation } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { ClubItem } from '../../components/Club';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const ClubDetail = () => {

    const TikTokIcon = createSvgIcon(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
        >
            <path d="M22.465,9.866c-2.139,0-4.122-0.684-5.74-1.846v8.385c0,4.188-3.407,7.594-7.594,7.594c-1.618,0-3.119-0.51-4.352-1.376  c-1.958-1.375-3.242-3.649-3.242-6.218c0-4.188,3.407-7.595,7.595-7.595c0.348,0,0.688,0.029,1.023,0.074v0.977v3.235  c-0.324-0.101-0.666-0.16-1.023-0.16c-1.912,0-3.468,1.556-3.468,3.469c0,1.332,0.756,2.489,1.86,3.07  c0.481,0.253,1.028,0.398,1.609,0.398c1.868,0,3.392-1.486,3.462-3.338L12.598,0h4.126c0,0.358,0.035,0.707,0.097,1.047  c0.291,1.572,1.224,2.921,2.517,3.764c0.9,0.587,1.974,0.93,3.126,0.93V9.866z" />
        </svg>,
        'TikTok',
    );
    const CLUB_MAPPING: { [key: string]: JSX.Element } = {
        instagram: <InstagramIcon fontSize="small" />,
        twitter: <XIcon fontSize="small" />,
        youtube: <YouTubeIcon fontSize="small" />,
        facebook: <FacebookIcon fontSize="small" />,
        linkedin: <LinkedInIcon fontSize="small" />,
        tiktok: <TikTokIcon fontSize="small" />,
        github: <GitHubIcon fontSize="small" />,
        mail: <EmailIcon fontSize="small" />
    }

    const zoomInImages = ["Community Service Project (CSP)", "Art Club"]

    const location = useLocation();
    const { club }: { club: ClubItem } = location.state;


    if (!club) {
        return <Typography variant="h6">No club details available.</Typography>;
    }

    return (
        <Stack minHeight={"100vh"} sx={{ gap: { xs: 5, md: 8 } }}>
            <NavBar route="Clubs" />
            <Stack sx={{ gap: { xs: 1, md: 5 } }}>
                <Banner bannerImage={club.image.value} contain={!zoomInImages.includes(club.name)} background={club.image.background} />
                <Typography
                    sx={{ fontSize: { xs: '24px', md: '32px' }, zIndex: 1 }}
                    width={'100%'}
                    textAlign={'center'}
                    fontFamily={'Barlow'}
                    color={dark}
                >
                    {club.name}
                </Typography>
            </Stack>

            <Stack position={'relative'}
                pl={2} pr={2}
                sx={{
                    flexDirection: "column",
                    overflowX: "visible",
                    overflowY: 'visible',
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

                <Typography variant="body1" color={dark} zIndex={1} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    {club.about}
                </Typography>

                {
                    club.executives.length > 0 &&
                    <Stack gap={'inherit'} width={'100%'}>

                        <Typography variant="h4" fontFamily={"Barlow"} color={dark} width={'100%'} textAlign='center'>
                            Executives
                        </Typography>

                        <Grid container width={'100%'} rowGap={5} justifyContent={'space-evenly'}>
                            {
                                club.executives.map(exec => (
                                    <Grid
                                        item
                                        xs={12} sm={4} md={2.4}
                                        key={exec._id}
                                        display="flex" // Ensure the Grid item uses flexbox for centering
                                        justifyContent="center" // Centers horizontally
                                    >
                                        <Stack width={'100%'} alignItems={'center'} justifyContent={'center'}>
                                            <Typography
                                                variant="body1"
                                                color={disabled}
                                                textAlign={'center'}
                                                sx={{
                                                    wordWrap: 'break-word',  // Enable word wrapping
                                                    width: '100%',
                                                }}>
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

                                            <Typography variant="h6" color={dark} fontWeight={300} textAlign={'center'}>
                                                {exec.post}
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                ))
                            }
                        </Grid>

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
                                {club.member_count ?? "nil"}
                            </Typography>

                        </Stack>

                    </Stack>

                    <Typography variant="caption" color="text.secondary" sx={{ width: '100%', textAlign: 'left' }}>
                        Meeting Time: {
                            club.meeting_time
                                ? club.meeting_time?.startsWith('custom')
                                    ? club.meeting_time.split(':')[1]
                                    : `${dayjs(club.meeting_time).format("hA dddd")}s`
                                : "nil"
                        }
                    </Typography>

                    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                        {
                            club.handles?.map(item => (
                                <IconButton
                                    aria-label={item.handle}
                                    color="primary"
                                    href={item.handle === 'mail' ? `mailto:${item.url}` : item.url} // Use mailto for the email handle
                                    target={item.handle !== 'mail' ? "_blank" : undefined} // Only open in a new tab for non-mail links
                                    rel={item.handle !== 'mail' ? "noopener noreferrer" : undefined} // Set rel for external links only

                                    key={item.handle}
                                >
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
