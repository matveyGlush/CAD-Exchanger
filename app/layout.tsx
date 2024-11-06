import type { Metadata } from "next";
import "./globals.css";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "Some Company",
  description: "Some Company by matveyGlush",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
