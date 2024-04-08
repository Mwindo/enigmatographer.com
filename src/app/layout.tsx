import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import PageLayout from "./pagelayout";
import { Suspense } from "react";
import Loading from "./loading";

const mainFont = Titillium_Web({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
  weight: "200",
});

export const metadata: Metadata = {
  title: "Enigmatographer",
  description: "Christopher Bisom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body id="body" className={mainFont.className}>
          <PageLayout>{children}</PageLayout>
        </body>
      </Suspense>
    </html>
  );
}
