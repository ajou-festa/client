// import DayDisplay from "@/app/_commons/dayDisplay";
// import DateDisplay from "@/app/_commons/dateDisplay";
// import Map from "@/app/_commons/map";
// import SectionBar from "@/app/_commons/sectionBar";
// import { getCurrentDay } from "@/app/lib/utils";
// import { SECTION_LIST } from "@/app/lib/constants";
// import PlaceNavigator from "@/app/_commons/placeNavigator";
// import { dummyBooths } from "../lib/placeholder-data";
// import PlaceModal from "../_commons/placeModal";

// export const metadata = {
//   title: "Booths",
//   description: "Booths Page",
// };

// interface BoothsPageProps {
//   searchParams?: {
//     day?: string;
//     section?: string;
//   };
// }

// const BoothsPage = ({ searchParams }: BoothsPageProps) => {
//   // day가 쿼리스트링으로 넘어오지 않으면 오늘 날짜로 설정
//   const selectedDay = Number(searchParams?.day) || getCurrentDay(new Date());
//   // section이 쿼리스트링으로 넘어오지 않으면 G-1로 설정
//   const selectedSection = searchParams?.section || "seongho1";

//   if (selectedDay === -1) {
//     return <div>Invalid Date</div>;
//   }

//   if (!SECTION_LIST.some((s) => s.section === selectedSection)) {
//     return <div>Invalid Section</div>;
//   }

//   // fetchData 함수를 실행하고 그 결과를 대기함
//   const fetchAndRenderData = async () => {
//     // const booths = await fetchBooths(selectedDay, selectedSection);
//     const booths = dummyBooths;

//     return (
//       <>
//         <DateDisplay selectedDay={selectedDay} />
//         <DayDisplay
//           selectedDay={selectedDay}
//           selectedSection={selectedSection}
//         />
//         <div className="flex mt-2 w-[33.4rem] h-[49.9rem] flex-col items-center rounded-xl overflow-hidden relative">
//           <Map
//             selectedDay={selectedDay}
//             selectedSection={selectedSection}
//             places={booths}
//           />
//           <PlaceNavigator
//             selectedDay={selectedDay}
//             selectedSection={selectedSection}
//             places={booths}
//           />
//           <SectionBar
//             selectedDay={selectedDay}
//             selectedSection={selectedSection}
//           />
//           <PlaceModal />
//         </div>
//       </>
//     );
//   };

//   // fetchAndRenderData 함수를 실행하여 데이터를 렌더링함
//   return fetchAndRenderData();
// };

// export default BoothsPage;
