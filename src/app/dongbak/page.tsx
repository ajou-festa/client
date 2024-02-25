import DayDisplay from "@/app/_commons/dayDisplay";
import DateDisplay from "@/app/_commons/dateDisplay";
import Map from "@/app/_commons/map";
import SectionBar from "@/app/_commons/sectionBar";
import { getCurrentDay } from "@/app/lib/utils";
import PlaceNavigator from "@/app/_commons/placeNavigator";
import { fetchDongbakBooths } from "@/app/lib/data";
import { DONGBAK_SECTION_LIST } from "@/app/lib/constants";
import PlaceModal from "../_commons/placeModal";
import FirstVisitPage from "./_components/dongbak";

export const metadata = {
  title: "Dongbak",
  description: "Dongbak Page",
};

interface DongbakPageProps {
  searchParams?: {
    day?: string;
    section?: string;
  };
}

const DongbakBoothPage = ({ searchParams }: DongbakPageProps) => {
  // day가 쿼리스트링으로 넘어오지 않으면 오늘 날짜로 설정
  const selectedDay = Number(searchParams?.day) || getCurrentDay(new Date());
  // section이 쿼리스트링으로 넘어오지 않으면 G-1로 설정
  const selectedSection = searchParams?.section || "A";

  if (selectedDay === -1) {
    return <div>Invalid Date</div>;
  }

  if (!DONGBAK_SECTION_LIST.some((s) => s.section === selectedSection)) {
    return <div>Invalid Section</div>;
  }

  // fetchData 함수를 실행하고 그 결과를 대기함
  const fetchAndRenderData = async () => {
    const dongbak = await fetchDongbakBooths(selectedDay, selectedSection);

    return (
      <>
        <DateDisplay selectedDay={selectedDay} />
        <DayDisplay
          selectedDay={selectedDay}
          selectedSection={selectedSection}
        />
        <div className="flex mt-2 w-[33.4rem] h-[49.9rem] flex-col items-center rounded-xl overflow-hidden relative">
          <div className="z-100"></div>
          <Map
            selectedDay={selectedDay}
            selectedSection={selectedSection}
            places={dongbak}
          />
          <SectionBar
            selectedDay={selectedDay}
            selectedSection={selectedSection}
          />
          <PlaceNavigator
            selectedDay={selectedDay}
            selectedSection={selectedSection}
            places={dongbak}
          />
          <PlaceModal />
        </div>
      </>
    );
  };

  // fetchAndRenderData 함수를 실행하여 데이터를 렌더링함
  return fetchAndRenderData();
};

export default DongbakBoothPage;
