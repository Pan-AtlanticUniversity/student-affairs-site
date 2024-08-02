import React from "react";
import Slider from "react-slick";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import welcomeToPAU from "../../../public/images/welcome-to-pau.png"; // Replace with your actual image paths
import guysChilling from "../../../public/images/guys-chilling.jpg"; // Replace with your actual image paths
import people from "../../../public/images/chudi.png"; // Replace with your actual image paths

function Carousel() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <div style={{ fontSize: "30px", cursor: "pointer" }}>Next</div>,
    prevArrow: <div style={{ fontSize: "30px", cursor: "pointer" }}>Prev</div>,
  };

  const slides = [
    {
      background: welcomeToPAU,
      title: "DESIGN | CONSTRUCTION | DEVELOPMENT",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nemo quas sequi dolorem iusto dolore similique saepe mollitia fugiat consectetur iste dolores eaque, magnam aspernatur, quam commodi reprehenderit asperiores quis.",
    },
    {
      background: guysChilling,
      title: "Bringing your designs to life...",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nemo quas sequi dolorem iusto dolore similique saepe mollitia fugiat consectetur iste dolores eaque, magnam aspernatur, quam commodi reprehenderit asperiores quis.",
    },
    {
      background: people,
      title: "From concept to design",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nemo quas sequi dolorem iusto dolore similique saepe mollitia fugiat consectetur iste dolores eaque, magnam aspernatur, quam commodi reprehenderit asperiores quis.",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ my: 10 }}>

      {/*slider*/}
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              background: `url(${slide.background}) no-repeat center center`,
              backgroundSize: "cover",
              height: "55vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              textAlign: "center",
              px: 3,
            }}
          >
            <Grid container justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
              <Grid item xs={12} sm={8} md={6} lg={5}>
                <Box
                  sx={{
                    p: 4,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
                    {slide.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {slide.description}
                  </Typography>
                  <Button variant="contained" color="primary" href="#about">
                    Get Started
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Slider>

      {/* short content */}
      <Box sx={{ textAlign: 'center', mt: 10 }}>
        <Typography variant="h4" component="h1">
          What's poppin <span style={{ color: "#ec407a" }}>PAU!!!</span>
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, assumenda? Repellendus, iste corrupti? Tempore laudantium repellendus accusamus accusantium sed architecto odio, nisi expedita quas quidem nesciunt debitis dolore non aspernatur praesentium assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam consequatur!
        </Typography>
        
      </Box>


    </Container>
  );
}

export default Carousel;
