import { Box, Stack, Typography } from "@mui/material"
import { Banner, Club, Footer, NavBar } from "../../components"
import { dark, grey, primary } from "../../context/theme"
import ClubsImage from '../../assets/images/laughing-guy.jpg';

const Clubs = () => {

  return (
    <Stack minHeight={"100vh"} sx={{ gap: { xs: 14, md: 18, lg: 20 } }}>
      <NavBar route="Clubs" />
      <Banner bannerTitle="School Clubs Here :)" titleBackground={grey} titleColor={"primary.main"} bannerImage={ClubsImage} pushDownBanner />
      <Stack pl={3} pr={3} sx={{
        flexDirection: "column",
        gap: { xs: 10, md: 15 },
        position: 'relative',
        zIndex: 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: { xs: '-15%', sm: '-20%' },
          right: { xs: '-25%', sm: '-45%' },
          transform: 'translateY(10%) rotate(135deg)',
          zIndex: -1,
          border: '15px #26315F solid',
          width: { xs: '65vw' },
          aspectRatio: "3/5",
          maxWidth: "350px",
          borderRadius: 5,
          display: { xs: 'block', md: 'none' }
        }

      }}>

        <Stack sx={{ width: "100%", alignItems: "center", marginTop: { md: 4, lg: 0 } }} gap={5}>
          <Typography variant="h5" fontFamily={"leckerli-one"} color={dark} textAlign={'center'}>
            Be part of the community by joining a club
          </Typography>
          <Typography textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          </Typography>
        </Stack>

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
                transform: { xs: 'translate(25%, -50%)', sm: 'translate(45%, -25%)', md: 'translate(35vw, -25%)' },
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
      <Stack zIndex={1}>
        <Footer />
      </Stack>

    </Stack>
  )
}

export default Clubs