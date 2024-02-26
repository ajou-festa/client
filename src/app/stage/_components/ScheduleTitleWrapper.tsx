import React from "react";
import ScheduleTitle from "./ScheduleTitle";

const ScheduleTitleWrapper = () => {
  return (
    <div className="h-[4.9rem] w-full flex  justify-between mb-4 px-[1.3rem]">
      <div className="flex flex-col items-center">
        <ScheduleTitle>공연시간</ScheduleTitle>
        <hr className="h-[0.1rem] w-[13rem] rounded-[1rem] bg-brown-500"></hr>
      </div>
      <div className="flex flex-col items-center">
        <ScheduleTitle>공연팀</ScheduleTitle>
        <hr className="h-[0.1rem] w-[13rem] rounded-[1rem] bg-brown-500"></hr>
      </div>
    </div>
  );
};

export default ScheduleTitleWrapper;
