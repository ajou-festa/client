"use client";

import React, { useState } from "react";
import BoothIc from "@/public/boothIcon.svg";
import PubIc from "@/public/pubIcon.svg";
import ReservationIc from "@/public/reservationIcon.svg";
import ShowIc from "@/public/showIcon.svg";
import IconHr from "@/public/iconHr.svg";
import DongbakHr from "@/public/dongbakHr.svg";
import Link from "next/link";
import ClubIcon from "@/public/clubIcon.svg";
import YootActiveIcon from "@/public/yootActiveIcon.svg";
import DongyeonActiveIcon from "@/public/dongyeonActiveIcon.svg";
import DongariActiveIcon from "@/public/dongariActiveIcon.svg";
import BuskingActiveIcon from "@/public/buskingActiveIcon.svg";
import YootIcon from "@/public/yootIcon.svg";
import DongyeonIcon from "@/public/dongyeonIcon.svg";
import DongariIcon from "@/public/dongariIcon.svg";
import BuskingIcon from "@/public/buskingIcon.svg";

import { useEffect } from "react";
import useIsFirstVisitedStore from "../hooks/useIsFirstVisited";

const Footer = () => {
  const [selectedButton, setSelectedButton] = useState("");

  const handleClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  const isFirstVisited = useIsFirstVisitedStore(
    (state) => state.isFirstVisited
  );

  useEffect(() => {
    console.log(isFirstVisited, "d");
  }, [selectedButton]);

  return (
    <div className="absolute bottom-0 w-full ">
      <hr className="relative border-t-2 border-brown-200" />
      <div className="h-footer w-full flex justify-center items-center gap-10 px-[2.6rem]">
        <Link
          href={`/stage`}
          className={`flex flex-col flex-1 items-center justify-center m-0 gap-2 ${
            selectedButton === "버스킹" ? "text-brown-500" : "text-gray-200"
          }`}
          onClick={() => handleClick("버스킹")}
        >
          {selectedButton === "버스킹" && (
            <>
              <DongbakHr className="absolute top-0" />
              <BuskingActiveIcon />
            </>
          )}
          {selectedButton !== "버스킹" && <BuskingIcon />}

          <span className=" text-lg">버스킹</span>
        </Link>
        <Link
          href={`/entireMap`}
          className={`flex flex-col flex-1 items-center justify-center m-0 gap-2 ${
            selectedButton === "동아리" ? "text-brown-500" : "text-gray-200"
          } `}
          onClick={() => {
            handleClick("동아리");
          }}
        >
          {selectedButton === "동아리" && (
            <>
              <DongbakHr className="absolute top-0" />
              <DongariActiveIcon />
            </>
          )}

          {selectedButton !== "동아리" && <DongariIcon />}
          <span className="text-lg">동아리</span>
        </Link>
        <Link
          href={`/dongbak?day=1&section=A`}
          className={`flex flex-col flex-1 items-center justify-center m-0 gap-2 ${
            selectedButton === "동연소식" ? "text-brown-500" : "text-gray-200"
          }`}
          onClick={() => {
            handleClick("동연소식");
          }}
        >
          {selectedButton === "동연소식" && (
            <>
              <DongbakHr className="absolute top-0" />
              <DongyeonActiveIcon />
            </>
          )}
          {selectedButton !== "동연소식" && <DongyeonIcon />}
          <span className="text-lg">동연소식</span>
        </Link>
        <Link
          href={`/dongbak?day=1&section=A`}
          className={`flex flex-col flex-1 items-center justify-center m-0 gap-2 ${
            selectedButton === "윶놀이" ? "text-brown-500" : "text-gray-200"
          }`}
          onClick={() => {
            handleClick("윶놀이");
          }}
        >
          {selectedButton === "윶놀이" && (
            <>
              <DongbakHr className="absolute top-0" />
              <YootActiveIcon />
            </>
          )}
          {selectedButton !== "윶놀이" && <YootIcon />}
          <span className="text-[1.2rem]">윶놀이</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
