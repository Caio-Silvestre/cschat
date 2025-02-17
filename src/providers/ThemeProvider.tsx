"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode, useState, useMemo } from "react";
import getTheme from "../theme";

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <button
        onClick={() => setMode((prev) => (prev === "light" ? "dark" : "light"))}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          padding: "8px 16px",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        {mode === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      {children}
    </ThemeProvider>
  );
}
