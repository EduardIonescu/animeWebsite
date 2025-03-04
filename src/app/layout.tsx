import Navbar from "@/components/navbar/navbar";
import BackToTopButton from "@/components/other/backToTopButton";
import { ThemeProvider } from "@/components/other/themeProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Animesun",
  description: "Anime database website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className="pt-16">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
