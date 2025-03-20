"use client";

import { Button } from "@mui/material";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  console.log(resolvedTheme);

  return (
    <>
      <Button variant="contained" onClick={() => setTheme("light")}>
        light
      </Button>
      <Button variant="contained" onClick={() => setTheme("dark")}>
        dark
      </Button>
    </>
  )
}
