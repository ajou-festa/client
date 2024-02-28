import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import DongyeonCarousel from "./_components/dongyeonCarousel";
import DongyeonButton from "./_components/DongyeonButton";

import "./_components/embla.css";

const page = () => {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 8;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div>
      <DongyeonButton />
      <div className="flex flex-col justify-center items-center h-[33.5rem]">
        <main className="relative bg-white w-[33.5rem] h-[33.5rem] rounded-[1.5rem] flex justify-center">
          <DongyeonCarousel slides={SLIDES} options={OPTIONS} />
          <hr className="absolute bottom-0 h-[0.4rem] w-[15.9rem] bg-brown-400 rounded-[1rem]" />
        </main>
      </div>
    </div>
  );
};

export default page;
