import { Stack, Typography } from "@mui/material"
import { Banner, Footer, NavBar } from "../../components"
import club1 from '../../assets/images/Clubs and extracurricular/5.jpg';
import Club from "../../components/club";
import { grey } from "../../context/theme";


const Clubs = () => {

  return (
    <Stack minHeight={"100vh"} sx={{
      gap: { xs: 6, md: 10, lg: 14 },
      overflowY: "scroll", overflowX: "hidden",
      backgroundColor: grey,
      backgroundSize: "cover",
    }}>
      <NavBar route="Clubs" />
      <Banner bannerImage={club1} bannerTitle={"School Clubs Here :)"} titleBackground={grey} titleColor={'primary'} />

      <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: { xs: 10, md: 15 } }}>
        <Typography textAlign="center" lineHeight={1.8} sx={{ zIndex: 1 }}>
          Now, this is the heart of campus life.
          Ready to enrich your university experience? At Pan-Atlantic University, our diverse student clubs are the pulse of student life.
          <br />
          <br />
          If you're passionate about debating, eager to explore new hobbies, or just looking to connect with a community that shares your
          interests, there's a club waiting for you. All you need to do is find the right one, make lasting friendships, and discover all the amazing opportunities that await you.
          Get to know all of them below and find your perfect fit
        </Typography>
        <Club />

      </Stack>


      <Footer />
    </Stack>
  )
}

export default Clubs