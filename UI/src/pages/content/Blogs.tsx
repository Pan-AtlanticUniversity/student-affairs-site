import { Box, Stack } from "@mui/material"
import { Banner, Blog, Footer, NavBar, TextBox, UnderlinedText } from "../../components"
import { accent, grey } from "../../context/theme"
import basketBallGuy from '../../assets/images/image 4.png'
import speakerImg from '../../assets/icons/speaker.png'
const Blogs = () => {

  return (
    <Stack minHeight={"100vh"} sx={{
      gap: { xs: 6, md: 10, lg: 14 },
      overflowY: "scroll", overflowX: "hidden",
      backgroundColor: grey,
      backgroundSize: "cover",
    }}>
      <NavBar route="Blog" />

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
        <Banner bannerImage={basketBallGuy} pushDownBanner />
        <TextBox
          title="Trending News!!!"
        />

      </Box>

      <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: 5 }}>

        <UnderlinedText text="Stay up to date with the latest scoops" image={speakerImg} />

        <Blog />
      </Stack>

      <Footer />
    </Stack>
  )
}

export default Blogs