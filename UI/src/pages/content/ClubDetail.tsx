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
        github: <GitHubIcon fontSize="small" />
    };

    const location = useLocation();
    const { club }: { club: ClubItem } = location.state;

    if (!club) {
        return <Typography variant="h6">No club details available.</Typography>;
    }

    return (
        <Stack minHeight={"100vh"} sx={{ gap: { xs: 3, md: 6 }, padding: 2 }}>
            <NavBar route="Clubs" />

            {/* Banner and Club Name */}
            <Stack sx={{ gap: { xs: 1.5, md: 3 } }}>
                <Banner
                    bannerImage={club.image.value}
                    contain={club.club_name !== "Community Service Project (CSP)"}
                    background={club.image.background}
                />
                <Typography
                    sx={{ fontSize: { xs: '22px', md: '28px' }, fontWeight: 600, zIndex: 1 }}
                    textAlign={'center'}
                    fontFamily={'Barlow'}
                    color={dark}
                >
                    {club.club_name}
                </Typography>
            </Stack>

            {/* Club About Section */}
            <Stack position={'relative'} sx={{ padding: 2, gap: { xs: 3, md: 5 }, alignItems: 'center' }}>
                <Typography
                    variant="body1"
                    color={dark}
                    zIndex={1}
                    sx={{
                        textAlign: { xs: 'center', md: 'left' },
                        lineHeight: 1.6,
                        maxWidth: '900px'
                    }}
                >
                    {/* Proper paragraphing for club.about */}
                    {club.about.split('. ').reduce<string[][]>((acc, sentence, index) => {
                        if (index % 3 === 0) acc.push([]);
                        acc[acc.length - 1].push(sentence);
                        return acc;
                    }, []).map((paragraph, index) => (
                        <p key={index} style={{ marginBottom: '1.2em' }}>
                            {paragraph.join('. ') + '.'}
                        </p>
                    ))}
                </Typography>

                {/* Executives Section */}
                {club.executives.length > 0 && (
                    <Stack gap={'inherit'} sx={{ width: '100%', alignItems: 'center' }}>
                        <Typography variant="h4" fontFamily={"Barlow"} color={dark} textAlign="center" fontWeight={500}>
                            Executives
                        </Typography>

                        <Grid container spacing={3} justifyContent="center">
                            {club.executives.map(exec => (
                                <Grid item xs={12} sm={6} md={4} key={exec._id} display="flex" justifyContent="center">
                                    <Stack alignItems={'center'}>
                                        <Typography variant="body1" color={disabled} textAlign={'center'}>
                                            {exec.full_name}
                                        </Typography>
                                        <Box
                                            component="img"
                                            src={exec.image}
                                            sx={{
                                                width: { xs: "30%", sm: "120px", lg: '180px' },
                                                aspectRatio: "1/1",
                                                borderRadius: '50%',
                                                objectFit: 'cover'
                                            }}
                                            alt="Club executive"
                                        />
                                        <Typography variant="h6" color={dark} fontWeight={300} textAlign="center">
                                            {exec.post}
                                        </Typography>
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                )}

                {/* More Information Section */}
                <Paper
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "15px 10px",
                        borderRadius: "15px",
                        backgroundColor: grey,
                        width: { xs: '100%', md: '55%' },
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

                    <Stack direction="row" justifyContent="center" gap={1}>
                        {club.handles?.map(item => (
                            <IconButton
                                aria-label={item.handle}
                                color="primary"
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={item.handle}
                            >
                                {CLUB_MAPPING[item.handle]}
                            </IconButton>
                        ))}
                    </Stack>
                </Paper>
            </Stack>

            <Footer />
        </Stack>
    );
};

export default ClubDetail;
