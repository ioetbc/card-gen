import Image from "next/image";
import React from "react";
import {Skeleton} from "./skeleton";

type CardProps = {
  url?: string | null;
  loading: boolean;
  handleProductChange: ({url, title}: {url: string; title: string}) => void;
};

export const Card = ({url, handleProductChange}: CardProps) => {
  console.log("Card render", url);

  const handleCardClick = () => {
    if (!url) return;
    handleProductChange({url, title: "some title GPT"});
  };

  return (
    <div
      className="bg-white cursor-pointer shadow-xl md:shadow-2xl p-16 md:h-[700px] md:w-[500px] flex items-center justify-center"
      onClick={handleCardClick}
    >
      {url ? (
        <Image src={url} width={256} height={256} alt="card" />
      ) : (
        <Skeleton />
      )}
    </div>
  );
};
