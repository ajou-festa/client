import React from "react";

interface StagePropTypes {
  showName: string;
  startTime: string;
  endTime: string;
  isNow: boolean;
  isToday: boolean;
  status: "SCHEDULED" | "IN_PROGRESS" | "DONE";
}

const StageCurrentButton = ({
  showName,
  startTime,
  endTime,
  status,
  isNow,
  isToday,
}: StagePropTypes) => {
  return (
    //현공연 text-blue-400 bg-white px-[1.6rem]
    <div
      className={`w-[30rem] h-[5.1rem] flex justify-between items-center rounded-2xl font-bold text-brown-500 px-[1.6rem] ${
        isNow === true && status !== "DONE" && isToday ? "bg-brown-500" : ""
      }`}
    >
      <div
        className={`flex justify-between w-[13rem] h-[2.5rem] rounded-[5rem] text-center font-bold text-brown-500 text-2xl items-center px-6 ${
          isNow === true && status !== "DONE" && isToday
            ? "bg-brown-100"
            : "bg-brown-200"
        }`}
      >
        <span className="block">{startTime}</span>
        <span className="block">-</span>
        <span className="block">{endTime}</span>
      </div>
      <div
        className={`w-[11.9rem] text-center text-[1.6rem] ${
          isNow === true && status !== "DONE" && isToday
            ? "text-white"
            : "text-brown-500"
        }`}
      >
        {showName}
      </div>
    </div>
  );
};

export default StageCurrentButton;
