import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#010101",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ['"Poppins"', "Roboto"].join(","),
    h1: {
      display: "flex",
      fontFamily: "Poppins",
      fontSize: "34px",
    },
    h2: {
      fontFamily: "Roboto",
      fontSize: "28px",
    },
  },
});
