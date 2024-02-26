import React from "react";
import EmblaCarousel from "../stage/_components/stageCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import DongyeonCarousel from "./_components/dongyeonCarousel";

const page = () => {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 7;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div>
      {" "}
      <div className="flex flex-col justify-center items-center">
        <main className="sandbox">
          <section className="sandbox__carousel">
            <DongyeonCarousel slides={SLIDES} options={OPTIONS} />
          </section>
        </main>
      </div>
    </div>
  );
};

export default page;
