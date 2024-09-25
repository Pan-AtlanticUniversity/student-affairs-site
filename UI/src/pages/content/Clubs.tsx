import { Box, Stack, Typography } from "@mui/material"
import { Banner, Footer, NavBar, TextBox } from "../../components"
import club1 from '../../assets/images/Clubs and extracurricular/5.jpg';
import Club from "../../components/club";
import { accent, grey } from "../../context/theme";


const Clubs = () => {

  return (
    <Stack minHeight={"100vh"} sx={{
      gap: { xs: 6, md: 10, lg: 14 },
      overflowY: "scroll", overflowX: "hidden",
      backgroundColor: grey,
      backgroundSize: "cover",
    }}>
      <NavBar route="Clubs" />

      <Box sx={{
        position: "relative",
        width: '100%',
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
        <Banner bannerImage={club1} />
        <TextBox
          title="Be part of the community by joining a club today!"
          description="Now, this is the heart of campus life.
            Ready to enrich your university experience? At Pan-Atlantic University, our diverse student clubs are the pulse of student life.
            If you're passionate about debating, eager to explore new hobbies, or just looking to connect with a community that shares your
            interests, there's a club waiting for you. All you need to do is find the right one, make lasting friendships, and discover all the amazing opportunities that await you.
            Get to know all of them below and find your perfect fit"
        />
      </Box>


      <Stack pl={3} pr={3} sx={{ flexDirection: "column", marginTop: 10 }}>

        <Club />

      </Stack>


      <Footer />
    </Stack>
  )
}

export default Clubs