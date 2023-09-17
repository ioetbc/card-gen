import Image from "next/image";
import React, {useState} from "react";
import {Tag} from "./tag";
import {User} from "./user";
import {TUser} from "../types";

type ProductCardProps = {
  title: string;
  prompt: string;
  url?: string;
  user: TUser;
};

export const ProductCard = ({url, prompt, user, title}: ProductCardProps) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="shadow-card">
      <div
        className="relative w-full aspect-square bg-center bg-no-repeat bg-cover"
        // style={{backgroundImage: "url(/envelope.webp)"}}
      >
        <Image src={url!} fill={true} alt="thing" />
        {/* <div className="absolute right-0 left-0 bottom-0 top-0 m-auto w-full h-full shadow-custom bg-white flex items-center justify-center">
          <div
            className="w-40 h-40 bg-center bg-no-repeat bg-cover"
            style={{backgroundImage: `url(${url})`}}
          ></div>
        </div>
      */}
      </div>
      <div className="p-4 flex items-center pr-4 bg-white">
        <h3 className="text-xl">{title}</h3>
      </div>
      <div className="border-t border-b border-black px-4 flex items-center bg-white">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center col-span-2 border-black border-r pr-4">
            <Tag label="130 sold" />
          </div>
          <User name={user.name} avatar={user.avatar} />
        </div>
      </div>
      <div className=" px-4 py-4 flex flex-col gap-2 bg-white">
        <p className={`${!readMore ? "line-clamp-3" : ""} text-sm`}>{prompt}</p>
        <p className="underline text-xs" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show less" : "Show more"}
        </p>
      </div>
    </div>
  );
};
