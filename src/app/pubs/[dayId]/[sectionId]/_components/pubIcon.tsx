"use client";

import { Pub, PubLocation } from "@/app/lib/types";
import useModalStore from "@/app/hooks/useModalStore";
import PubInfo from "./pubInfo";

const PubIcon = ({
  pubLocation,
  pub,
}: {
  pubLocation: PubLocation;
  pub: Pub;
}) => {
  const { openModal, setModalContent } = useModalStore();

  return (
    <div
      className="place-to-click z-20"
      style={{
        top: `${pubLocation.y * 0.1}rem`,
        left: `${pubLocation.x * 0.1}rem`,
        transform: `rotate(${pubLocation.rotate}deg)`,
      }}
      onClick={() => {
        setModalContent(<PubInfo pub={pub} />);
        openModal();
      }}
    >
      <span className="text-lg font-bold">{pubLocation.location}</span>
    </div>
  );
};

export default PubIcon;
