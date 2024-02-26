import { Place } from "@/app/lib/types";
import Image from "next/image";

const PlaceInfo = ({ place }: { place: Place }) => {
  return (
    <div className="w-[26.1rem] h-[15.9rem] flex-shrink-0 bg-white border border-brown-400 rounded-xl p-8 relative">
      <h1 className="w-[18.4rem] block text-2xl leading-4 font-bold text-blue-400 mb-2">
        {place && "boothId" in place && place.boothName}
        {place && "pubId" in place && place.pubName}
        {place && "clubId" in place && place.clubName}
      </h1>
      <span className="mt-2 text-lg font-normal text-blue-400 highlight">
        {/* {place.teamName} */}
      </span>
      <p className="mt-2 w-[18rem] text-lg font-light text-gray-300 overflow-auto">
        {/* {place.description} */}
      </p>
      <div className="absolute bottom-8 w-[calc(100%-4rem)] h-5 flex justify-between items-center">
        <div className="w-[4.6rem] h-[1.6rem] flex justify-center items-center rounded-xl bg-blue-100">
          {/* <span className="table-cell align-middle text-center text-base font-semibold text-blue-400 ">
            {place && "boothId" in place
              ? "운영시간"
              : place.isOpen
              ? "영업중"
              : "영업종료"}
          </span> */}
        </div>
        {place && "pubId" in place && (
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
        )}
      </div>

      <div className="absolute top-6 right-7 flex flex-col gap-1">
        <div className="w-[2.7rem] h-[2.7rem] rounded-full bg-blue-400 flex justify-center items-center">
          <span className="text-xl text-center font-bold text-white">
            {/* {place && "boothId" in place
              ? place.boothLocation
              : place.pubLocation} */}
          </span>
        </div>
        <a href={place.link} target="_blank" rel="noreferrer">
          <div className="w-[2.7rem] h-[2.7rem] rounded-full bg-gray-50 flex justify-center items-center"></div>
        </a>
      </div>
    </div>
  );
};

export default PlaceInfo;
