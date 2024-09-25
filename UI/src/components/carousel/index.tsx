import Slider from "react-slick";
import { Box, Container } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselTopProps {
    images?: string[];
}


// Carousel Component
const Carousel: React.FC<CarouselTopProps> = ({ images }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <Container
            sx={{
                marginTop: { xs: "80px", sm: "100px" },
                minWidth: '100vw',
                overflow: "visible",
                position: 'relative',
                alignItems: "center",
                justifyContent: "center",
                zIndex: 0,

            }}>
            <Slider {...sliderSettings}>
                {images?.map((image, index) => (
                    <Box
                        key={index}
                        sx={{
                            background: `url(${image}) no-repeat center center`,
                            backgroundSize: "cover",
                            width: "100%",
                            aspectRatio: '5/3',
                            maxHeight: { md: '450px', xl: '750px' },
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