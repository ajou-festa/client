import React from "react";

interface StagePropTypes {
  showName: string;
  startTime: string;
  endTime: string;
}

const StageCurrentButton = ({
  showName,
  startTime,
  endTime,
}: StagePropTypes) => {
  return (
    //현공연 text-blue-400 bg-white px-[1.6rem]
    <div className="w-[30rem] h-[5.1rem] flex justify-between items-center rounded-[0.5rem] font-bold text-brown-500 px-[1.6rem] ">
      {/* 현공연  bg-blue-100 */}
      <div className="w-[13rem] h-[2.5rem] rounded-[5rem] text-center font-bold bg-brown-200 text-brown-500 text-[1.6rem]">
        {startTime} ~ {endTime}
      </div>
      <div className="w-[11.9rem] text-center text-[1.6rem]">{showName}</div>
    </div>
  );
};

export default StageCurrentButton;
