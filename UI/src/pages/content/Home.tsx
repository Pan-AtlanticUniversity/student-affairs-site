import { Box, Dialog, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import { Faq, Footer, NavBar, Services, TextBox, UnderlinedText } from "../../components";
import { dark, grey } from "../../context/theme";
import videoSource from "../../assets/video/SA-video.mp4";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(document.documentElement.clientHeight);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setDialogOpen(true), 2000);
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <Stack minHeight={"100vh"} sx={{
      gap: { xs: 6, md: 4, lg: 2 },
      overflowY: "scroll", overflowX: "hidden",
      backgroundColor: grey,
      backgroundSize: "cover",
    }}>
      <NavBar route="Home" />

      <Box sx={{
        position: "relative",
        width: '100%'
      }}>
        <video style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain', // Ensures the video covers the entire space
          backgroundColor: 'black',
          // border: '1px solid red' // for visibility
        }} autoPlay muted loop playsInline>
          <source src={videoSource} type="video/mp4" />
        </video>
        <TextBox
          title="Welcome to PAU Student Affairs!"
          description="Student Affairs is that part of PAU that helps you make the most of your university experience. From personal growth to academic guidance, campus activities, and community building, we are your one-stop shop for the resources, opportunities, and support you need to succeed andthrive!"
        />
      </Box>


      <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: 'inherit', alignItems: 'center' }}>
        <Typography textAlign="center" lineHeight={1.8} color={dark} sx={{ display: { xs: 'block', md: 'none' }, zIndex: 1 }}>
          Student Affairs is that part of PAU that helps you make the most of your university experience. From personal growth to academic guidance, campus activities, and community building, we are your one-stop shop for the resources, opportunities, and support you need to succeed and thrive!
        </Typography>

        <Stack
          gap={5} overflow={'visible'}
          sx={{
            width: "100%", alignItems: "center", marginTop: { xs: 5, md: 15 }, position: "relative",
            overflowX: 'visible',
            zIndex: 0,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '15%',
              right: 0,
              transform: 'translate(50%, 0)',
              zIndex: -1,
              backgroundColor: 'secondary.main',
              width: "clamp(150px, 50vw, 300px)",
              aspectRatio: 1,
              maxWidth: "350px",
              borderRadius: '50%'
            }
          }} >

          <UnderlinedText text="Our Services" />
          <Services />
        </Stack>

        <Faq />

      </Stack>
      {/* Footer Section */}
      <Footer />

      <Dialog
        fullWidth
        open={dialogOpen}
        onClose={handleClose}
      >
        <DialogTitle textAlign={'center'} sx={{ marginTop: 1 }}>Congratulations on your admission to PAU! 🎉</DialogTitle>
        <DialogContent>
          <Box component="img" src={"https://pau.edu.ng/wp-content/uploads/2024/04/pan-atlantic-university-3-scaled.jpg?id=23379"} sx={{
            objectFit: 'cover',
            backgroundSize: "cover",
            aspectRatio: '7/3',
            verticalAlign: 'middle',
            width: '100%',
            loading: 'lazy',
            borderRadius: 2
          }} />
          <Typography sx={{ marginTop: 3, paddingBottom: 3 }}>
            At Pan-Atlantic University, we are committed to the holistic development of every student.
            Our goal is to shape the PAU student into an ethically grounded and responsible professional.
            <br />
            <br />
            Explore the resources available to you—from medical services and student clubs to mentorship and
            career guidance and let’s start shaping your future, today!
          </Typography>
        </DialogContent>
      </Dialog>

      {dialogOpen && <Confetti width={width} height={height} style={{ zIndex: 0 }} />}

    </Stack >
  )
}

export default Home;
