import Slider from "react-slick";
import { Box, Container, Stack } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import welcomeToPAU from "/images/welcome-to-pau.png";
import guysChilling from "/images/guys-chilling.jpg";
import people from "/images/chudi.png";

function Carousel() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    const slides = [welcomeToPAU, guysChilling, people];

    return (
        <Stack gap={0}>
            <Container maxWidth="xl" sx={{ marginTop: { xs: "80px", md: "100px" }, alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                <Slider {...sliderSettings}>
                    {slides.map((slide, index) => (
                        <Box
                            key={index}
                            sx={{
                                background: `url(${slide}) no-repeat center center`,
                                backgroundSize: "cover",
                                width: "100%",
                                height: { xs: "30vh", sm: "45vh", md: "60vh" },
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "10px",
                            }}
                        />
                    ))}
                </Slider>

            </Container>
            <Box
                sx={{ width: "40vw", aspectRatio: "1", left: { xs: "-15vw", md: "-10vw" }, top: { xs: "30vh", sm: "35vh", md: "55vh" }, maxWidth: "300px", }}
                bgcolor={"#18BC9C"}
                position="absolute"
                zIndex={0}
                borderRadius={"50%"}
            />
        </Stack>

    );
}

export default Carousel;
