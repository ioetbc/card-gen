import Image from "next/image";
import React, {useState} from "react";
import {Skeleton} from "./skeleton";
import {PrimaryButton} from "./buttons/primary-button";

type ProductCardProps = {
  url: string;
  prompt: string;
  user: {
    name: string;
    avatar: string;
  };
};

export const ProductCard = ({url, prompt, user}: ProductCardProps) => {
  const [readMore, setReadMore] = useState(false);

  const handleCardClick = () => {
    console.log("product card clicked");
  };

  return (
    <div>
      <div
        className="cursor-pointer relative w-full aspect-[9/14]"
        onClick={handleCardClick}
      >
        <div>
          <Image src={url} fill={true} alt="card" />
        </div>
      </div>
      <div className="border-l border-r border-black p-4">
        <h3 className="text-xl">Drinking at octoberfest</h3>
      </div>
      <div className="border border-black px-4 flex items-center">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center border-r border-black pr-4">
            <h3 className="text-xl col-span-1">£32</h3>
          </div>
          <div className="flex col-span-3 py-4">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={user.avatar}
                width={32}
                height={32}
                alt="user avatar"
              />
            </div>
            <p className="ml-2">{user.name}</p>
          </div>
        </div>
      </div>
      <div className="border-l border-r border-b border-black px-4 py-4 flex flex-col gap-2">
        <div className="flex gap-2">
          <p className={!readMore ? "line-clamp-2" : ""}>{prompt}</p>
          <Image src="/clipboard.svg" width={24} height={24} alt="logo" />
        </div>
        <p className="underline" onClick={() => setReadMore(!readMore)}>
          read more
        </p>
      </div>
    </div>
  );
};
