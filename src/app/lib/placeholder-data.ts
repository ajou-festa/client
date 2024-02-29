// /v1/pubs?day?section
// day: "1" | "2" | "3"
// section: "seongho1" | "seongho2" | "library" | "parking" | "theater" | "yard1" | "yard2"

import { Booth, Club, GamePlayer, Pub } from "./types";

export const dummyBooths: Booth[] = [
  {
    boothId: null,
    boothName: "부스1",
    boothLocation: "1",
    description: "부스1 설명",
    teamName: "아주페스타",
    openTime: "10:00",
    closeTime: "23:00",
    link: "https://via.placeholder.com/150",
    linkIconId: "default",
  },
  {
    boothId: null,
    boothName: "부스2",
    boothLocation: "2",
    description: "부스2 설명",
    teamName: "아주페스타",
    openTime: "10:00",
    closeTime: "23:00",
    link: "https://via.placeholder.com/150",
    linkIconId: "default",
  },
  {
    boothId: null,
    boothName: "부스3",
    boothLocation: "3",
    description: "부스3 설명",
    teamName: "아주페스타",
    openTime: "10:00",
    closeTime: "23:00",
    link: "https://via.placeholder.com/150",
    linkIconId: "default",
  },
  {
    boothId: null,
    boothName: "부스4",
    boothLocation: "4",
    description: "부스4 설명",
    teamName: "아주페스타",
    openTime: "10:00",
    closeTime: "23:00",
    link: "https://via.placeholder.com/150",
    linkIconId: "default",
  },
  {
    boothId: null,
    boothName: "부스5",
    boothLocation: "5",
    description: "부스5 설명",
    teamName: "아주페스타",
    openTime: "10:00",
    closeTime: "23:00",
    link: "https://via.placeholder.com/150",
    linkIconId: "default",
  },
];

export const emptyPub: Pub = {
  pubId: null,
  pubName: "주점 구함",
  pubLocation: "x",
  description: "자리 비었음.",
  teamName: "아주페스타",
  menuImageSrc: "https://via.placeholder.com/150",
  link: "https://via.placeholder.com/150",
  linkIconId: "default",
  waitTeam: "100",
  isOpen: true,
};

export const emptyBooth: Booth = {
  boothId: null,
  boothName: "부스 구함",
  boothLocation: "x",
  description: "자리 비었음.",
  teamName: "아주페스타",
  openTime: "10:00",
  closeTime: "23:00",
  link: "https://via.placeholder.com/150",
  linkIconId: "default",
};

export const emptyClub: Club = {
  clubId: 0,
  clubName: "동아리 구함",
  clubDetail: "자리 비었음.",
  clubActivities: ["자리 비었음."],
  link: "https://www.instagram.com/ajou_club.union/",
  linkIconId: "default",
  section: "A",
  phoneNumber: "010-0000-0000",
};

export const dummyPlayer: GamePlayer = {
  studentId: 123456789,
  level: 0,
  name: "공석",
};
