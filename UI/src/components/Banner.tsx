import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import { accent } from '../context/theme';

interface BannerProps {
    bannerTitle?: string;
    titleColor?: string;
    titleBackground?: string;
    bannerImage?: string;
    bannerImageFormat?: string
}

const Banner: React.FC<BannerProps> = ({ bannerTitle, titleColor, titleBackground, bannerImage, bannerImageFormat }) => {
    return (
        <Container
            maxWidth="xl"
            sx={{
                marginTop: { xs: "80px", md: "100px" },
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: "30vh", sm: "45vh", md: "60vh" },
                    borderRadius: "10px",
                    overflow: 'visible',
                    zIndex: 1,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        transform: 'translate(-50%, 50%)',
                        width: "clamp(150px, 25%, 300px)",
                        aspectRatio: "1",
                        borderRadius: '50%',
                        backgroundColor: accent,
                        zIndex: -1,
                    }
                }}
            >
                <Box
                    component="img"
                    src={bannerImage ? `data:image/${bannerImageFormat};base64,${bannerImage}` : '/images/chudi.png'}
                    sx={{
                        objectFit: 'cover',
                        backgroundSize: "cover",
                        width: '100%',
                        height: '100%',
                        borderRadius: "10px",
                    }}
                    alt="Banner"
                />
            </Box>
            {bannerTitle && (
                <Typography
                    fontFamily={"Poppins"}
                    color={titleColor}
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        whiteSpace: 'nowrap',
                        transform: 'translateX(-50%)',
                        backgroundColor: titleBackground,
                        padding: { xs: '10px 25px', md: '15px 30px' },
                        borderRadius: '20px',
                        marginBottom: 2,
                        fontSize: { xs: '1rem', md: '1.2rem' },
                        zIndex: 2,
                    }}
                >
                    {bannerTitle}
                </Typography>
            )}
        </Container>
    );
};

export default Banner;
