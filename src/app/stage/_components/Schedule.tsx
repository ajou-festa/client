import React from "react";
import ScheduleGradient from "../../../../public/scheduleGradient.svg";
import ScheduleTitleWrapper from "./ScheduleTitleWrapper";
import StageCurrentButton from "./StageCurrentButton";
import { Stage } from "@/app/lib/types";

interface ScheduleProps {
  stages: Stage[];
}

const Schedule = ({ stages }: ScheduleProps) => {
  return (
    <div className="w-[32.5rem] h-[45.5rem] flex flex-col items-center relative rounded-[1.5rem] bg-white px-[1.2rem]">
      <ScheduleTitleWrapper />
      {/* <div className=" overflow-y-scroll w-[27.4rem] h-[22rem] px-[2.5rem]"> */}
      {stages.map((stage, index) => (
        <StageCurrentButton
          key={stage.id}
          startTime={stage.startTime}
          showName={stage.teamName}
        />
      ))}
      {/* </div> */}
      {/* <ScheduleGradient className="absolute bottom-0" /> */}
    </div>
  );
};

export default Schedule;
