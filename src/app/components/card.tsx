import Image from "next/image";
import React from "react";
import {Skeleton} from "./skeleton";

type CardProps = {
  url?: string | null;
  loading: boolean;
};

export const Card = ({url}: CardProps) => {
  console.log("Card render", url);
  return (
    <div className="bg-white cursor-pointer shadow-2xl p-16 h-[700px] w-[500px] flex items-center justify-center">
      {url ? (
        <Image src={url} width={256} height={256} alt="card" />
      ) : (
        <Skeleton />
      )}
    </div>
  );
};
