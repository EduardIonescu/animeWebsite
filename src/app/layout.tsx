import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/other/themeProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Animesun",
  description: "Anime database website",
};

const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins-Light.ttf",
      weight: "300",
    },
    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/Poppins-Bold.ttf",
      weight: "700",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
