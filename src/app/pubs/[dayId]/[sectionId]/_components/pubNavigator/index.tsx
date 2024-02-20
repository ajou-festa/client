"use client";

import { Pub } from "@/app/lib/types";
import PubCard from "./pubCard";
import Image from "next/image";
import { useRef } from "react";

const PubNavigator = ({ pubs }: { pubs: Pub[] }) => {
  const divRef = useRef<HTMLDivElement>(null);
  let initialPosition = 0;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    initialPosition = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const newPosition = e.touches[0].clientX;
    const diffX = initialPosition - newPosition;

    if (diffX > 0) {
      divRef.current.style.transform = `translateX(calc(${-diffX}px + 89%))`;
    } else {
      divRef.current.style.transform = `translateX(calc(${-diffX}px)`;
    }
  };

  const handleTouchEnd = () => {
    if (!divRef.current) return;

    if (divRef.current.getBoundingClientRect().left < window.innerWidth / 2) {
      divRef.current.style.transform = "translateX(0)";
    } else {
      divRef.current.style.transform = "translateX(89%)";
    }
  };

  return (
    <div className="z-10 absolute w-54 h-full right-0">
      <div
        className="relative flex justify-end w-full h-full transform translate-x-[89%]"
        ref={divRef}
      >
        <div
          className="w-8"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src="/navigator-handle.svg"
            alt="navigator-handle"
            width={32}
            height={32}
            className="mt-4"
          />
          <div className="w-2 mt-4 absolute top-4 left-3">
            <Image
              src="/navigator-handle-arrow-left.svg"
              alt="navigator-handle-arrow-left"
              width={8}
              height={8}
              className={`transform  ${
                divRef.current?.style.transform === "translateX(88%)"
                  ? "rotate-0"
                  : "rotate-180"
              }`}
            />
          </div>
        </div>
        <div className="flex flex-col p-4 gap-4 items-center w-full bg-transparentBlue-300 overflow-y-auto">
          {pubs.map((pub) => (
            <PubCard key={pub.id} pub={pub} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PubNavigator;
