import { FESTIVAL_DATE } from "./constants";
import { emptyBooth, emptyClub, emptyPub } from "./placeholder-data";
import { Pub, Booth, PlaceLocation, Place, Club } from "./types";

/**
 * 현재 날짜가 축제 기간 중 몇 번째 날인지 확인
 * @param {Date} date - 날짜
 * @returns {number} - 1, 2, 3 | -1
 */
export const getCurrentDay = (date: Date): number => {
  const currentDate = date.toISOString().slice(0, 10);

  return FESTIVAL_DATE.includes(currentDate)
    ? FESTIVAL_DATE.findIndex((date) => date === currentDate) + 1
    : -1;
};

/**
 * 축제 기간 중 선택된 날이 오늘인지 확인
 * @param {number} day - 1, 2, 3
 * @returns {boolean} true | false
 */
export const isToday = (day: number): boolean => {
  const today = new Date().toISOString().slice(0, 10);
  return FESTIVAL_DATE[day - 1] === today;
};

/**
 * YYYY-MM-DD 형식의 날짜를 MM월 DD일 형식으로 변환
 * @param {string} date - "YYYY-MM-DD"
 * @returns {string} - "MM월 DD일"
 */
export const getFormattedDate = (date: string): string => {
  const [year, month, day] = date.split("-");
  return `${month}월 ${day}일`;
};

/**
 * pubs에서 location에 해당하는 pub을 찾아 반환 또는 emptyPub 반환
 * @param {Pub[]} pubs - pub 배열
 * @param {Location} location - location
 * @returns {Pub} pub | emptyPub
 */

export const getPlaceByLocation = (
  places: Place[],
  location: PlaceLocation,
): Place => {
  if (places && "boothId" in places[0]) {
    return (
      places.find(
        (place): place is Booth =>
          "boothId" in place && place.boothLocation === location.location,
      ) || emptyBooth
    );
  } else if (places && "pubId" in places[0]) {
    return (
      places.find(
        (place): place is Pub =>
          "pubId" in place && place.pubLocation === location.location,
      ) || emptyPub
    );
    //동박
  } else {
    return (
      places.find(
        (place): place is Club =>
          "clubId" in place && place.clubId.toString() === location.location,
      ) || emptyClub
    );
  }
};

export const getFormattedTime = (time: string): string => {
  const dateObject = new Date(time);
  const hours = dateObject.getHours().toString().padStart(2, "0");
  const minutes = dateObject.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const getLocationByPlace = (
  place: Place,
  locations: PlaceLocation[],
): PlaceLocation => {
  return (
    locations.find((location) => {
      if ("boothId" in place) {
        return location.location === place.boothLocation;
      } else if ("pubId" in place) {
        return location.location === place.pubLocation;
      } else {
        return location.location === place.clubId.toString();
      }
    }) || { location: "", x: 0, y: 0 }
  );
};
