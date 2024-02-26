"use client";

import Link from "next/link";
import { FESTIVAL_DATE } from "@/app/lib/constants";
import { useQueryWithDefault } from "@/app/hooks/useQueryWithDefault";
import { useMemo } from "react";
import ArrowDown from "@/public/arrow-down.svg";
import useIsOpenStore from "../hooks/useIsOpenStore";

const DayDisplay = ({
  selectedDay,
  selectedSection,
}: {
  selectedDay: number;
  selectedSection?: string;
}) => {
  const { getQueryParam, getQueryUrl } = useQueryWithDefault();
  const { isDayOpen, setIsDayOpen, setIsNavOpen, setIsSectionBarOpen } =
    useIsOpenStore();

  const section = selectedSection || getQueryParam("section", "A");

  const queryUrls = useMemo(
    () => FESTIVAL_DATE.map((date, index) => getQueryUrl(index + 1, section)),
    [section],
  );

  return (
    <div
      className="flex z-20 flex-col items-center w-[12.3rem] font-medium relative cursor-pointer"
      onClick={() => {
        setIsDayOpen(!isDayOpen);
        setIsNavOpen(false);
        setIsSectionBarOpen(false);
      }}
    >
      <div className="w-full pl-[3.2rem] text-white text-center text-3xl font-bold p-[0.8rem] flex items-center justify-center">
        {`DAY ${selectedDay}`}
        <ArrowDown className={` ml-4 ${isDayOpen ? "rotate-180" : ""}`} />
      </div>
      <div
        className={`bg-transparentWhite-300 absolute top-full z-10 rounded-md overflow-hidden transition- transition-all ease-in-out duration-300 ${
          isDayOpen ? "h-28" : "h-0"
        }`}
      >
        <ul>
          {FESTIVAL_DATE.map((date, index) => (
            <li
              key={index}
              className={`w-[12.3rem] py-[0.8rem] text-2xl text-center font-normal hover:bg-blue-100 hover:text-blue-400 hover:font-semibold`}
            >
              <Link href={queryUrls[index]}>DAY {index + 1}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DayDisplay;
