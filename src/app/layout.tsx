import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import PageLayout from "./pagelayout";
import { Suspense } from "react";
import Loading from "./loading";
import Head from "next/head";

const mainFont = Titillium_Web({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
  weight: ["200", "600"],
});

export const metadata: Metadata = {
  title: "Enigmatographer: Christopher Bisom",
  description: "Christopher Bisom's personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <Suspense fallback={<Loading />}>
        <body id="body" className={mainFont.className}>
          <PageLayout>{children}</PageLayout>
        </body>
      </Suspense>
    </html>
  );
}
