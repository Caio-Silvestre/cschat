import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

// Função para gerar o tema dinâmico
const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#6A0DAD", // Roxo
      },
      secondary: {
        main: "#20B2AA", // Verde-água
      },
      background: {
        default: mode === "dark" ? "#000000" : "#ffffff",
        paper: mode === "dark" ? "#121212" : "#f5f5f5",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#000000",
        secondary: mode === "dark" ? "#20B2AA" : "#6A0DAD",
      },
    },
    typography: {
      fontFamily: "'Roboto', 'Arial', sans-serif",
      h1: { fontSize: "2.5rem", fontWeight: 700 },
      h2: { fontSize: "2rem", fontWeight: 600 },
      h3: { fontSize: "1.75rem", fontWeight: 500 },
      button: { textTransform: "none", fontWeight: 600 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: "8px 16px",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          },
        },
      },
    },
  });

export default getTheme;
