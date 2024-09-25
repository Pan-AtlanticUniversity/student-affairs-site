import Slider from "react-slick";
import { Box, Container, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your images here
import welcomeToPAU from '../assets/images/welcome-to-pau.png';
import guysChilling from '../assets/images/guys-chilling.jpg';
import people from '../assets/images/chudi.png';

interface TextBoxProps {
    title?: string;
    description?: string;
}

interface CarouselTopProps {
    images?: string[];
}

const slides = [welcomeToPAU, guysChilling, people];
// Text Box Component
const TextBox: React.FC<TextBoxProps> = ({ title, description }) => {
    return (
        <Box sx={{
            textAlign: 'center',
            color: '#000',
            padding: { xs: 2, md: 4 },
            backgroundColor: '#FFFFFF',
            borderRadius: '25px',
            maxWidth: '100vw',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            width: { lg: '1300px', xl: '1600px' },
            margin: 'auto', // Center the box horizontally
            marginBottom: { xs: '20px', md: '0px', lg: '0px' }, // Add some space between text and carousel
            position: 'relative',
            top: { xs: '-50px', md: '-100px' }, // Adjust this to control the overlap amount
            zIndex: 2, // Ensure the text box is on top of the carousel
        }}>
            <Typography variant="h4" sx={{ fontFamily: 'Barlow', fontWeight: 'semi-bold', mb: 1 }}>
                {title}
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {description}
            </Typography>
        </Box>
    );
}


// Carousel Component
// Carousel Component
const CarouselTop: React.FC<CarouselTopProps> = ({ images }) => {
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
        <Container sx={{
            // edited md to reduce the spacing between the header and the carousel
            marginTop: { xs: "8px", md: "10px" },
            minWidth: '100vw',
            position: 'relative',
            zIndex: 1,
            overflow: "visible",
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
                            maxHeight: { md: '450px', lg: '520px', xl: '750px' },
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


// Main Layout Component
function Carousel() {
    return (
        <Box sx={{ paddingTop: '80px' }}>
            <CarouselTop images={slides}/>
            <TextBox title="Welcome to Pan-Atlantic University" description="At Pan-Atlantic University, we are committed to the holistic development of every student. Our goal is to shape the PAU student into an ethically grounded and responsible professional."/>
        </Box>
    );
}

export default Carousel;
