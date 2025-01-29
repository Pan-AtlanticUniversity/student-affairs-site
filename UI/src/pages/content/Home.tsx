import { Avatar, Box, Card, CardContent, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Faq, Footer, NavBar, Services, TextBox, UnderlinedText } from "../../components";
import { dark, grey } from "../../context/theme";
import videoSource from "../../assets/video/SA-video.mp4";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { sam, miracle, chima, blessing } from "../../assets/images/dev-team";

const team = [
  {
    name: "Chima Okwuokei",
    role: "Developer",
    image: chima,
    linkedin: "https://www.linkedin.com/in/chima-okwuokei-59783425b/",
    github: "https://github.com/chimaOkwuokei",
    instagram: "https://www.instagram.com/chima.o._/profilecard"
  },
  {
    name: "Miracle Nnadiukwu",
    role: "Developer",
    image: miracle,
    linkedin: "http://linkedin.com/in/miracle-nnadiukwu",
    github: "https://github.com/dominioncruz",
    instagram: ""
  },
  {
    name: "Samuel Oyefusi",
    role: "Project Manager",
    image: sam,
    linkedin: "https://www.linkedin.com/in/samuel-oyefusi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/Oyefusi-Samuel",
    instagram: "https://www.instagram.com/koredeoyefusi/profilecard"
  },
  {
    name: "Blessing Bolaji",
    role: "Content Creator",
    image: blessing,
    linkedin: "http://linkedin.com/in/blessing-bolaji-7a86161b2",
    github: "",
    instagram: ""
  },
];

const Home = () => {
  //const [width, setWidth] = useState(window.innerWidth);
  //const [height, setHeight] = useState(document.documentElement.clientHeight);
  //const [dialogOpen, setDialogOpen] = useState(false);
  /*
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
  */
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

        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: { xs: '1.5rem', md: '1.95rem' },
            position: 'relative',
            display: 'inline-block',
            textAlign: 'center',
            fontWeight: 'semi-bold',
            mt: 5,
            '::after': {
              content: '""',
              display: 'block',
              width: '50%',
              height: '3px',
              backgroundColor: 'primary.main',
              margin: '5px auto 0',
              borderRadius: '2px',
            },
          }}
        >
          Meet the Developers
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={3}
                sx={{
                  textAlign: "center",
                  padding: 2,
                  borderRadius: 2,
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: 200, height: 200, margin: "0 auto", marginBottom: 2 }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {member.role}
                  </Typography>
                  <Stack direction="row" justifyContent="center" spacing={1}>
                    <IconButton href={member.linkedin} target="_blank">
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton href={member?.github} target="_blank">
                      <GitHubIcon />
                    </IconButton>
                    <IconButton href={member?.instagram} target="_blank">
                      <InstagramIcon />
                    </IconButton>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>


      </Stack>
      {/* Footer Section */}
      <Footer />
      {/*
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
*/}
    </Stack >
  )
}

export default Home;
