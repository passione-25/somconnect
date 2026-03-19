import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteNav from "@/components/SiteNav";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "SomConnect Forum",
  description: "A modern community forum — share, discuss, and connect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <SiteNav />
          <Navbar />
          <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
