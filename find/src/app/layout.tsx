import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "SomConnect Find — Jobs, Businesses & Networking",
  description: "Find Somali professionals, jobs, businesses, and networking events. The premier directory for the Somali professional community.",
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
          <main className="mx-auto max-w-7xl px-4 py-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
