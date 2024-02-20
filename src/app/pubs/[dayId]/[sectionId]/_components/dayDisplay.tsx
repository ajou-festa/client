"use client";

import Link from "next/link";
import { FESTIVAL_DATE } from "@/app/lib/constants";
import { useQueryWithDefault } from "@/app/hooks/useQueryWithDefault";
import { useToggle } from "@/app/hooks/useToggle";
import { useMemo } from "react";
import ArrowDown from "@/public/arrow-down.svg";

const DayDisplay = ({ selectedDay }: { selectedDay: number }) => {
  const { getQueryParam, getQueryUrl } = useQueryWithDefault();
  const [isToggle, handleToggle] = useToggle();

  // const selectedSection = getQueryParam("section", "seongho1");

  // const queryUrls = useMemo(
  //   () =>
  //     FESTIVAL_DATE.map((date, index) =>
  //       getQueryUrl(index + 1, selectedSection)
  //     ),
  //   [selectedSection]
  // );

  return (
    <div
      className="flex z-20 flex-col items-center w-[12.3rem] font-medium relative cursor-pointer"
      onClick={handleToggle}
    >
      <div className="w-full pl-[3.2rem] text-white text-center text-3xl font-bold p-[0.8rem] flex items-center justify-center">
        {`DAY ${selectedDay}`}
        <ArrowDown className={` ml-4 ${isToggle ? "rotate-180" : ""}`} />
      </div>
      <div
        className={`bg-white absolute top-full z-10 rounded-md overflow-hidden ${
          isToggle ? "block" : "hidden"
        }`}
      >
        <ul>
          {FESTIVAL_DATE.map((date, index) => (
            <li
              key={index}
              className={`w-[12.3rem] py-[0.8rem] text-2xl text-center font-normal hover:bg-blue-100 hover:text-blue-400 hover:font-semibold`}
            >
              <Link href={`../${index + 1}/seongho`}>DAY {index + 1}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DayDisplay;
