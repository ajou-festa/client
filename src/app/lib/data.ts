import { GamePlayer } from "./types";
import { getKoreanTime } from "./utils";

export const fetchPubs = async (day: number, section: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/pubs?day=1&section=A4`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch pubs");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

//사용자 공연 목록 GET
export const fetchStageData = async (day: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/shows?day=${day}`,
      {
        next: {
          revalidate: 900, // 15분
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch pubs");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchBooths = async (day: number, section: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/boothes?day=1&section=seoungho1`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch booths");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDongbakBooths = async (day: number, section: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/clubs?day=${day}&section=${section}`,
      {
        next: {
          revalidate: 900, // 15분
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch dongbak booths");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// 요청한 시간도 같이 return하도록 수정
export const fetchGamePlayers = async (): Promise<{
  players: GamePlayer[];
  currentTime: string;
}> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/game`, {
    next: {
      tags: ["game"],
      revalidate: 300, // 5분
    },
  });

  if (!response.ok) {
    throw new Error("공기놀이 기록을 가져오는데 실패했습니다.");
  }

  const players = await response.json();
  // 현재 시간을 ISO 형식으로 가져오고, 한국시간대로 보여주기 위해 수정
  const currentTime = getKoreanTime();

  return { players, currentTime };
};
