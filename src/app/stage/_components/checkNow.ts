// 현재 한국 시간이 startTime과 endTime 사이에 있는지 확인하는 함수
// startTime, endTime의 예시 -> "11:00" "12:00"
export const checkNow = (startTime: string, endTime: string): boolean => {
  const now = new Date();
  const timezoneOffset = now.getTimezoneOffset() * 60000;
  const kstOffset = 9 * 60 * 60 * 1000;
  const currentDate = new Date(now.getTime() + timezoneOffset + kstOffset); // 한국 현재 시간 계산

  const today = currentDate.toISOString().split("T")[0]; // 현재 날짜 가져오기

  const start = new Date(`${today}T${startTime}:00.000+09:00`);
  const end = new Date(`${today}T${endTime}:00.000+09:00`);

  return start <= currentDate && currentDate <= end;
};
