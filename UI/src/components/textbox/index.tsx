import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dark, grey } from "../../context/theme";

interface TextBoxProps {
    title?: string;
    description?: string;
}


const TextBox: React.FC<TextBoxProps> = ({ title, description }) => {
    return (
        <Box sx={{
            textAlign: 'center',
            color: dark,
            padding: 2,
            backgroundColor: grey,
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            width: { xs: '85%', md: '65%' },
            margin: 'auto', // Center the box horizontally
            position: 'absolute',
            left: '50%',
            bottom: 0,
            transform: 'translate(-50%, 50%)',
            zIndex: 2, // Ensure the text box is on top of the carousel
        }}>
            <Typography variant="h6" sx={{ fontFamily: 'Barlow' }}>
                {title}
            </Typography>

            {
                description && <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    {description}
                </Typography>
            }

        </Box>
    );
}

export default TextBox;