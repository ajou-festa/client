import MedalBackground from "@/public/medal.svg";
import { fetchGamePlayers } from "../lib/data";
import Trophy from "./_components/trophy";

const PlayPage = async () => {
  const players = await fetchGamePlayers();

  return (
    <>
      <h1 className="text-3xl text-brown-600 font-bold ">
        실시간 공기놀이 순위
      </h1>
      <div className="w-fit flex gap-4 my-14">
        <Trophy rank={2} player={players[1]} />
        <Trophy rank={1} player={players[0]} />
        <Trophy rank={3} player={players[2]} />
      </div>
      <h2 className="text-3xl text-brown-500 font-bold mb-4">
        공기놀이 대회 ?
      </h2>
      <div className="w-[30rem] h-[18rem] flex flex-col justify-center items-center bg-white rounded-lg p-8 text-xl text-brown-500 relative ">
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
    </>
  );
};

export default PlayPage;
