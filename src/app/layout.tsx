import "./globals.css";
import type { Metadata, Viewport } from "next";
import Footer from "@/app/_commons/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: {
    template: "%s | 동화", // 접미사 템플릿
    default: "동아리박람회", // 폴백 타이틀
  },
  metadataBase: new URL("https://ajoufesta.com"),
  description: "아주대학교 동아리박람회 도우미",
  keywords: ["아주대학교", "동아리박람회", "아주페스타", "동화"],
  openGraph: {
    title: "동아리박람회",
    description: "동아리박람회 도우미 | 동화",
    url: "https://ajoufesta.com/entire-map",
    siteName: "동아리박람회 | 동화",
    images: [
      {
        url: "/thumbnail.png",
        width: 800,
        height: 600,
        alt: "동아리박람회 썸네일",
      },
    ],
    type: "website",
    locale: "ko_KR",
  },
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/192.png" },
      { url: "/192.png", sizes: "152x152", type: "image/png" },
      { url: "/192.png", sizes: "167x167", type: "image/png" },
      { url: "/192.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    title: "동화",
    statusBarStyle: "black-translucent",
    capable: true,
  },
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
