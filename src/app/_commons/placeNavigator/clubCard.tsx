import { Club } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";

const imageUrls = {
  default: "/link-icon.svg",
  picture: "/picture-icon.svg",
  instagram: "/instagram-icon.svg",
};

const ClubCard = ({ place }: { place: Club }) => {
  return (
    <div className="w-[14.2rem] flex-shrink-0 relative bg-white rounded-2xl">
      <div className="w-full h-full flex flex-col items-start px-[1.2rem] py-4">
        <div className="w-[2.4rem] h-[1.8rem] rounded-full bg-brown-500 flex justify-center items-center">
          <span className="mt-[0.1rem] text-lg font-bold text-white">
            {place.clubId.toString().padStart(2, "0")}
          </span>
        </div>
        <span className="text-xl font-bold text-brown-500 mt-2">
          {place.clubName}
        </span>
        <span className="text-normal text-brown-500 highlight-2">
          {place.clubDetail}
        </span>
        <div className="mt-2 px-2 py-1 rounded-lg bg-brown-400">
          <span className="text-sm text-brown-500">
            {place.clubActivities[0]}
          </span>
        </div>
        <div className="mt-1 px-2 py-1 rounded-lg bg-brown-300">
          <span className="text-sm text-brown-500">
            {place.clubActivities[1]}
          </span>
        </div>
        <div className="mt-1 px-2 py-1 rounded-lg bg-brown-200">
          <span className="text-sm text-brown-500">
            {place.clubActivities[2]}
          </span>
        </div>

        <div className="absolute top-[1.2rem] right-[1.2rem] flex flex-col gap-1">
          <a href={place.link} target="_blank" rel="noreferrer">
            <Image
              src={imageUrls[place.linkIconId]}
              alt="동아리 홍보 링크"
              width={26}
              height={26}
            />
          </a>

          <a href={`tel:010-1234-5678`} onClick={(e) => e.stopPropagation()}>
            <Image
              src={"/call-icon.svg"}
              alt="동아리 임원 연락처"
              width={26}
              height={26}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
