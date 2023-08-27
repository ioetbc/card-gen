import Image from "next/image";
import React from "react";
import {Skeleton} from "./skeleton";

type CardProps = {
  url?: string | null;
  loading: boolean;
  handleClick: () => void;
  handleSelection: ({url, title}: {url: string; title: string}) => void;
};

export const Card = ({url, handleClick, handleSelection}: CardProps) => {
  console.log("Card render", url);

  const handleCardClick = () => {
    if (!url) return;

    handleSelection({url, title: "some title GPT"});
    handleClick();
  };
  return (
    <div
      className="bg-white cursor-pointer shadow-2xl p-16 md:h-[700px] md:w-[500px] flex items-center justify-center"
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
