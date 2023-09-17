import Image from "next/image";
import React, {useState} from "react";
import {TUser} from "../types";
import {Button} from "./buttons/primary-button";

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  user?: TUser;
  prompt: string;
  hasBookmarked: boolean;
};

export const ProductCardV2 = ({
  image,
  title,
  price,
  user,
  prompt,
  hasBookmarked,
}: ProductCardProps) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="shadow-card rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
          // src="/placeholder.jpg"
          src={image}
          fill={true}
          alt="thing"
          className="rounded-t-xl "
        />
      </div>

      <div className="border border-gray-400 rounded-b-xl bg-white">
        <div className="border-b border-gray-200 px-4 flex items-center bg-white ">
          <div className="grid grid-cols-10 gap-4">
            <div className="flex items-center col-span-3 border-gray-200 border-r pr-4 py-4">
              <Image src="/price.png" width={100} height={100} alt="price" />
            </div>
            <div className="col-span-7 py-4 flex justify-between">
              <h3 className="text-lg">{title}</h3>
              <Image
                src={hasBookmarked ? "/bookmark-filled.svg" : "/bookmark.svg"}
                width={24}
                height={24}
                alt="price"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-4 flex flex-col gap-2">
          <p className={`${!readMore ? "line-clamp-3" : ""} text-sm`}>
            {prompt}
          </p>
          <p
            className="underline text-xs text-gray-400"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show less" : "Show more"}
          </p>
        </div>
        <div className="px-4 py-4 flex flex-col gap-2 border-t border-gray-200">
          <div className="flex gap-4 justify-end">
            {/* <Button
              label="Iterate"
              type="secondary"
              handleOnClick={console.log}
            /> */}
            <Button
              size="full"
              label="Customise"
              type="primary"
              handleOnClick={console.log}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// TODO = bookmark animation shake when removed do something else when added
// TODO = add a success / failure toast when bookmark added / removed
