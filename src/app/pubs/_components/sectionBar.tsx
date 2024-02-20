"use client";

import { SECTION_LIST } from "@/app/lib/constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryWithDefault } from "@/app/hooks/useQueryWithDefault";
import { useToggle } from "@/app/hooks/useToggle";
import EntireMap from "@/public/entire-map.svg";
import ArrowLeft from "@/public/arrow-left.svg";
import SectionList from "@/public/section-list.svg";

const SectionBar = ({
  selectedDay,
  selectedSection,
}: {
  selectedDay: number;
  selectedSection: string;
}) => {
  const { getQueryUrl } = useQueryWithDefault();
  const [isToggle, handleToggle] = useToggle();
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState(
    SECTION_LIST.findIndex((s) => s.section === selectedSection)
  );
  const maxIndex = SECTION_LIST.length - 1;

  const handleClickLeft = () => {
    if (selectedIndex === 0) {
      setSelectedIndex(maxIndex);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleClickRight = () => {
    if (selectedIndex === maxIndex) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handleClickSection = (index: number) => {
    setSelectedIndex(index);
    handleToggle();
  };

  useEffect(() => {
    router.push(getQueryUrl(selectedDay, SECTION_LIST[selectedIndex].section));
  }, [selectedIndex]);

  return (
    <div className="z-10 absolute bottom-0 w-full">
      <div
        className={`bg-white absolute bottom-14 z-10 w-full h-80 rounded-t-xl overflow-y-auto bg-transparentWhite-200 ${
          isToggle ? "block" : "hidden"
        }`}
      >
        <ul>
          {SECTION_LIST.map((section, index) => (
            <li key={index}>
              <div
                className={
                  "px-10 py-4 text-lg text-blue-400 text-center font-normal hover:bg-blue-100 hover:text-blue-400 hover:font-semibold"
                }
                onClick={() => handleClickSection(index)}
              >
                {section.name}
              </div>
              <div
                className={`w-full h-[0.25px] bg-gray-50 ${
                  index !== maxIndex ? "block" : "hidden"
                }`}
              ></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-[5rem] flex flex-row justify-between items-center bg-transparentWhite-200 px-[2.4rem] py-4">
        <EntireMap />
        <button onClick={() => handleClickLeft()}>
          <ArrowLeft />
        </button>
        <span className="w-[13.8rem] font-normal text-3xl text-center text-blue-400">
          {SECTION_LIST[selectedIndex].name}
        </span>
        <button onClick={() => handleClickRight()}>
          <ArrowLeft className="rotate-180" />
        </button>
        <button onClick={handleToggle}>
          <SectionList />
        </button>
      </div>
    </div>
  );
};

export default SectionBar;
