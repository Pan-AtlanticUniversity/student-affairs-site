import { Stack} from "@mui/material"
import {Blog, Footer, NavBar, UnderlinedText } from "../../components"


const Blogs = () => {

  return (
    <Stack minHeight={"100vh"}
      sx={{
        gap: { xs: 14, md: 18, lg: 20 },
        overflowY: "scroll",
        overflowX: "hidden"
      }}>
      <NavBar route="Blog" />
     
      <Stack pl={3} pr={3} sx={{ flexDirection: "column", gap: { xs: 10, md: 15 } }}>
        <Stack sx={{ width: "100%", alignItems: "center", marginTop: { md: 4, lg: 0 } }} gap={5} overflow={'visible'}>
            <UnderlinedText text="Trending News"/>
          <Blog />
        </Stack>


      </Stack>
      <Footer />
    </Stack>
  )
}

export default Blogs