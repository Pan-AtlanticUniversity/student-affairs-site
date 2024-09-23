import { Box, Card, Dialog, DialogContent, DialogTitle, Slide, Stack, Typography } from "@mui/material";
import { Blog, Carousel, Footer, NavBar } from "../../components";
import { dark, primary } from "../../context/theme";
import speakerImage from '../../assets/icons/speaker.png';
import { useEffect, useState, forwardRef } from "react";
import Confetti from "react-confetti";
import { TransitionProps } from "@mui/material/transitions";
// import bgImage from '../../assets/images/bg-pattern.png'; // Example background image

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

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
      gap: { xs: 14, md: 18, lg: 20 },
      overflowY: "scroll", overflowX: "hidden",
      backgroundColor: "#f4f4f4",
      // backgroundImage: `url(${bgImage})`, // Background pattern for aesthetic
      backgroundSize: "cover",
    }}>
      <NavBar route="Home" />
      <Carousel />

      <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: { xs: 10, md: 15 } }}>
        <Stack sx={{ width: "100%", alignItems: "center", marginTop: { md: 4, lg: 0 } }} gap={1}>
          <Typography variant="h4" fontFamily={"Barlow"} color={dark}>
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
          <Typography variant="h4" fontFamily={"Barlow"} color={dark} width='100%' textAlign="center" overflow={'visible'}
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
    </Stack>
  )
}

export default Home;
