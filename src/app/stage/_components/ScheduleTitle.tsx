import React from "react";

const ScheduleTitle = ({ children }: { children: string }) => {
  return (
    <div className="h-full w-auto text-brown-500 text-[1.6rem] flex items-center font-bold">
      {children}
    </div>
  );
};

export default ScheduleTitle;
