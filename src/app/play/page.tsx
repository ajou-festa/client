import { fetchGamePlayers } from "../lib/data";
import { dummyPlayer } from "../lib/placeholder-data";
import RefreshButton from "./_components/refreshButton";
import Trophy from "./_components/trophy";
import dynamic from "next/dynamic";

const Fireworks = dynamic(() => import("./_components/firework"), {
  ssr: false,
});

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "공기놀이",
  description: "공기놀이 대회 | 동화",
};

const PlayPage = async () => {
  const { players, currentTime } = await fetchGamePlayers();

  return (
    <>
      <div className="flex justify-between items-center gap-2">
        <RefreshButton tag={"game"} />
        <span className="font-normal text-2xl text-brown-500">{`${currentTime} 기준`}</span>
      </div>
      <h1 className="text-3xl text-brown-600 font-bold mt-4">
        실시간 공기놀이 순위
      </h1>
      <div className="w-full h-[28rem] relative flex justify-center items-center">
        <div className="w-fit flex gap-4">
          <Trophy rank={2} player={players[1] ? players[1] : dummyPlayer} />
          <Trophy rank={1} player={players[0] ? players[0] : dummyPlayer} />
          <Trophy rank={3} player={players[2] ? players[2] : dummyPlayer} />
        </div>
        <span className="absolute top-16 right-2 text-red-500 font-bold text-2xl animate-pulse duration-300">
          LIVE
        </span>
      </div>

      <h2 className="text-3xl text-brown-500 font-bold mb-4">공기놀이 대회</h2>
      <div className="w-[30rem] h-[16rem] flex flex-col justify-center items-center bg-white rounded-lg  text-xl text-brown-500 relative ">
        <p className=" font-normal highlight-2 text-center">
          공기놀이 대회에 참가하여
        </p>
        <p className=" font-normal highlight-2 text-center mt-2">
          상품을 차지하세요!
        </p>
        <p className=" font-semibold text-center mt-4">
          순위 내에 들면 상품을 드립니다.
        </p>
        <div className="flex justify-between items-start mt-4">
          <div className="w-12 h-6 bg-brown-500 rounded-full flex justify-center items-center">
            <span className="text-base text-white font-normal">일시</span>
          </div>
          <p className="text-brown-500 font-normal ml-2">
            3.4(월) - 3.5(화) 양일간
            <br />
            각각 17시까지
          </p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="w-12 h-6 bg-brown-500 rounded-full flex justify-center items-center">
            <span className="text-base text-white font-normal">장소</span>
          </div>
          <p className="text-brown-500 font-normal ml-2">
            동아리연합회 본부 부스
          </p>
        </div>

        <div className="absolute border bottom-0 w-[19rem] border-brown-500" />
      </div>

      <Fireworks />
    </>
  );
};

export default PlayPage;
