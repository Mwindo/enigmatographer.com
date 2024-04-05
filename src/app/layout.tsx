import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import PageLayout from "./pagelayout";
import { Suspense } from "react";
import Loading from "./loading";

const myFont = localFont({ src: "../fonts/lansbury-fg.regular.ttf" });

const inter = Inter({ subsets: ["latin"] });

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
      <body id="body" className={myFont.className}>
        <PageLayout>
          {children}
        </PageLayout>
      </body>
      </Suspense>
    </html>
  );
}
