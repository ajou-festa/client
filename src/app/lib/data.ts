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

export const fetchGamePlayers = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/game`,
      {
        next: {
          revalidate: 300,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch game players");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
