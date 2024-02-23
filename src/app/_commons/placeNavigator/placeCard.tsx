import { Place } from "@/app/lib/types";

const PlaceCard = ({ place }: { place: Place }) => {
  return (
    <div className="w-[14.2rem] h-[11.8rem] flex-shrink-0 relative bg-white rounded-2xl">
      <div className="w-full h-full flex flex-col items-start p-[1.2rem]">
        <span className="text-xl font-bold text-blue-400">
          {place && "boothId" in place ? place.boothName : place.pubName}
        </span>
        <span className="text-normal text-blue-400 highlight">
          {place.teamName}
        </span>
        <p className="mt-1 w-[9.4rem] h-[4.8rem] flex-shrink-0 text-sm text-gray-400 overflow-hidden">
          {place.description}
        </p>

        {place && "boothId" in place ? (
          <span className="absolute bottom-2 w-full flex-shrink-0 text-[0.8rem] text-blue-400">
            <span className="font-semibold mr-2">운영시간</span>
            {place.openTime} ~ {place.closeTime}
          </span>
        ) : (
          ""
        )}

        <div className="absolute top-[1.2rem] right-[1.2rem] flex flex-col gap-1">
          <div className="w-[2.2rem] h-[2.2rem] rounded-full bg-blue-400 flex justify-center items-center">
            <span className="mt-[0.1rem] text-lg font-bold text-white">
              {place && "boothId" in place
                ? place.boothLocation
                : place.pubLocation}
            </span>
          </div>
          <a href={place.link} target="_blank" rel="noreferrer">
            <div className="w-[2.2rem] h-[2.2rem] rounded-full bg-gray-50 flex justify-center items-center"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
