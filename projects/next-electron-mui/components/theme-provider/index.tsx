'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { UiThemeProvider } from "@/components/theme-provider/ui";

interface IProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: IProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <UiThemeProvider>
        {children}
      </UiThemeProvider>
    </NextThemeProvider>
  );
}
