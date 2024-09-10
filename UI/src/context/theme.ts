import { createTheme, ThemeOptions } from "@mui/material/styles";

const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#26315F",
    },
    secondary: {
      main: "#A673B1",
    },
    warning: {
      main: "#949DA3",
    },
    success: {
      main: "#32CD32",
    },
    error: {
      main: "#F0685F",
    },
    info: {
      main: "#787A81",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

export const primary = "#26315F";
export const purple = "#A673B1";
export const accent = "#18BC9C";
export const grey = "#F8F8FF";
export const disabled = "#787A81";
export const dark = "#0F0F12";

export default theme;
