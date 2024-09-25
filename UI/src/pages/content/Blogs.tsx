import { Box, Stack } from "@mui/material"
import { Banner, Blog, Footer, NavBar, UnderlinedText } from "../../components"
import { grey } from "../../context/theme"
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

      <Banner bannerImage={basketBallGuy} bannerTitle={"Trending news!!!"} titleBackground={grey} titleColor={'primary'} pushDownBanner />

      <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: { xs: 10, md: 15 } }}>
        <Stack sx={{ width: "100%", alignItems: "center", marginTop: { md: 4, lg: 0 } }} gap={5} overflow={'visible'}>
          <UnderlinedText text="Stay up to date with the latest scoops" image={speakerImg} />

          <Blog />
        </Stack>


      </Stack>
      <Footer />
    </Stack>
  )
}

export default Blogs