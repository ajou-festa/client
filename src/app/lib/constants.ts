import { PubLocations } from "./types";

const FESTIVAL_DATE = ["2024-02-18", "2024-02-19", "2024-02-20"];

const SECTION_LIST = [
  {
    section: "seongho1",
    name: "성호관 앞",
    image: "/seongho1.png",
  },
  {
    section: "seongho2",
    name: "성호관 테라스 옆",
    image: "/seongho2.png",
  },
  {
    section: "theater",
    name: "노천극장",
    image: "/theater.png",
  },
  {
    section: "library",
    name: "도서관",
    image: "/library.png",
  },
  {
    section: "parking",
    name: "도서관 주차장",
    image: "/parking.png",
  },
  {
    section: "yard1",
    name: "가온마당 A구역",
    image: "/yard1.png",
  },
  {
    section: "yard2",
    name: "가온마당 B구역",
    image: "/yard2.png",
  },
];

const PUB_LOCATIONS: PubLocations = {
  // day -> 1, 2, 3
  // section -> seongho1, seongho2, library, parking, theater, yard1, yard2
  // 각각의 장소는 location_id(ex. 1, 2, 총1 등)과 section에 해당하는 map에 대한 절대 좌표, rotate을 가지고 있음.
  1: {
    seongho1: [
      {
        location: "1",
        x: 10,
        y: 10,
        rotate: 0,
      },
      {
        location: "2",
        x: 10,
        y: 60,
        rotate: 0,
      },
      {
        location: "3",
        x: 10,
        y: 110,
        rotate: 20,
      },
      {
        location: "4",
        x: 10,
        y: 160,
        rotate: 0,
      },
      {
        location: "5",
        x: 10,
        y: 210,
        rotate: 0,
      },
    ],
    seongho2: [
      {
        location: "6",
        x: 30,
        y: 30,
        rotate: 0,
      },
      {
        location: "7",
        x: 40,
        y: 40,
        rotate: 0,
      },
      {
        location: "총1",
        x: 50,
        y: 50,
        rotate: 10,
      },
    ],
    library: [
      {
        location: "3",
        x: 40,
        y: 40,
        rotate: 0,
      },
    ],
    parking: [
      {
        location: "4",
        x: 50,
        y: 50,
        rotate: 0,
      },
      {
        location: "총학1",
        x: 60,
        y: 60,
        rotate: 0,
      },
    ],
    theater: [
      {
        location: "5",
        x: 60,
        y: 60,
        rotate: 0,
      },
    ],
    yard1: [
      {
        location: "6",
        x: 70,
        y: 70,
        rotate: 0,
      },
    ],
    yard2: [
      {
        location: "7",
        x: 80,
        y: 80,
        rotate: 0,
      },
    ],
  },
  2: {},
  3: {},
};

export { FESTIVAL_DATE, SECTION_LIST, PUB_LOCATIONS };
