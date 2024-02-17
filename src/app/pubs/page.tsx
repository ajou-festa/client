import DayDisplay from "./_components/dayDisplay";
import DateDisplay from "./_components/dateDisplay";
import { getCurrentDay } from "../lib/utils";
import { SECTION_LIST } from "../lib/constants";
import Map from "./_components/map";
import SectionBar from "./_components/sectionBar";

export const metadata = {
  title: "Pubs",
  description: "Pubs Page",
};

interface PubsPageProps {
  searchParams?: {
    day?: string;
    section?: string;
  };
}

const PubsPage = ({ searchParams }: PubsPageProps): JSX.Element => {
  // day가 쿼리스트링으로 넘어오지 않으면 오늘 날짜로 설정
  const selectedDay = Number(searchParams?.day) || getCurrentDay(new Date());
  // section이 쿼리스트링으로 넘어오지 않으면 G-1로 설정
  const selectedSection = searchParams?.section || "seongho1";

  if (selectedDay === -1) {
    return <div>Invalid Date</div>;
  }

  if (!SECTION_LIST.some((s) => s.section === selectedSection)) {
    return <div>Invalid Section</div>;
  }

  // const totalPubs = await fetchPubs(selectedDay, selectedSection);
  return (
    <>
      <DateDisplay selectedDay={selectedDay} />
      <DayDisplay selectedDay={selectedDay} />
      <div className="flex mt-2 w-[24rem] h-auto flex-col items-center rounded-xl overflow-hidden relative">
        <Map selectedDay={selectedDay} selectedSection={selectedSection} />
        <SectionBar
          selectedDay={selectedDay}
          selectedSection={selectedSection}
        />
      </div>
    </>
  );
};

export default PubsPage;