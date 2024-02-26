import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/app/_commons/Footer";

export const metadata: Metadata = {
  title: "동박 가이드 : 동화",
  description: "아주대학교 축제 도우미",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex items-center justify-center">
        <div className="h-screen w-screen max-w-screen-sm bg-brown-100 relative flex flex-col items-center">
          <div className="h-[calc(100vh-10.4rem)] flex flex-col justify-center items-center">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
