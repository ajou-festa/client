"use client";

import useInitStore from "@/app/hooks/useInitStore";
import EntireMap from "@/public/entire-map.svg";
import Exit from "@/public/exit.svg";
import Image from "next/image";
import Link from "next/link";

const Tutorial = () => {
  const { isInit, setIsInit } = useInitStore();

  return (
    <div className="flex mt-2 w-[33.4rem] h-[49.9rem] flex-col items-center rounded-xl overflow-hidden relative">
      <Image
        src="/wholeMap.png"
        alt="wholeMap"
        width={1000}
        height={1000}
        priority
      />
      <Link href="/dongbak/1/A">
        <div className="absolute top-[9rem] left-[4rem] w-40 h-40 rounded-full flex justify-center items-center border-2 border-blue-400 animate-pulse">
          <span className="text-3xl font-bold text-blue-400">A</span>
        </div>
      </Link>
      <Link href="/dongbak/1/B">
        <div className="absolute top-[26rem] left-[13rem] w-36 h-36 rounded-full flex justify-center items-center border-2 border-blue-400 animate-pulse">
          <span className="text-3xl font-bold text-blue-400">B</span>
        </div>
      </Link>
      <Link href="/dongbak/1/C">
        <div className="absolute top-[21rem] left-[5rem] w-36 h-36 rounded-full flex justify-center items-center border-2 border-blue-400 animate-pulse">
          <span className="text-3xl font-bold text-blue-400">C</span>
        </div>
      </Link>
      <Link href="/dongbak/1/D">
        <div className="absolute top-[10rem] left-[16.5rem] w-40 h-40 rounded-full flex justify-center items-center border-2 border-blue-400 animate-pulse">
          <span className="text-3xl font-bold text-blue-400">D</span>
        </div>
      </Link>

      {isInit && (
        <div className="absolute w-full h-full flex justify-center items-center bg-transparentWhite-100 z-50">
          <div className="flex flex-col justify-center items-center ">
            <p className="text-3xl text-blue-400 font-semibold text-center leading-[3rem]  animate-pulse">
              탐색하고 싶은 장소를
              <br />
              터치해주세요!
            </p>
            <button
              className="w-[6rem] h-[2.8rem] bg-blue-400 text-white px-4 py-2 rounded-full mt-6 font-normal text-xl text-center animate-none opacity-90"
              onClick={() => setIsInit(false)}
            >
              <span className="text-2xl font-norma">확인</span>
            </button>
          </div>
        </div>
      )}
      {!isInit && (
        <div className="absolute bottom-0 w-full h-[5rem] flex flex-row justify-between items-center bg-transparentWhite-200 px-[2.4rem] py-4">
          <EntireMap />
          <span className="w-[13.8rem] font-normal text-3xl text-center text-blue-400">
            전체지도
          </span>
          <button onClick={() => setIsInit(false)}>
            <div className="flex flex-col items-center justify-center">
              <Exit />
              <span className="text-blue-400">그만보기</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
