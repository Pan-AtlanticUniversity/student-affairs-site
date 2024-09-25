import { Box, Dialog, DialogContent, DialogTitle, Slide, Stack, Typography } from "@mui/material";
import { Carousel, Footer, NavBar, Services, TextBox, UnderlinedText } from "../../components";
import { accent, dark, grey } from "../../context/theme";
import welcome from '../../assets/images/welcome-to-pau.png'
import chudi from '../../assets/images/chudi.png'
import people from '../../assets/images/4.jpg'

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
      gap: { xs: 6, md: 10, lg: 14 },
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
        <Carousel images={[welcome, chudi, people]} />
        <TextBox
          title="Welcome to Pan-Atlantic University"
          description="Pan-Atlantic University is a private, non-profit institution located in Lekki, Lagos State.
                                Established in 2002, we evolved from the Lagos Business School to offer a diverse range of programs and initiatives.
                                Our campuses in Ibeju-Lekki and Ajah provide a setting for academic and personal growth."
        />
      </Box>

      <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: 'inherit' }}>
        <Typography textAlign="center" lineHeight={1.8} color={dark} sx={{ display: { xs: 'block', md: 'none' }, zIndex: 1 }}>
          Pan-Atlantic University is a private, non-profit institution located in Lekki, Lagos State.
          Established in 2002, we evolved from the Lagos Business School to offer a diverse range of programs and initiatives.
          Our campuses in Ibeju-Lekki and Ajah provide a setting for academic and personal growth."
        </Typography>

        <Stack
          gap={5} overflow={'visible'}
          sx={{
            width: "100%", alignItems: "center", marginTop: 15, position: "relative",
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
