import { Box, Dialog, DialogContent, DialogTitle, Slide, Stack, Typography } from "@mui/material";
import { Carousel, Faq, Footer, NavBar, Services, TextBox, UnderlinedText } from "../../components";
import { accent, dark, grey } from "../../context/theme";
import videoSource from "../../assets/video/SA-video.mp4";
import Confetti from "react-confetti";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useEffect, useState } from "react";


const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(document.documentElement.clientHeight);
  const [open, setOpen] = useState(false);

  useEffect(() => {

    setTimeout(() => setOpen(true), 2000);
    // Update the dimensions when the window resizes
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
    setOpen(false);
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
        <video
          //had to reencode the video
          src={videoSource} // Replace with your video source path
          autoPlay // the video plays automatically
          muted // no sound
          loop // plays continuosly
          // controls
          // preload="auto"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Ensures the video covers the entire space
            backgroundColor: 'black',
            // border: '1px solid red' // for visibility
          }}
        />
        <TextBox
          title="Welcome to PAU Student Affairs!"
          description="Student Affairs is that part of PAU that helps you make the most of your university experience. From personal growth to academic guidance, campus activities, and community building, we are your one-stop shop for the resources, opportunities, and support you need to succeed and thrive!"
        />
      </Box>


      <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: 'inherit' }}>
        <Typography textAlign="center" lineHeight={1.8} color={dark} sx={{ display: { xs: 'block', md: 'none' }, zIndex: 1 }}>
          Student Affairs is that part of PAU that helps you make the most of your university experience. From personal growth to academic guidance, campus activities, and community building, we are your one-stop shop for the resources, opportunities, and support you need to succeed and thrive!
        </Typography>

        <Stack
          gap={5} overflow={'visible'}
          sx={{
            width: "100%", alignItems: "center", marginTop:{xs:5, md:15}, position: "relative",
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
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle textAlign={'center'} fontFamily={'Barlow'} sx={{ marginTop: 1 }}>Congratulations on your admission to PAU! 🎉</DialogTitle>
        <DialogContent>
          <Box
            component="img"
            src={"https://pau.edu.ng/wp-content/uploads/2024/04/pan-atlantic-university-3-scaled.jpg?id=23379"}
            sx={{
              objectFit: 'cover',
              backgroundSize: "cover",
              aspectRatio: '7/3',
              verticalAlign: 'middle',
              width: '100%',
              loading: 'lazy',
              borderRadius: 2
            }}
          />
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
      {open && <Confetti width={width} height={height} style={{ zIndex: 10 }} />}
    </Stack >
  )
}

export default Home;
