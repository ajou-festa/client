import React from "react";
import { getCurrentDay } from "../lib/utils";

import EmblaCarousel from "./_components/stageCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

import "./_components/stageCarousel/embla.css";
import { fetchStageData } from "../lib/data";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 2;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

interface StagePageProps {
  searchParams?: {
    day?: number;
  };
}
const Page = ({ searchParams }: StagePageProps) => {
  const selectedDay = Number(searchParams?.day) || getCurrentDay(new Date());

  const fetchAndRenderData = async () => {
    const stageDataPromises = Array.from({ length: SLIDE_COUNT }, (_, index) =>
      fetchStageData(index + 1)
    );
    const stageData = await Promise.all(stageDataPromises);
    console.log(stageData, "stageData이거임");

    return (
      <div className="flex flex-col justify-center items-center">
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
          stages={[stageData[0], stageData[1]]}
        />
      </div>
    );
  };

  return fetchAndRenderData();
};

export default Page;
