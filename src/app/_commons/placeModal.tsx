"use client";

import useModalStore from "@/app/hooks/useModalStore";
import useSelectedLocationStore from "@/app/hooks/useSelectedLocationStore";
import { MapPinColor } from "../lib/constants";

const PlaceModal = () => {
  const { isModalOpen, modalContent, closeModal } = useModalStore();
  const { place, location } = useSelectedLocationStore();

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    closeModal();
  };

  return (
    <>
      {isModalOpen && place && location && (
        <div
          className="absolute w-full h-full flex flex-col justify-center items-center bg-transparentWhite-100 z-50"
          onClick={handleOutsideClick}
        >
          <div
            className="place-to-click bg-white"
            style={{
              top: `${location.y * 0.1}rem`,
              left: `${location.x * 0.1}rem`,
            }}
          >
            <span
              className={`text-2xl rotate-45 font-bold ${
                "section" in place && MapPinColor[place.section][1]
              }`}
            >
              {location.location.padStart(2, "0")}
            </span>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center transition-all animate-popUp duration-200 ease-in-out">
            <div className="w-full h-[33%] mt-12 flex justify-center items-center">
              {location.y >= 200 && location.y < 300 && (
                <div className="w-auto h-auto" onClick={stopPropagation}>
                  {modalContent}
                </div>
              )}
            </div>

            <div className="w-full h-[33%] flex justify-center items-center">
              {location.y >= 0 && location.y < 200 && (
                <div className="w-auto h-auto" onClick={stopPropagation}>
                  {modalContent}
                </div>
              )}
              {location.y >= 300 && location.y < 420 && (
                <div className="mb-16 w-auto h-auto" onClick={stopPropagation}>
                  {modalContent}
                </div>
              )}
            </div>
            <div className="w-full h-[33%] flex justify-center items-center"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlaceModal;
