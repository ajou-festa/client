"use client";

import useIsFirstStore from "@/app/hooks/useIsFirstStore";
import { useRouter } from "next/navigation";
import EntireMap from "@/public/entire-map.svg";
import Exit from "@/public/exit.svg";

const UnderBar = () => {
  const router = useRouter();
  const { cameFromSection } = useIsFirstStore();

  return (
    <>
      <div className="absolute w-full h-full">
        <div className="absolute bottom-0 w-full h-[5rem] flex flex-row justify-between items-center bg-transparentWhite-100 px-[2.4rem] py-4 z-10 border-brown-500">
          <EntireMap />
          <span className="w-[13.8rem] font-semibold text-3xl text-center text-brown-500">
            전체지도
          </span>
          <div>
            <button
              onClick={router.back}
              className={`flex flex-col items-center justify-center ${
                cameFromSection === true ? "visible" : "invisible"
              }`}
            >
              <Exit />
              <span className="text-brown-500">돌아가기</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderBar;
