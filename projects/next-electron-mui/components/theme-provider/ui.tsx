import React from "react";
import { useTheme } from "next-themes";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";

interface IProps {
  children: React.ReactNode
}

export function UiThemeProvider({ children }: IProps) {
  const { resolvedTheme } = useTheme();

  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: resolvedTheme as PaletteMode,
        },
      })}
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
