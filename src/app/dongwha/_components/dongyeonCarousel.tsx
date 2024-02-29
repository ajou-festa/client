"use client";
import React, { useState, useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { SelectedSnapDisplay, useSelectedSnapDisplay } from "./SelectedSnap";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  isAjouFesta: boolean;
};

const DongyeonCarousel: React.FC<PropType> = (props) => {
  const { slides, options, isAjouFesta } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <>
      {isAjouFesta && (
        <section className="embla_dongyeon flex items-center mx-auto">
          <div className="embla__viewport dongyeon" ref={emblaRef}>
            <div className="embla__container dongyeon flex items-center mx-auto">
              {slides.map((index) => (
                <div
                  className="relative embla__slide dongyeon flex flex-col items-center"
                  key={index}
                >
                  <Image
                    src={`/donghwa${index + 1}.png`}
                    alt="이미지"
                    width={315}
                    height={315}
                  />
                </div>
              ))}
            </div>
          </div>
          <SelectedSnapDisplay
            selectedSnap={selectedSnap}
            snapCount={snapCount}
          />
        </section>
      )}
      {!isAjouFesta && (
        <section className="embla_dongyeon flex items-center mx-auto">
          <div className="embla__viewport dongyeon" ref={emblaRef}>
            <div className="embla__container dongyeon flex items-center mx-auto">
              {slides.map((index) => (
                <div
                  className="relative embla__slide dongyeon flex flex-col items-center"
                  key={index}
                >
                  <Image
                    src={`/dongbak${index + 1}.jpeg`}
                    alt="이미지"
                    width={315}
                    height={315}
                  />
                </div>
              ))}
            </div>
          </div>
          <SelectedSnapDisplay
            selectedSnap={selectedSnap}
            snapCount={snapCount}
          />
        </section>
      )}
    </>
  );
};

export default DongyeonCarousel;
