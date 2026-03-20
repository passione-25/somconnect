import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "SomConnect — Connecting Somali Professionals Worldwide",
  description: "SomConnect is the premier platform connecting Somali professionals worldwide. Find jobs, grow your business, and build your network.",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
