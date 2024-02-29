import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import DongyeonCarousel from "./_components/dongyeonCarousel";
import DongyeonButton from "./_components/DongyeonButton";

import "./_components/embla.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "동아리연합회",
  description: "동아리연합회 | 동화",
};

interface DonghwaPageProps {
  searchParams?: {
    category?: "events" | "ajouFesta";
  };
}

const page = (props: DonghwaPageProps) => {
  const category = props.searchParams?.category || "events";
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 7;
  const FESTA_SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const FESTA_SLIDES = Array.from(Array(FESTA_SLIDE_COUNT).keys());
  return (
    <div>
      <DongyeonButton />
      <div className="flex flex-col justify-center items-center h-[33.5rem]">
        <main className="relative bg-white w-[33.5rem] h-[33.5rem] rounded-[1.5rem] flex justify-center">
          <DongyeonCarousel
            slides={category === "events" ? SLIDES : FESTA_SLIDES}
            options={OPTIONS}
            isAjouFesta={category === "ajouFesta"}
          />
          <hr className="absolute bottom-0 h-[0.4rem] w-[15.9rem] bg-brown-400 rounded-[1rem]" />
        </main>
      </div>
    </div>
  );
};

export default page;
