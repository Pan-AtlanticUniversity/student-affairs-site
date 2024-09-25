import { Box, createSvgIcon, Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import { Banner, Footer, NavBar, ProfileCard, TextBox } from '../../components';
import { dark, disabled, grey } from '../../context/theme';
import dayjs from 'dayjs';
import { useLocation } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { ClubItem } from '../../components/club';

const ClubDetail = () => {
    const TikTokIcon = createSvgIcon(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path d="M22.465,9.866c-2.139,0-4.122-0.684-5.74-1.846v8.385c0,4.188-3.407,7.594-7.594,7.594
            c-1.618,0-3.119-0.51-4.352-1.376c-1.958-1.375-3.242-3.649-3.242-6.218c0-4.188,3.407-7.595,7.595-7.595
            c0.348,0,0.688,0.029,1.023,0.074v0.977v3.235c-0.324-0.101-0.666-0.16-1.023-0.16c-1.912,0-3.468,1.556-3.468,3.469
            c0,1.332,0.756,2.489,1.86,3.07c0.481,0.253,1.028,0.398,1.609,0.398c1.868,0,3.392-1.486,3.462-3.338L12.598,0h4.126
            c0,0.358,0.035,0.707,0.097,1.047c0.291,1.572,1.224,2.921,2.517,3.764c0.9,0.587,1.974,0.93,3.126,0.93V9.866z" />
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

    const paragraphs = club.about.split('\n');

    return (
        <Stack minHeight={"100vh"} sx={{
            gap: { xs: 6, md: 10, lg: 14 },
            overflowY: "scroll", overflowX: "hidden",
            backgroundColor: grey,
            backgroundSize: "cover",
        }}>
            <NavBar route="Clubs" />

            <Box sx={{ position: 'relative' }}>
                <Banner
                    bannerImage={club.image.value}
                    contain={!zoomInImages.includes(club.name)}
                    background={club.image.background}
                />
                <TextBox
                    title={club.name}
                />
            </Box>

            <Stack position={'relative'}
                pl={3} pr={3}
                sx={{
                    flexDirection: "column",
                    overflowX: "visible",
                    overflowY: 'visible',
                    gap: { xs: 5, md: 7 },
                    alignItems: 'center',
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
                <div>
                    {paragraphs.map((paragraph, index) => (

                        <Typography
                            variant="body1"
                            color={dark}
                            zIndex={1}
                            textAlign={'left'}
                            key={index}
                            paragraph
                        >{paragraph}</Typography>

                    ))}
                </div>

                {
                    club.executives.length > 0 &&
                    <Stack gap={'inherit'} width={'100%'}>

                        <Typography variant="h4" fontFamily={"Barlow"} color={dark} width={'100%'} textAlign='center'>
                            Executives
                        </Typography>
                        <Grid
                            container
                            spacing={4}
                            alignItems={'center'}
                            justifyContent="center"
                        >
                            {club.executives.map((exec, index: number) => (
                                <Grid item key={index} xs={12} sm={6} md={3}// Ensure the Grid item uses flexbox for centering
                                    justifyContent="center" // Centers horizontally
                                    alignItems={'center'}
                                    display={'flex'}
                                    flexDirection={'column'}
                                >
                                    <ProfileCard
                                        imageUrl={exec.image}
                                        name={exec.full_name}
                                        role={exec.post}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                }

                {/* More Information Section */}
                <Paper
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "15px 10px",
                        borderRadius: "15px",
                        backgroundColor: "#FFFFFF",
                        width: { xs: '100%', md: '90%' },
                        gap: 1.5,
                    }}
                    elevation={3}
                >
                    <Stack direction="row" justifyContent="space-between" width="100%">
                        <Typography variant="caption" color="text.secondary">
                            More Information
                        </Typography>

                        <Stack direction="row" alignItems="center" gap={0.5}>
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
