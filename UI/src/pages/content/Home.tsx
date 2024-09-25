import { Box, Stack, Typography } from "@mui/material";
import { Carousel, Footer, NavBar, UnderlinedText } from "../../components";
import { accent, dark, grey, primary } from "../../context/theme";
import speakerImage from '../../assets/icons/speaker.png';
import Blog from "../../components/Blog";
import welcome from '../../assets/images/welcome-to-pau.png'
import chudi from '../../assets/images/chudi.png'
import people from '../../assets/images/4.jpg'
const Home = () => {

  return (
    <Stack minHeight={"100vh"} sx={{
      gap: { xs: 6, md: 10, lg: 14 },
      overflowY: "scroll", overflowX: "hidden",
      backgroundColor: grey,
      backgroundSize: "cover",
    }}>
      <NavBar route="Home" />

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
        <Carousel images={[welcome, chudi, people]} />
      </Box>


      <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: { xs: 10, md: 15 } }}>
        <Stack sx={{ width: "100%", alignItems: "center", marginTop: { md: 4, lg: 0 } }} gap={1}>
          <Typography variant="h4" fontFamily={"Barlow"} color={dark} textAlign={'center'} sx={{ zIndex: 2 }}>
            What's poppin <span style={{ color: primary }}>PAU!!!</span>
          </Typography>
          <Typography textAlign="center" lineHeight={1.8} color="#555">
            <b>Welcome to the heartbeat of campus life at Pan-Atlantic University!</b>
            <br /><br />
            At Student Affairs, we are dedicated to enhancing your campus experience.
            Whether you need academic support, want to join student organizations, or seek guidance,
            we’re here to <b>help you succeed </b>
            and make the most of your time at PAU.
            <br /><br />
            We’re committed to fostering a <b>supportive</b> community, ensuring that every student feels <b>connected</b> and <b>empowered</b>.
            Your journey at PAU is our priority, and we’re here to support you every step of the way.
          </Typography>
        </Stack>

        <Stack sx={{ width: "100%", alignItems: "center", marginTop: { md: 4, lg: 0 } }} gap={5} overflow={'visible'}>
          <Box
            sx={{
              position: "relative",
              width: '100%', overflowX: 'visible',
              zIndex: 0,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                transform: 'translate(50%, -50%)',
                zIndex: -1,
                backgroundColor: 'secondary.main',
                width: "clamp(150px, 50vw, 300px)",
                aspectRatio: 1,
                maxWidth: "350px",
                borderRadius: '50%'
              }
            }}
          >
            <UnderlinedText text="Trending news!!!" image={speakerImage} />
          </Box>
          <Blog />
        </Stack>
      </Stack>

      {/* Footer Section */}
      <Footer />
    </Stack >
  )
}

export default Home;
