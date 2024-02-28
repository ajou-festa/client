import Image from "next/image";
import { DONGBAK_SECTION_LIST, DONGBAK_LOCATIONS } from "@/app/lib/constants";
import { Place, PlaceLocation } from "@/app/lib/types";
import { getPlaceByLocation } from "@/app/lib/utils";
import MapIcon from "./mapIcon";

interface MapProps {
  selectedDay: number;
  selectedSection: "A" | "B" | "C" | "D";
  places: Place[];
}

const Map = ({ selectedDay, selectedSection, places }: MapProps) => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={DONGBAK_SECTION_LIST[selectedSection].image}
        alt={DONGBAK_SECTION_LIST[selectedSection].name}
        fill={true}
        sizes="(max-width: 60rem) 100vw, 40rem"
        priority
      />
      {places &&
        "clubId" in places[0] &&
        DONGBAK_LOCATIONS[selectedDay][selectedSection] &&
        DONGBAK_LOCATIONS[selectedDay][selectedSection].map(
          (location: PlaceLocation) => (
            <div
              key={location.location}
              className="animate-bounce origin-center"
            >
              <MapIcon
                placeLocation={location}
                place={getPlaceByLocation(places, location)}
              />
            </div>
          ),
        )}
    </div>
  );
};

export default Map;
