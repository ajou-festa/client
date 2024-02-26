import React from "react";
import ScheduleTitle from "./ScheduleTitle";

const ScheduleTitleWrapper = () => {
  return (
    <div className="h-[5.3rem] w-full flex  justify-between px-[4.1rem] mb-4">
      <div className="flex flex-col items-center">
        <ScheduleTitle>시간</ScheduleTitle>
        <hr className="h-[0.1rem] w-[5.1rem] rounded-[1rem] bg-brown-500"></hr>
      </div>
      <div className="flex flex-col items-center">
        <ScheduleTitle>공연팀</ScheduleTitle>
        <hr className="h-[0.1rem] w-[10.8rem] rounded-[1rem] bg-brown-500"></hr>
      </div>
    </div>
  );
};

export default ScheduleTitleWrapper;
