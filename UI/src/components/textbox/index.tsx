import { Box,Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TextBoxProps {
    title?: string;
    description?: string;
}


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

export default TextBox;