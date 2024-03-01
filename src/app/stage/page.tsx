import React from "react";
import { getCurrentDay } from "../lib/utils";

import EmblaCarousel from "./_components/stageCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

import "./_components/stageCarousel/embla.css";
import { fetchStageData } from "../lib/data";
import { Metadata } from "next";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 2;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const metadata: Metadata = {
  title: "버스킹",
  description: "버스킹 공연 | 동화",
};

const Page = () => {
  const fetchAndRenderData = async () => {
    const stageDataPromises = Array.from({ length: SLIDE_COUNT }, (_, index) =>
      fetchStageData(index + 1),
    );
    const stageData = await Promise.all(stageDataPromises);

    return (
      <>
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
          stages={[stageData[0], stageData[1]]}
        />
      </>
    );
  };

  return fetchAndRenderData();
};

export default Page;
