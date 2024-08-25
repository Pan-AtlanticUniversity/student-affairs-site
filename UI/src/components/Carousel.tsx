import Slider from "react-slick";
import { Box, Container, Stack } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import welcomeToPAU from '../assets/images/welcome-to-pau.png';
import guysChilling from '../assets/images/guys-chilling.jpg';
import people from '../assets/images/chudi.png';

import { accent } from "../context/theme";

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
        <Container maxWidth="xl" sx={{
            marginTop: { xs: "80px", md: "100px" },
            overflow: "visible",
            position: 'relative',
            alignItems: "center",
            justifyContent: "center",
            zIndex: 0,
            '&::before': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                transform: 'translate(-25%, 50%)',
                zIndex: -1,
                backgroundColor: accent,
                width: "clamp(150px, 40vw, 350px)",
                aspectRatio: 1,
                borderRadius: '50%'
            }
        }}>
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
    );
}

export default Carousel;
