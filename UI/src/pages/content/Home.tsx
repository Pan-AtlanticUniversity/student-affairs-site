import { Box, Stack, Typography } from "@mui/material"
import { Blog, Carousel, Footer, NavBar } from "../../components"
import { dark, primary } from "../../context/theme"
import speakerImage from '../../assets/icons/speaker.png';

const Home = () => {

  return (
    <Stack minHeight={"100vh"} sx={{
      gap: { xs: 14, md: 18, lg: 20 },
      overflowY: "scroll", overflowX: "hidden"
    }}>
      <NavBar route="Home" />
      <Carousel />
      <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: { xs: 10, md: 15 } }}>

        <Stack sx={{ width: "100%", alignItems: "center", marginTop: { md: 4, lg: 0 } }} gap={5}>
          <Typography variant="h5" fontFamily={"leckerli-one"} color={dark}>
            What's poppin <span style={{ color: primary }}>PAU!!!</span>
          </Typography>
          <Typography textAlign="center" lineHeight={1.8}>
            <b>Welcome to the heartbeat of campus life at Pan-Atlantic University!</b>
            <br />
            At Student Affairs, we are dedicated to enhancing your campus experience.
            Whether you need academic support, want to join student organizations, or seek guidance,
            we’re here to <b>help you succeed </b>
            and make the most of your time at PAU.
            We’re committed to fostering a <b>supportive</b> community, ensuring that every student feels <b>connected</b> and <b>empowered</b>.
            Your journey at PAU is our priority, and we’re here to support you every step of the way.
          </Typography>
        </Stack>

        <Stack sx={{ width: "100%", alignItems: "center", marginTop: { md: 4, lg: 0 } }} gap={5} overflow={'visible'}>
          <Typography variant="h5" fontFamily={"leckerli-one"} color={dark} width='100%' textAlign="center" overflow={'visible'}
            sx={{
              position: "relative",
              zIndex: 0,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: { xs: 'translate(25%, -50%)', sm: 'translate(45%, -25%)', md: 'translate(35vw, -25%)', xl: 'translate(40vw, -25%)' },
                zIndex: -1,
                backgroundColor: 'secondary.main',
                width: "clamp(150px, 50vw, 300px)",
                aspectRatio: 1,
                maxWidth: "350px",
                borderRadius: '50%'
              }
            }}
          >
            Trending News <span><Box
              component="img"
              src={speakerImage}
              sx={{
                objectFit: 'contain',
                backgroundSize: "contain",
                width: '50px',
                height: '100%',
                verticalAlign: 'middle'


              }}
            /></span>
          </Typography>
          <Blog />
        </Stack>


      </Stack>
      <Footer />
    </Stack>
  )
}

export default Home