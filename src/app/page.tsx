import { redirect } from "next/navigation";

// "/"로 접속했을 때 "/entire-map"으로 리다이렉트
const page = () => {
  redirect("/entire-map");
};

export default page;
