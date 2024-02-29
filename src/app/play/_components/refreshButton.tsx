"use client";

import { useRouter } from "next/navigation";
import RefreshIcon from "@/public/refreshIcon.svg";
import { useState } from "react";

type Props = {
  tag: string;
};

export default function RevalidateButton({ tag }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    await fetch(`/api/revalidate?tag=${tag}`, {
      method: "POST",
    });

    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      router.refresh();
    }, 1000);
  };

  return (
    <button
      className={`${isClicked ? "animate-loading" : ""}`}
      onClick={handleClick}
    >
      <RefreshIcon />
    </button>
  );
}
