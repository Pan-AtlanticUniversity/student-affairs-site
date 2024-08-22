import { Box, Stack, Typography } from "@mui/material"
import { Blog, Carousel, Footer, NavBar } from "../../components"
import { dark, primary } from "../../context/theme"
import speakerImage from '../../assets/icons/speaker.png';

const Home = () => {

  return (
    <Stack minHeight={"100vh"} sx={{ gap: { xs: 14, md: 18, lg: 20 } }}>
      <NavBar route="Home" />
      <Carousel />
      <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: { xs: 10, md: 15 } }}>

        <Stack sx={{ width: "100%", alignItems: "center", marginTop: { md: 4, lg: 0 } }} gap={5}>
          <Typography variant="h5" fontFamily={"leckerli-one"} color={dark}>
            What's poppin <span style={{ color: primary }}>PAU!!!</span>
          </Typography>
          <Typography textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
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
                transform: 'translate(25%, -50%)',
                zIndex: -1,
                backgroundColor: 'secondary.main',
                width: "clamp(150px, 50vw, 300px)",
                aspectRatio: 1,
                maxWidth: "350px",
                borderRadius: '50%',
                display: { xs: "block", sm: "none" }


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