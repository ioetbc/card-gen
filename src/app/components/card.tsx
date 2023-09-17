import React, {useState} from "react";
import {PrimaryButton} from "./buttons/primary-button";

type ProductCardProps = {
  title: string;
  prompt: string;
  url?: string;
};

export const Card = ({url, prompt, title}: ProductCardProps) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="shadow-md">
      <div
        className="relative w-full aspect-square bg-center bg-no-repeat bg-cover border border-black"
        style={{backgroundImage: "url(/envelope.webp)"}}
      >
        <div className="absolute right-0 left-0 bottom-0 top-0 m-auto w-90 h-90 shadow-custom bg-white flex items-center justify-center">
          <div
            className="w-40 h-40 bg-center bg-no-repeat bg-cover"
            style={{backgroundImage: `url(${url})`}}
          ></div>
        </div>
      </div>
      <div className="p-4 border-l border-r border-black flex items-center pr-4  bg-primary">
        <h3 className="text-lg">{title}</h3>
      </div>
      {/* 
      <div className="border border-black px-4 py-4 flex flex-col gap-2 bg-white">
        <p className={`${!readMore ? "line-clamp-3" : ""} text-sm`}>{prompt}</p>
        <p className="underline text-xs" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show less" : "Show more"}
        </p>
      </div> */}
      <div className="border border-black px-4 py-4 flex flex-col gap-2 bg-primary">
        <PrimaryButton
          label="Customise"
          handleOnClick={() => console.log("clicked")}
        />
      </div>
    </div>
  );
};
