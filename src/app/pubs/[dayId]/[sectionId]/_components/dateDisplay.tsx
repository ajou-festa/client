import { FESTIVAL_DATE } from "@/app/lib/constants";
import { isToday, getFormattedDate } from "@/app/lib/utils";
import React from "react";

const DateDisplay = ({ selectedDay }: { selectedDay: number }) => {
  if (selectedDay === -1 || selectedDay > FESTIVAL_DATE.length) {
    return null;
  }

  return (
    <div className="w-[7rem] p-4 flex justify-center items-center h-[2.1rem] flex-shrink-0 rounded-[3rem] bg-blue-700">
      <span className="table-cell align-middle text-blue-300 text-center text-lg font-semibold">
        {isToday(selectedDay)
          ? "TODAY"
          : getFormattedDate(FESTIVAL_DATE[selectedDay - 1])}
      </span>
    </div>
  );
};

export default DateDisplay;
