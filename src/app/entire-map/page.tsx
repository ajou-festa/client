import DateDisplay from "../_commons/dateDisplay";
import DayDisplay from "../_commons/dayDisplay";
import { getCurrentDay } from "../lib/utils";

import Tutorial from "./_components/tutorial";

interface EntireMapPageProps {
  searchParams?: {
    day?: string;
    section?: string;
  };
}

const EntireMapPage = ({ searchParams }: EntireMapPageProps) => {
  // day가 쿼리스트링으로 넘어오지 않으면 오늘 날짜로 설정
  const selectedDay = Number(searchParams?.day) || getCurrentDay(new Date());

  if (selectedDay === -1) {
    return <div>Invalid Date</div>;
  }

  return (
    <>
      <DateDisplay selectedDay={selectedDay} />
      <DayDisplay selectedDay={selectedDay} />
      <Tutorial />
    </>
  );
};

export default EntireMapPage;
