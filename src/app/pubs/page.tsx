import DayDisplay from "./_components/dayDisplay";
import DateDisplay from "./_components/dateDisplay";
import { getCurrentDay } from "../lib/utils";
import { SECTION_LIST } from "../lib/constants";
import Map from "./_components/map";
import SectionBar from "./_components/sectionBar";
import PubNavigator from "./_components/pubNavigator";
import fetchPubs from "../lib/data";
import Modal from "../_commons/modal";
// import { useIdStore } from "../hooks/useModalStore";

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

const PubsPage = ({ searchParams }: PubsPageProps) => {
  // day가 쿼리스트링으로 넘어오지 않으면 오늘 날짜로 설정
  const selectedDay = Number(searchParams?.day) || getCurrentDay(new Date());
  // section이 쿼리스트링으로 넘어오지 않으면 G-1로 설정
  const selectedSection = searchParams?.section || "seongho1";
  // const [pubs, setPubs] = useState([]);

  // const { dayId, sectionId, setDayId, setSectionId } = useIdStore();
  // console.log(dayId, "dayId", sectionId);

  if (selectedDay === -1) {
    return <div>Invalid Date</div>;
  }

  if (!SECTION_LIST.some((s) => s.section === selectedSection)) {
    return <div>Invalid Section</div>;
  }

  // const totalPubs = await fetchPubs(selectedDay, selectedSection);
  // const totalPubs = await fetchPubs();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const totalPubs = await fetchPubs();
  //       setPubs(totalPubs);
  //     } catch (error) {}
  //   };

  //   fetchData();
  // }, [selectedDay, selectedSection]);
  return (
    <>
      <DateDisplay selectedDay={selectedDay} />
      <DayDisplay selectedDay={selectedDay} />
      <div className="flex mt-2 w-[33.4rem] h-[49.9rem] flex-col items-center rounded-xl overflow-hidden relative">
        <Map
          selectedDay={selectedDay}
          selectedSection={selectedSection}
          // setDayId={setDayId}
          // setSectionId={setSectionId}

          // pubs={pubs}
        />
        {/* <PubNavigator pubs={pubs} /> */}
        <SectionBar
          selectedDay={selectedDay}
          selectedSection={selectedSection}
        />
        <Modal />
      </div>
    </>
  );
};

export default PubsPage;
