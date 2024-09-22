import { Box, Stack } from "@mui/material"
import { Carousel, Club, Footer, NavBar, TextBox } from "../../components"
// import { dark, grey } from "../../context/theme"
// import ClubsImage from '../../assets/images/laughing-guy.jpg';
// Import your images here
import club1 from '../../assets/images/Clubs and extracurricular/5.jpg';
// import guysChilling from '../../assets/images/guys-chilling.jpg';
import club2 from '../../assets/images/Clubs and extracurricular/2.jpg';
// import students from '../../assets/images/2.jpg';
// import graduates from '../../assets/images/4.jpg';
// import staff from '../../assets/images/5.jpg';
// import mentalhealth from '../../assets/images/14.jpg';
import club3 from '../../assets/images/19.jpg';


const Clubs = () => {

  const slides = [club1, club2, club3];
  return (
    <Stack minHeight={"100vh"} sx={{
      gap: { xs: 1, md: 1 },
      overflowY: "scroll", overflowX: "hidden",
      backgroundColor: "#f4f4f4",
      // backgroundImage: `url(${bgImage})`, // Background pattern for aesthetic
      backgroundSize: "cover",
    }}>
      <NavBar route="Clubs" />

      <Box sx={{ paddingTop: '80px' }}>
        <Carousel images={slides} />
        <TextBox
          title="Be part of the community by joining a club today!"
          description="Now, this is the heart of campus life.
            Ready to enrich your university experience? At Pan-Atlantic University, our diverse student clubs are the pulse of student life.
            If you're passionate about debating, eager to explore new hobbies, or just looking to connect with a community that shares your
            interests, there's a club waiting for you. All you need to do is find the right one, make lasting friendships, and discover all the amazing opportunities that await you.
            Get to know all of them below and find your perfect fit"
        />
      </Box>
      <Club />
      <Footer />
    </Stack>
  )
}

export default Clubs