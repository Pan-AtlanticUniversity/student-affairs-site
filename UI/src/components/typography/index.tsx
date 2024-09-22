import React from "react";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface UnderlinedTextProps {
    text: string;
}

const UnderlinedText: React.FC<UnderlinedTextProps> = ({ text }) => {

    return (
        <Box sx={{
            textAlign: 'center',
        }}>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    fontFamily: 'Barlow',
                    fontWeight: 'semi-bold',
                    mb: 4,
                    position: 'relative', // Required for positioning the underline
                    display: 'inline-block',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '50%', // Controls the length of the underline (adjust to your preference)
                        height: '3px', // Thickness of the underline
                        backgroundColor: '#002E6D', // Color of the underline
                        left: '25%', // Centers the underline beneath the text (adjust if needed)
                        bottom: '-6px', // Creates space between the text and the underline
                    },
                }}
            >
                {text}
            </Typography>
        </Box>
    );
}
export default UnderlinedText;