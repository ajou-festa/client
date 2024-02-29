import { useState, useEffect } from "react";

const useWindowSize = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const getSize = () => {
    return { width: window.innerWidth, height: window.innerHeight };
  };

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
