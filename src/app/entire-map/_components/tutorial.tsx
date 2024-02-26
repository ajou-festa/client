"use client";

import { useIsFirstStore } from "@/app/hooks/useIsFirstStore";

const Tutorial = () => {
  const { isFirst, setVisited } = useIsFirstStore();

  return (
    <>
      {isFirst && (
        <div className="absolute w-full h-full  z-20">
          <div className="w-full h-full flex justify-center items-center bg-transparentWhite-100">
            <div className="flex flex-col justify-center items-center ">
              <p className="text-3xl text-brown-500 font-semibold text-center leading-[3rem]  animate-pulse">
                탐색하고 싶은 장소를
                <br />
                터치해주세요!
              </p>
              <button
                className="w-[6rem] h-[2.8rem] bg-brown-500 text-white px-4 py-2 rounded-full mt-6 font-semibold text-xl text-center animate-none opacity-90"
                onClick={setVisited}
              >
                <span className="text-2xl font-normal">확인</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tutorial;
