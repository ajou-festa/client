import "./globals.css";
import type { Metadata, Viewport } from "next";
import Head from "next/head";
import Footer from "@/app/_commons/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "동박 가이드 : 동화",
  description: "아주대학교 축제 도우미",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#B67E5C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="192.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="192.png" />
      </Head>
      <body className="h-screen w-screen max-w-screen-sm bg-brown-100 relative flex flex-col items-center mx-auto">
        <main className="h-[calc(100vh-9.4rem)] flex flex-col justify-center items-center">
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-9Q7W6YM2CM" />
    </html>
  );
}
