import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-brown-100">
      <Image
        src="/384.png"
        alt="동박페이지 로딩 중..."
        width={200}
        height={200}
        className="animate-pulse duration-700"
      />
    </div>
  );
};

export default Loading;
