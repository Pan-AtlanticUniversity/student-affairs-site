import { Box, Stack } from "@mui/material";
import { Carousel, Footer, NavBar, Services, TextBox } from "../../components";
// import { dark, primary } from "../../context/theme";
// import speakerImage from '../../assets/icons/speaker.png';

// Import your images here
import welcomeToPAU from '../../assets/images/welcome-to-pau.png';
// import guysChilling from '../../assets/images/guys-chilling.jpg';
import people from '../../assets/images/chudi.png';
// import students from '../../assets/images/2.jpg';
// import graduates from '../../assets/images/4.jpg';
// import staff from '../../assets/images/5.jpg';
// import mentalhealth from '../../assets/images/14.jpg';
import hugs from '../../assets/images/Clubs and extracurricular/4.jpg';

const Home = () => {
  const slides = [welcomeToPAU, hugs, people];
  return (
    <Stack minHeight={"100vh"} sx={{
      gap: { xs: 1, md: 1 },
      overflowY: "scroll", overflowX: "hidden",
      backgroundColor: "#f4f4f4",
      // backgroundImage: `url(${bgImage})`, // Background pattern for aesthetic
      backgroundSize: "cover",
    }}>
      <NavBar route="Home" />

      <Box sx={{ paddingTop: '80px' }}>
        <Carousel images={slides} />
        <TextBox
          title="Welcome to Pan-Atlantic University"
          description="Pan-Atlantic University is a private, non-profit institution located in Lekki, Lagos State.
                                Established in 2002, we evolved from the Lagos Business School to offer a diverse range of programs and initiatives.
                                Our campuses in Ibeju-Lekki and Ajah provide a setting for academic and personal growth."
        />
      </Box>

      <Services />

      {/* Footer Section */}
      <Footer />
    </Stack>
  )
}

export default Home;
