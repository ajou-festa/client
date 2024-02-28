"use client";

// import PubIc from "@/public/pubIcon.svg";
// import ReservationIc from "@/public/reservationIcon.svg";
// import ShowIc from "@/public/showIcon.svg";
// import IconHr from "@/public/iconHr.svg";
// import ClubIcon from "@/public/clubIcon.svg";
// import BoothIc from "@/public/boothIcon.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useIsFirstStore from "../hooks/useIsFirstStore";

import DongbakHr from "@/public/dongbakHr.svg";
import DongyeonActiveIcon from "@/public/dongyeonActiveIcon.svg";
import DongariActiveIcon from "@/public/dongariActiveIcon.svg";
import BuskingActiveIcon from "@/public/buskingActiveIcon.svg";
import PlayIcon from "@/public/playIcon.svg";
import DongyeonIcon from "@/public/dongyeonIcon.svg";
import DongariIcon from "@/public/dongariIcon.svg";
import BuskingIcon from "@/public/buskingIcon.svg";
import PlayActiveIcon from "@/public/playActiveIcon.svg";

const links = [
  { name: "버스킹", href: ["/stage"], icon: [BuskingIcon, BuskingActiveIcon] },
  {
    name: "동아리",
    href: ["/entire-map", "/dongbak"],
    icon: [DongariIcon, DongariActiveIcon],
  },
  {
    name: "동연소식",
    href: ["/dongwha"],
    icon: [DongyeonIcon, DongyeonActiveIcon],
  },
  { name: "공기놀이", href: ["/play"], icon: [PlayIcon, PlayActiveIcon] },
];

const FooterLinks = () => {
  const pathname = usePathname();
  const { setCameFromSection } = useIsFirstStore();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon[0];
        const LinkActive = link.icon[1];
        return (
          <Link
            key={link.name}
            href={link.href[0]}
            className={`flex flex-col flex-1 items-center justify-center m-0 gap-2`}
            onClick={() => setCameFromSection(false)}
          >
            {link.href.includes(pathname) && (
              <>
                <LinkActive />
                <DongbakHr className="absolute top-0" />
              </>
            )}
            {!link.href.includes(pathname) && <LinkIcon />}
            <span
              className={`text-lg ${
                link.href.includes(pathname)
                  ? "text-brown-500"
                  : "text-gray-200"
              }`}
            >
              {link.name}
            </span>
          </Link>
        );
      })}
    </>
  );
};

export default FooterLinks;
