import React from "react";
import StageCurrentButton from "./StageCurrentButton";
import { Stage } from "@/app/lib/types";
import { checkNow } from "./checkNow";

interface ScheduleProps {
  stages: Stage[];
  day: number;
  isToday: boolean;
}

const Schedule = ({ stages, isToday }: ScheduleProps) => {
  return (
    <div className="w-[32.5rem] flex flex-col items-center justify-center ">
      <div className="w-[31rem] pt-4 pb-8 h-fit flex flex-col items-center justify-center relative rounded-3xl bg-white px-[0.4rem] overflow-hidden">
        <div className="h-[4.5rem] w-full flex  justify-between mb-4 px-[1.3rem]">
          <div className="w-[13rem] h-[4rem] text-brown-500 text-[1.6rem] flex items-center justify-center font-bold border-b-2 border-brown-500">
            공연시간
          </div>
          <div className="w-[13rem] h-[4rem] text-brown-500 text-[1.6rem] flex items-center justify-center font-bold border-b-2 border-brown-500">
            공연팀
          </div>
        </div>
        {stages.map((stage, index) => (
          <StageCurrentButton
            key={stage.id}
            startTime={stage.startTime}
            endTime={stage.endTime}
            showName={stage.teamName}
            status={stage.status}
            isNow={checkNow(stage.startTime, stage.endTime)}
            isToday={isToday}
          />
        ))}
        <div className="w-full flex justify-between text-center font-bold  text-2xl px-[1.6rem] mt-[2rem] ">
          <div className="flex justify-center items-center w-[6rem] h-[2.4rem] rounded-[5rem] text-center font-bold bg-brown-500 text-brown-100">
            상시
          </div>
          <div className="ml-2 flex justify-center items-center  w-[24rem]  text-center font-semibold text-brown-500">
            아주대학교 중앙동아리 AMI 전시
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
