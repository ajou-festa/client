export type Pub = {
  pubId: null;
  pubName: string;
  pubLocation: string;
  description: string;
  teamName: string;
  menuImageSrc: string;
  link: string;
  linkIconId: "instagram" | "picture" | "default";
  waitTeam: string;
  isOpen: boolean;
};

export type Booth = {
  boothId: null;
  boothName: string;
  boothLocation: string;
  description: string;
  teamName: string;
  openTime: string;
  closeTime: string;
  link: string;
  linkIconId: "instagram" | "picture" | "default";
};

export type Club = {
  clubId: number;
  clubName: string;
  clubDetail: string;
  clubActivities: string[];
  link: string;
  linkIconId: "instagram" | "picture" | "default";
  section: "A" | "B" | "C" | "D";
};

export type Place = Pub | Booth | Club;

export type PlaceLocation = {
  location: string;
  x: number;
  y: number;
};

type Sections = {
  [key: string]: PlaceLocation[];
};

export type PlaceLocations = {
  [key: number]: Sections;
};

export interface Stage {
  id: null;
  teamName: string;
  startTime: string;
  endTime: string;
  status: string;
}

export interface GamePlayer {
  studentId: number;
  level: number;
  name: string;
}
