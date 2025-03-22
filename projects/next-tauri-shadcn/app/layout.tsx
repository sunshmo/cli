import type { Metadata } from 'next';
import React from 'react';
import './globals.scss';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'Next App',
};

// `app/layout.js` 是根布局，是必需的，必须包含 html 和 body 标签。所有路由下的内容都渲染到`children`所在位置
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`antialiased root-layout`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
