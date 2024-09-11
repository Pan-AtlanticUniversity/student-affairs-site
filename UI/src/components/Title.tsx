import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { dark, disabled } from '../context/theme'
import { Image } from 'mui-image'
import DefaultUser from '../assets/svgs/default-user.svg';

interface TitleProps {
    position: string;
    name: string;
    email: string;
    phone: string;
}

const Title: React.FC<TitleProps> = ({ position, name, email, phone }) => {
    return (
        <Stack direction={'column'} alignItems={'center'} sx={{ gap: 2, width: 'auto' }}>
            <Typography variant="h6" color={dark}>
                {position}
            </Typography>
            <Box sx={{ width: { xs: "35%", sm: "150px", lg: '200px' } }}>
                <Image src={DefaultUser} style={{ height: "100%" }} alt="User Icon" />
            </Box>
            <Stack direction={'column'} alignItems={'center'} sx={{ gap: 0.5 }}>
                <Typography variant="body1" color={disabled}>
                    {name}
                </Typography>
                <Typography variant="body2" color={disabled}>
                    {email}
                </Typography>
                <Typography variant="body2" color={disabled}>
                    {phone}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default Title