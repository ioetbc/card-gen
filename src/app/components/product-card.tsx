import Image from "next/image";
import React, {useState} from "react";
import {Tag} from "./tag";
import {User} from "./user";
import {TUser} from "../types";

type ProductCardProps = {
  title: string;
  url: string;
  prompt: string;
  user: TUser;
};

export const ProductCard = ({url, prompt, user, title}: ProductCardProps) => {
  const [readMore, setReadMore] = useState(false);

  const handleCardClick = () => {
    console.log("product card clicked");
  };

  return (
    <div>
      <div className="shadow-md flex gap-8 flex-col justify-center items-center">
        <div
          className="cursor-pointer border border-black relative w-full aspect-[13/13] flex items-center justify-center"
          onClick={handleCardClick}
        >
          <Image src={url} fill alt="card" className="shadow-md" />
        </div>
      </div>
      <div className="p-4  border-l border-r border-black flex items-center pr-4">
        <h3 className="text-xl">{title}</h3>
      </div>
      <div className="border border-black px-4 flex items-center">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center col-span-2 border-r border-black pr-4">
            <h3 className="text-xl ">
              <Tag label="130 sold" />
            </h3>
          </div>
          {user && <User name={user.name} avatar={user.avatar} />}
        </div>
      </div>
      <div className="border-l border-r border-b border-black px-4 py-4 flex flex-col gap-2">
        {/* <div className="flex gap-4"> */}
        <p className={`${!readMore ? "line-clamp-3" : ""} text-sm`}>{prompt}</p>
        {/* <Image src="/clipboard.svg" width={24} height={24} alt="logo" /> */}
        {/* </div> */}
        <p className="underline text-xs" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show less" : "Show more"}
        </p>
      </div>
    </div>
  );
};
