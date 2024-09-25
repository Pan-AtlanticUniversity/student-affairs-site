import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import { accent } from '../context/theme';

interface BannerProps {
    bannerTitle?: string;
    titleColor?: string;
    titleBackground?: string;
    bannerImage?: string;
    pushDownBanner?: boolean;
    contain?: boolean;
    background?: string
}

const Banner: React.FC<BannerProps> = ({ bannerTitle, titleColor, titleBackground, bannerImage, pushDownBanner, contain, background }) => {
    return (
        <Container
            sx={{
                marginTop: { xs: "80px", sm: "100px" },
                alignItems: "center",
                justifyContent: "center",
                minWidth: '100vw',
                zIndex: 1,
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '5/3',
                    maxHeight: { md: '450px', xl: '750px' },
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
                    src={bannerImage}
                    sx={{
                        objectFit: contain ? "contain" : "cover",
                        objectPosition: pushDownBanner ? 'top' : 'center',
                        width: '100%',
                        height: '100%',
                        borderRadius: "10px",
                        backgroundColor: background ?? '#fff'

                    }}
                    alt="Banner"
                />
            </Box>
            {bannerTitle && (
                <Typography
                    color={titleColor}
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        whiteSpace: 'nowrap',
                        transform: 'translateX(-50%)',
                        backgroundColor: titleBackground,
                        padding: { xs: '10px 25px', md: '15px 40px' },
                        borderRadius: '50px',
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
