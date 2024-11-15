import { metronome } from 'ldrs';
import { Stack, Typography } from '@mui/material';
import { primary } from '../context/theme';

const CustomLoader = () => {
    metronome.register()
    return (
        <Stack sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', alignItems: 'center', gap: 2 }}>
            <l-metronome
                size="50"
                speed="1.25"
                color={primary}
            ></l-metronome>
            <Typography>
                Please wait...
            </Typography>
        </Stack>
    )
}

export default CustomLoader