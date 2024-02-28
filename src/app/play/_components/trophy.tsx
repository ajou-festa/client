import { GamePlayer } from "@/app/lib/types";
import FirstMedal from "@/public/medal.svg";
import SecondMedal from "@/public/medal2.svg";
import ThirdMedal from "@/public/medal3.svg";

const colors = {
  1: "bg-brown-500",
  2: "bg-brown-400",
  3: "bg-brown-300",
};

const Trophy = ({ rank, player }: { rank: 1 | 2 | 3; player: GamePlayer }) => {
  return (
    <div
      className={`flex flex-col items-center`}
      style={{
        transform: `translateY(${(rank - 2) * 2}rem)`,
      }}
    >
      <div className="w-[5.7rem] h-[5.7rem] center-content relative">
        {
          {
            1: <FirstMedal className="w-full h-full" />,
            2: <SecondMedal className="w-full h-full" />,
            3: <ThirdMedal className="w-full h-full" />,
          }[rank]
        }
        <span className="center-txt text-3xl font-bold text-brown-600 left-[47%]">
          {rank}위
        </span>
      </div>
      <div
        className={`center-content w-[10.5rem] h-[11.5rem] flex-shrink-0 ${colors[rank]} rounded-t-xl rounded-b-[8rem] relative`}
      >
        <span className="text-3xl font-bold text-brown-600 center-txt text-center top-24">
          {player.name}
          <br />
          <span className="text-2xl font-normal">{player.level} 년</span>
        </span>
      </div>
      <div
        className={`mt-2 w-[5.7rem] h-[2.8rem] ${colors[rank]} rounded-t-[5rem] rounded-b-md`}
      />
    </div>
  );
};

export default Trophy;
