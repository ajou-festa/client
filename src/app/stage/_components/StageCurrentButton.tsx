import React from "react";

interface StagePropTypes {
  showName: string;
  startTime: string;
}

const StageCurrentButton = ({ showName, startTime }: StagePropTypes) => {
  return (
    //현공연 text-blue-400 bg-white px-[1.6rem]
    <div className="w-[22.4rem] h-[3.6rem] flex justify-between items-center rounded-[0.5rem] font-bold text-brown-500 px-[1.6rem] ">
      {/* 현공연  bg-blue-100 */}
      <div className="w-[5.2rem] h-[1.8rem] rounded-[5rem] text-center font-bold bg-brown-200 text-brown-500 text-[1.2rem]">
        {startTime}
      </div>
      <div className="w-[10.8rem] text-center text-[1.4rem]">{showName}</div>
    </div>
  );
};

export default StageCurrentButton;
