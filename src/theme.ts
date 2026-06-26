import { createTheme } from "@mui/material/styles";

// Extend MUI palette with the project's custom button color set.
declare module "@mui/material/styles" {
  interface Palette {
    accents: {
      green: string;
      orange: string;
      blue: string;
      red: string;
    };
  }
  interface PaletteOptions {
    accents?: {
      green: string;
      orange: string;
      blue: string;
      red: string;
    };
  }
  interface TypeBackground {
    secondary: string;
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7551FF", // buttons
    },
    background: {
      default: "#111C44", // основной bgcolor
      paper: "#1B254B", // второй bgcolor
      secondary: "#1B254B",
    },
    text: {
      primary: "#FFFFFF", // цвет текста белый
      secondary: "#A3AED0", // второй цвет текста
    },
    accents: {
      green: "#01B574",
      orange: "#FFB547",
      blue: "#3965FF",
      red: "#EE5D50",
    },
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
  },
});

export default theme;
