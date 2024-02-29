import Image from "next/image";
import SectionNavigator from "./_components/sectionNavigator";
import Tutorial from "./_components/tutorial";
import UnderBar from "./_components/underBar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "전체지도",
  description: "전체지도 | 동화",
};

const EntireMapPage = () => {
  // day가 쿼리스트링으로 넘어오지 않으면 오늘 날짜로 설정
  // // const selectedDay = Number(searchParams?.day) || getCurrentDay(new Date());

  // if (selectedDay === -1) {
  //   return <div>Invalid Date</div>;
  // }

  return (
    <>
      <div className="w-[23.4rem] h-[3.8rem] bg-brown-400 border-2 border-brown-500 flex items-center justify-center rounded-full mb-4">
        <span className="text-3xl font-bold text-center text-brown-500">
          동아리 박람회 지도
        </span>
      </div>
      <div className="flex mt-2 w-[33.5rem] h-[49.9rem] flex-col items-center border-2 border-brown-500 rounded-3xl overflow-hidden relative shadow-md">
        <Image
          src="/wholeMap.png"
          alt="wholeMap"
          width={1000}
          height={1000}
          priority
        />
        <UnderBar />
        <SectionNavigator />
        <Link href={`/dongwha`}>
          <Image
            src="/main-booth.png"
            alt="동아리연합회 부스"
            width={48}
            height={48}
            style={{
              width: "4.8rem",
              height: "4.8rem",
            }}
            priority
            className="absolute top-[26rem] right-[4rem]"
          />
        </Link>
        <Link href={`/stage`}>
          <Image
            src="/busking.png"
            alt="버스킹"
            width={56}
            height={48}
            style={{
              width: "5.6rem",
              height: "4.8rem",
            }}
            priority
            className="absolute top-[7rem] right-[5rem]"
          />
        </Link>
        <Image
          src="/exhibition.png"
          alt="전시"
          width={32}
          height={48}
          style={{
            width: "3.2rem",
            height: "4.8rem",
          }}
          priority
          className="absolute top-[4rem] right-[1rem]"
        />
        <Tutorial />
      </div>
    </>
  );
};

export default EntireMapPage;
