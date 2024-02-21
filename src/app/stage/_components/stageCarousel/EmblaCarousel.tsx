"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton } from "./EmblaCarouselArrowsDotsButtons";
import Schedule from "../Schedule";
import Guest from "../Guest";
import { FESTIVAL_DATE } from "@/app/lib/constants";
import { isToday } from "@/app/lib/utils";
import { getFormattedDate } from "@/app/lib/utils";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi && emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className="embla flex flex-col ">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="w-[29.5rem] flex justify-center items-center text-center h-[3rem] flex-shrink-0">
                  <span className="w-[8rem] h-[2.1rem] font-semibold text-blue-300 text-[1.4rem] rounded-[3rem] bg-blue-700 mb-[0.5rem] p-[0.5rem] flex justify-center items-center">
                    {isToday(index + 1)
                      ? "TODAY"
                      : getFormattedDate(FESTIVAL_DATE[index])}
                  </span>
                </div>

                <div className="w-[29.5rem] text-white text-center text-3xl font-bold  flex items-center justify-center mb-[2rem]">
                  {`DAY ${index + 1}`}
                </div>
                <Schedule />
                <Guest />
                <div className="text-white">{index + 1}입니다</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla__dots mt-[2.4rem]">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => {
              scrollTo(index);
            }}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          >
            {index === selectedIndex ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <circle cx="4" cy="4" r="4" fill="white" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <circle cx="4" cy="4" r="4" fill="#00285C" />
              </svg>
            )}
          </DotButton>
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel;
