"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const DongyeonCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="embla_dongyeon">
      <div className="embla__viewport dongyeon" ref={emblaRef}>
        <div className="embla__container dongyeon">
          {slides.map((index) => (
            <div className="relative embla__slide dongyeon" key={index}>
              <div className="absolute right-[1rem] top-[1.7rem] w-[7.3rem] h-[3.4rem] rounded-[5rem] bg-brown-500 text-center flex justify-center items-center text-[2rem] text-white">
                {index + 1} / 8
              </div>

              <Image
                src={`/dongbak${index + 1}.jpeg`}
                alt="df"
                width={335}
                height={335}
                className="donyeon_image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DongyeonCarousel;
