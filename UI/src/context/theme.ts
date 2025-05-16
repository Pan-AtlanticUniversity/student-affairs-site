import { createTheme, ThemeOptions } from "@mui/material/styles";

const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#26315F",
    },
    secondary: {
      main:"#2e3a6e",
    },
    warning: {
      main: "#949DA3",
    },
    success: {
      main: "#2e3a6e",
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

export const primary = "#2e3a6e";
export const purple = "#A673B1";
export const accent = "#2e3a6e";
export const grey = "#F8F8FF";
export const disabled = "#787A81";
export const dark = "#0F0F12";

export default theme;
