import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

import NavBar from "@/components/Global/NavBar";
import GlogalWraper from "@/components/GlogalWraper";
import Footer from "@/components/Global/Footer";

// Analytics
import { CSPostHogProvider } from "@/components/providers/CSPostHogProvider";
import posthog from "posthog-js";

posthog.capture("my event", { property: "value" });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EZ dev",
  description: "Eliasz web portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <CSPostHogProvider>
        <body
          className={cn(
            " transition-colors duration-500 antialiased",
            inter.className
          )}
        >
          <ThemeProvider>
            <NavBar />
            <GlogalWraper>{children}</GlogalWraper>
            <Footer />
          </ThemeProvider>
          <Analytics />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
