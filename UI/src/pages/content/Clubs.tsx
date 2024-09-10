import { Stack, Typography } from "@mui/material"
import { Banner, Club, Footer, NavBar } from "../../components"
import { dark, grey } from "../../context/theme"
import ClubsImage from '../../assets/images/laughing-guy.jpg';

const Clubs = () => {

  return (
    <Stack minHeight={"100vh"}
      sx={{
        gap: { xs: 14, md: 18, lg: 20 },
        overflowY: "scroll",
        overflowX: "hidden"
      }}>
      <NavBar route="Clubs" />
      <Banner bannerTitle="School Clubs Here :)" titleBackground={grey} titleColor={"primary.main"} bannerImage={ClubsImage} pushDownBanner />
      <Stack pl={3} pr={3} sx={{
        flexDirection: "column",
        gap: { xs: 10, md: 15 },
      }}>

        <Stack sx={{ width: "100%", alignItems: "center", marginTop: { md: 4, lg: 0 } }} gap={5}>
          <Typography variant="h4" fontFamily={"Barlow"} color={dark} textAlign={'center'}>
            Be part of the community by joining a club
          </Typography>
          <Typography textAlign="center" lineHeight={1.8}>
            <b>Now, this is the heart of campus life.</b>
            <br />
            Ready to enrich your university experience? At Pan-Atlantic University, our diverse student clubs are the pulse of student life.
            <br />
            If you're passionate about debating, eager to explore new hobbies, or just looking to connect with a community that shares your
            interests, there's a club waiting for you.
            <br />
            <br />
            All you need to do is find the right one, make lasting friendships, and discover all the amazing opportunities that await you.
            <br />
            Get to know all of them below and find your perfect fit
          </Typography>
        </Stack>

        <Stack sx={{ width: "100%", alignItems: "center", marginTop: { md: 4, lg: 0 }, overflow: 'visible' }} gap={5}>
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
            Get to know all of 'em
          </Typography>
          <Club />
        </Stack>


      </Stack>
      <Stack zIndex={0}
        sx={{
          position: 'relative',
          overflowX: 'visible',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            right: 0,
            transform: { xs: 'translate(70%, -50%)  rotate(135deg)', lg: 'translate(60%, -65%)  rotate(135deg)', },
            zIndex: -1,
            border: '15px #26315F solid',
            width: { xs: '65vw' },
            aspectRatio: "3/5",
            maxWidth: "350px",
            borderRadius: 5,
          }
        }}>
        <Footer />
      </Stack>

    </Stack>
  )
}

export default Clubs