import { Pub } from "@/app/lib/types";
import Image from "next/image";

const PubInfo = ({ pub }: { pub: Pub }) => {
  return (
    <div className="w-[26.1rem] h-[15.9rem] flex-shrink-0 bg-white border border-blue-400 rounded-xl p-8 relative">
      <h1 className="w-[18.4rem] block text-2xl leading-4 font-bold text-blue-400 mb-2">
        {pub.pubName}
      </h1>
      <span className="mt-2 text-lg font-normal text-blue-400 highlight">
        {pub.teamName}
      </span>
      <p className="mt-2 w-[18rem] text-lg font-light text-gray-300 overflow-auto">
        {pub.description}
      </p>
      <div className="absolute bottom-8 w-[calc(100%-4rem)] h-5 flex justify-between items-center">
        <div className="w-[4.6rem] h-[1.6rem] flex justify-center items-center rounded-xl bg-blue-100">
          <span className="table-cell align-middle text-center text-base font-semibold text-blue-400 ">
            운영중
          </span>
        </div>
        <div className="w-auto flex justify-between items-center">
          <span className="align-middle text-center text-base font-semibold text-blue-400 mr-[0.8rem]">
            예약하기
          </span>
          <Image
            src="/blue-right-arrow.svg"
            width={4}
            height={6}
            alt="arrow-right"
          />
        </div>
      </div>

      <div className="absolute top-8 right-8 flex flex-col gap-1">
        <div className="w-[2.7rem] h-[2.7rem] rounded-full bg-blue-400 flex justify-center items-center">
          <span className="text-sm text-center font-bold text-white">
            {pub.pubLocation}
          </span>
        </div>
        <a href={pub.link} target="_blank" rel="noreferrer">
          <div className="w-[2.7rem] h-[2.7rem] rounded-full bg-gray-50 flex justify-center items-center"></div>
        </a>
      </div>
    </div>
  );
};

export default PubInfo;
