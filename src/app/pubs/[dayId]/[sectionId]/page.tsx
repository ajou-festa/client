import DayDisplay from "./_components/dayDisplay";
import DateDisplay from "./_components/dateDisplay";
import { getCurrentDay } from "../../../lib/utils";
import { SECTION_LIST } from "../../../lib/constants";
import Map from "./_components/map";
import SectionBar from "./_components/sectionBar";
import PubNavigator from "./_components/pubNavigator";
import fetchPubs from "../../../lib/data";
import Modal from "../../../_commons/modal";

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

const PubsPage = async ({
  params,
}: {
  params: { dayId: string; sectionId: string };
}) => {
  // day가 쿼리스트링으로 넘어오지 않으면 오늘 날짜로 설정
  const selectedDay = Number(params.dayId) || getCurrentDay(new Date());
  // // section이 쿼리스트링으로 넘어오지 않으면 G-1로 설정
  const selectedSection = params.sectionId || "seongho1";

  // if (selectedDay === -1) {
  //   return <div>Invalid Date</div>;
  // }

  // if (!SECTION_LIST.some((s) => s.section === selectedSection)) {
  //   return <div>Invalid Section</div>;
  // }

  const pubs = await fetchPubs();
  // const totalPubs = await fetchPubs(selectedDay, selectedSection);

  return (
    <>
      <DateDisplay selectedDay={selectedDay} />
      <DayDisplay selectedDay={selectedDay} />
      <div className="flex mt-2 w-[33.4rem] h-[49.9rem] flex-col items-center rounded-xl overflow-hidden relative">
        <Map
          selectedDay={selectedDay}
          selectedSection={selectedSection}
          pubs={pubs}
        />
        {/* <PubNavigator pubs={pubs} /> */}
        <SectionBar
          selectedDay={selectedDay}
          selectedSection={selectedSection}
        />
        <Modal />
        {params.dayId}번째날의 {params.sectionId}섹션의 부스정보페이지입니다
      </div>
    </>
  );
};

export default PubsPage;
