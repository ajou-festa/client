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
    <div className="w-[32.5rem] h-[45.5rem] flex flex-col items-center  relative rounded-[1.5rem] bg-white px-[1.2rem]">
      <ScheduleTitleWrapper />
      {/* <div className=" overflow-y-scroll w-[27.4rem] h-[22rem] px-[2.5rem]"> */}
      {stages.map((stage, index) => (
        <StageCurrentButton
          key={stage.id}
          startTime={stage.startTime}
          showName={stage.teamName}
        />
      ))}
      <div className="w-full h-[2.4rem] flex gap-[1.2rem] text-center font-bold  text-[1.6rem] px-[1.6rem] mt-[3rem] ">
        <div className="w-[5rem] h-[2.4rem] rounded-[5rem] text-center font-bold bg-brown-500 text-brown-100 text-[1.6rem]">
          상시
        </div>
        <div className="w-[24rem] h-[1.7rem]  text-center font-bold text-brown-500 text-[1.6rem]">
          아주대학교 중앙동아리 AMI 전시
        </div>
      </div>
      {/* </div> */}
      {/* <ScheduleGradient className="absolute bottom-0" /> */}
    </div>
  );
};

export default Schedule;
