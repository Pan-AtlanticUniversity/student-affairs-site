import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dark, grey } from "../../context/theme";

interface TextBoxProps {
    title?: string;
    description?: string;
    fontSize? : string;
    descriptionFontSize? : string;
}


const TextBox: React.FC<TextBoxProps> = ({ 
    title,
    description,
    fontSize = { xs: '1.25rem', md: '2rem' },
    descriptionFontSize = { xs: '0.875rem', md: '1rem' },
 }) => {
    return (
        <Box sx={{
            textAlign: 'center',
            color: dark,
            padding: 2,
            backgroundColor: grey,
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            width: '85%',
            margin: 'auto', // Center the box horizontally
            position: 'absolute',
            left: '50%',
            bottom: 0,
            transform: 'translate(-50%, 50%)',
            zIndex: 2, // Ensure the text box is on top of the carousel
        }}>
            <Typography variant="h6" sx={{ fontFamily: 'Barlow', fontSize: fontSize }}>
                {title}
            </Typography>

            {
                description && <Typography variant="body2" sx={{fontSize:descriptionFontSize, display: { xs: 'none', md: 'block' }, lineHeight: 1.8 }}>
                    {description}
                </Typography>
            }

        </Box>
    );
}

export default TextBox;