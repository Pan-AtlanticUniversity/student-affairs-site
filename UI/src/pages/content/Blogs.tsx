import { Box, Stack, Typography } from "@mui/material"
import { Banner, Blog, Footer, NavBar } from "../../components"
import { dark } from "../../context/theme"
import speakerImage from '../../assets/icons/speaker.png';
import GoggleKid from '../../assets/images/goggle-kid.png';

const Blogs = () => {

  return (
    <Stack minHeight={"100vh"}
      sx={{
        gap: { xs: 14, md: 18, lg: 20 },
        overflowY: "scroll",
        overflowX: "hidden"
      }}>
      <NavBar route="Blog" />
      <Banner bannerImage={GoggleKid} pushDownBanner />
      <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: { xs: 10, md: 15 } }}>
        <Stack sx={{ width: "100%", alignItems: "center", marginTop: { md: 4, lg: 0 } }} gap={5} overflow={'visible'}>
          <Typography variant="h5" fontFamily={"leckerli-one"} color={dark} width='100%' textAlign="center" overflow={'visible'}
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
      <Footer />
    </Stack>
  )
}

export default Blogs