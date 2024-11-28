// export default Mentorship
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Banner, Footer, InfoBox, MentorshipInfo, NavBar, ProfileCard, TextBox, UnderlinedText } from "../../components";
import { accent, grey } from "../../context/theme";
import image1 from '../../assets/images/Guidance counselling & mentoring/3.jpg';

import image3 from '../../assets/images/5.jpg';
import { useEffect, useState } from "react";
import axios from "axios";


// Responsive styling applied
const Mentorship = () => {

    interface TitleItem {
        _id: string;
        meeting_times: string;
        name: string;
        email: string;
        image: string;
        emailAddress: string;
    }

    interface CounsellorItem {
        _id: string;
        meeting_times: string;
        name: string;
        email: string;
        image: string;
        emailAddress: string;
    }

    const [mentors, setMentors] = useState<TitleItem[]>([]);

    useEffect(() => {
        const getMentors = async () => {
            try {
                const res = await axios.get<TitleItem[]>(`${import.meta.env.VITE_BACKEND_HOST}/api/v1/mentor`);
                setMentors(res.data);
            } catch (error) {
                console.log("Error fetching member details:", error);
            }
        };
        getMentors();
    }, []);


    // interface TitleItem {
    //     _id: string;
    //     meeting_times: string;
    //     name: string;
    //     email: string;
    //     image: string
    // }

    const [counsellors, setCounsellors] = useState<CounsellorItem[]>([]);

    useEffect(() => {
        const getCounsellors = async () => {
            try {
                const res = await axios.get<CounsellorItem[]>(`${import.meta.env.VITE_BACKEND_HOST}/api/v1/counsellor`);
                setCounsellors(res.data);
            } catch (error) {
                console.log("Error fetching counsellor details:", error);
            }
        };
        getCounsellors();
    }, []);



    return (
        <Stack minHeight="100vh" sx={{
            gap: { xs: 6, md: 7, lg: 9 }, overflowY: "scroll", backgroundColor: grey,

        }}>
            <NavBar route="Guidance" />

            {/* Banner Section */}
            <Box sx={{
                position: "relative", width: "100%", zIndex: 0, '&::before': {
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
                <Banner bannerImage={image3} bannerPosition="top" />
                <TextBox title=" Guidance and Counseling" />
            </Box>

            {/* Info Section */}
            <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: 'inherit', zIndex: 1 }} alignItems="center">
                {/*  */}
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                            Guidance and Counseling Unit
                        </Typography>
                        <Box sx={{ lineHeight: 1.6 }}>

                            <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1.25rem' } }}>
                                At PAU, the Guidance and Counseling Unit is dedicated to providing comprehensive support for the personal, emotional, and psychological well-being of our students. Whether you're dealing with academic stress, personal struggles, or just need someone to listen, we're here to support you every step of the way. Our goal is to help you overcome challenges, achieve your goals, and make the most of your university experience.
                            </Typography>

                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component="img" src={image1} alt="Mentorship" sx={{ width: "100%", borderRadius: 2 }} />
                    </Grid>
                </Grid>
                {/*  */}

                <MentorshipInfo />

                {/* <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box component="img" src={infoBoxImages[1]} alt="Mentors" sx={{ width: "100%", borderRadius: 2 }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InfoBox
                            title="What is the mentorship program about?"
                            content="At Pan-Atlantic University, we are dedicated to fostering academic excellence, personal growth, and innovation. Discover how we are shaping the future through education, research, and leadership, and learn more about the values that guide our institution."
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <InfoBox
                            title="What is the mentorship program about?"
                            content="At Pan-Atlantic University, we are dedicated to fostering academic excellence, personal growth, and innovation. Discover how we are shaping the future through education, research, and leadership, and learn more about the values that guide our institution."
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component="img" src={infoBoxImages[2]} alt="Involvement" sx={{ width: "100%", borderRadius: 2 }} />
                    </Grid>
                </Grid> */}

                {/* Mentor Profiles Section */}
                <UnderlinedText text="Book an appointment!" />
                <Grid container spacing={4} justifyContent="center" position={'relative'} zIndex={0} sx={{
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
                    {mentors.map((profile, index) => (
                        <Grid item key={index} xs={12} sm={6} md={3}>
                            <ProfileCard
                                imageUrl={profile.image}
                                name={profile.name}
                                contact={profile.meeting_times}
                                mail={profile.email}
                            />
                        </Grid>
                    ))}
                </Grid>


                <InfoBox title={"Peer Counselors and Resident Assistants"} content="To further enhance student support, we have Peer Counselors and Resident Assistants, who are specially trained to offer guidance and support on a peer-to-peer level. These students provide:"
                    listItems={[
                        "- Emotional support",
                        "- Mental health awareness",
                        "- Conflict resolution",
                        "- Workshops on stress management and time management",
                        "- Academic guidance"
                    ]}
                    footerText="Feel free to approach any of our Peer Counselors or Resident Assistants for support or guidance."
                />


                <UnderlinedText text="Meet Some Of Our Peer Counselors" />
                <Grid container spacing={4} justifyContent="center" position={'relative'} zIndex={0} sx={{
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
                    {counsellors.map((profile, index) => (
                        <Grid item key={index} xs={12} sm={6} md={3}>
                            <ProfileCard
                                imageUrl={profile.image}
                                name={profile.name}
                                // contact={profile.meeting_times}
                                mail={profile.emailAddress}
                            />
                        </Grid>
                    ))}
                </Grid>



            </Stack>

            <Footer />
        </Stack>
    );
};

export default Mentorship;
