import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#26315F',
        },
        secondary: {
            main: '#A673B1',
        },
        warning: {
            main: '#949DA3',
        },
        success: {
            main: '#32CD32',
        },
        error: {
            main: '#F0685F',
        },
        info: {
            main: '#787A81',
        }
    },
    typography: {
        fontFamily: 'Leckerli One'
    }
});

export default theme;
