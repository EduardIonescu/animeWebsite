import Navbar from "@/components/navbar/navbar";
import BackToTopButton from "@/components/other/backToTopButton";
import Loading from "@/components/other/loading";
import { ThemeProvider } from "@/components/other/themeProvider";
import type { Metadata } from "next";
import { Suspense } from "react";
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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <Suspense fallback={<Loading />}>
            {children}
            <BackToTopButton />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
