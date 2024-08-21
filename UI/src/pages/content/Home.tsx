import { Stack, Typography } from "@mui/material"
import { Blog, Carousel, Footer, NavBar } from "../../components"
import { dark, primary } from "../../context/theme"

const Home = () => {
  return (
    <Stack minHeight={"100vh"} sx={{ gap: { xs: 14, md: 18, lg: 20 } }}>
      <NavBar route="Home" />
      <Carousel />
      <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: { xs: 10, md: 15 } }}>

        <Stack sx={{ width: "100%", alignItems: "center", marginTop: { md: 4, lg: 0 } }} gap={5}>
          <Typography variant="h5" fontFamily={"leckerli-one"} color={dark}>
            Whats poppin <span style={{ color: primary }}>PAU!!!</span>
          </Typography>
          <Typography textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          </Typography>
          <Blog />
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  )
}

export default Home