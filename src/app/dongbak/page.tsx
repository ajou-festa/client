// import DayDisplay from "@/app/_commons/dayDisplay";
// import DateDisplay from "@/app/_commons/dateDisplay";
import Map from "@/app/_commons/map";
import SectionBar from "@/app/_commons/sectionBar";
import { getCurrentDay } from "@/app/lib/utils";
import PlaceNavigator from "@/app/_commons/placeNavigator";
import { fetchDongbakBooths } from "@/app/lib/data";
import PlaceModal from "../_commons/placeModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "동박 지도",
  description: "동박 지도 | 동화",
};

interface DongbakPageProps {
  searchParams?: {
    day?: string;
    section?: "A" | "B" | "C" | "D";
  };
}

const DongbakBoothPage = ({ searchParams }: DongbakPageProps) => {
  // day가 쿼리스트링으로 넘어오지 않으면 오늘 날짜로 설정
  const selectedDay = Number(searchParams?.day) || getCurrentDay(new Date());
  const selectedSection = searchParams?.section || "A";

  // if (selectedDay === -1) {
  //   return <div>Invalid Date</div>;
  // }

  // fetchData 함수를 실행하고 그 결과를 대기함
  const fetchAndRenderData = async () => {
    const dongbak = await fetchDongbakBooths(1, selectedSection);

    return (
      <>
        {/* <DateDisplay selectedDay={selectedDay} /> */}
        {/* <DayDisplay
          selectedDay={selectedDay}
          selectedSection={selectedSection}
        /> */}
        <div className="w-[23.4rem] h-[3.8rem] bg-brown-300 border-2 border-brown-500 flex items-center justify-center rounded-full mb-4">
          <span className="text-3xl font-bold text-center text-brown-500">
            동아리 박람회 지도
          </span>
        </div>
        <div className="flex mt-2 w-[33.5rem] h-[49.9rem] flex-col items-center border-2 border-brown-500 rounded-3xl overflow-hidden relative shadow-md">
          <Map
            selectedDay={1}
            selectedSection={selectedSection}
            places={dongbak}
          />
          <SectionBar selectedDay={1} selectedSection={selectedSection} />
          <PlaceNavigator
            selectedDay={1}
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
