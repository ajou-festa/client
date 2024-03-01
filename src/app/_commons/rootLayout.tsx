"use client";

import { useEffect, useState } from "react";
import Footer from "./Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const CustomRootLayout = ({ children }: { children: React.ReactNode }) => {
  const [vh, setVh] = useState("100vh");

  useEffect(() => {
    const setVhToWindowHeight = () => {
      let vh = window.innerHeight * 0.01;
      setVh(`${vh}px`);
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVhToWindowHeight();
    window.addEventListener("resize", setVhToWindowHeight);
    return () => window.removeEventListener("resize", setVhToWindowHeight);
  }, []);

  return (
    <html lang="ko">
      <body
        style={{
          height: `calc(var(--vh, 1vh) * 100)`,
        }}
        className="w-screen max-w-screen-sm bg-brown-100 relative flex flex-col items-center mx-auto"
      >
        <main
          style={{ height: `calc(var(--vh, 1vh) * 100 - 94px)` }}
          className="flex flex-col justify-center items-center"
        >
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-9Q7W6YM2CM" />
    </html>
  );
};

export default CustomRootLayout;
