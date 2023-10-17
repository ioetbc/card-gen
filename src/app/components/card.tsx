import React, {useRef, useState} from "react";
import Image from "next/image";
import {useAnimation} from "framer-motion";

import {TToast} from "../types";
import {useUserId} from "../hooks/use-user-id";
import {Tabs} from "./tabs";
import {Button} from "./buttons/primary-button";
import {PlaceholderInput} from "./inputs/placeholder-input";
import {Input} from "./inputs/input";

type CardProps = {
  id: string;
  image: string;
  checkoutURL: string;
  frontMessage: string;
  setFrontMessage: (value: string) => void;
  insideMessage: string;
  setInsideMessage: (value: string) => void;
};

export const Card = ({
  image,
  checkoutURL,
  id,
  frontMessage,
  setFrontMessage,
  insideMessage,
  setInsideMessage,
}: CardProps) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePurchase = () => {
    window.location.assign(checkoutURL);
  };

  return (
    <div ref={cardRef} className="w-full">
      {/* <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tab1Content={
          <div className="border bg-white shadow-card relative flex items-center justify-center h-[500px]">
            <div className="absolute top-8 w-4/5">
              <PlaceholderInput
                handleChange={(value) => console.log(value)}
                handleSubmit={() => console.log("submit")}
                placeholder="Happy birthday bitch!"
              />
            </div>
            <div className="relative w-full">
              <div className="h-full flex items-center justify-center">
                <Image src={image} width={200} height={200} alt="card image" />
              </div>
            </div>
          </div>
        }
        tab2Content={
          <div className="relative w-full aspect-square">
            <p className="bg-white w-full px-4 text-center">{insideMessage}</p>
          </div>
        }
      /> */}

      <div className="flex gap-8 flex-col">
        <div className="border bg-white shadow-card rounded-xl relative flex items-center justify-center h-[500px]">
          <div className="absolute top-8 w-4/5">
            <PlaceholderInput
              handleChange={(value) => console.log(value)}
              handleSubmit={() => console.log("submit")}
              placeholder="Happy birthday bitch!"
            />
          </div>
          <div className="relative w-full">
            <div className="h-full flex items-center justify-center">
              <Image src={image} width={200} height={200} alt="card image" />
            </div>
          </div>
        </div>

        <div className="border border-gray-200 bg-white rounded-xl shadow-card">
          <div className="border-b border-gray-200">
            <div className="p-4">
              <h2 className="text-xl">Card messages</h2>
            </div>
          </div>
          <div className="p-4">
            <div className="border border-black flex rounded-lg bg-white">
              <div className="py-3 px-4 bg-gray-200 border-r border-black rounded-s-lg w-full text-center">
                Front of card
              </div>
              <div className="py-3 px-4 w-full text-center rounded-lg">
                Inside of card
              </div>
            </div>
          </div>
          {/* <div className="border-b border-t border-gray-200">
            <div className="p-4">
              <h2 className="text-xl">Card messages</h2>
            </div>
          </div> */}

          <div className="p-4 flex gap-2 flex-col border-b border-gray-200">
            <p>Front message</p>
            <Input
              handleChange={(value) => console.log(value)}
              handleSubmit={() => console.log("submitted")}
              placeholder="Happy birthday Bob!"
              icon="search"
            ></Input>
          </div>
          <div className="p-4 flex gap-2 flex-col border-b border-gray-200">
            <p>Inside message</p>
            <Input
              handleChange={(value) => console.log(value)}
              handleSubmit={() => console.log("submitted")}
              placeholder="Dear Bob, Happy birthday you..."
              icon="search"
            ></Input>
          </div>
          <div className="flex justify-end p-4">
            <Button
              handleOnClick={() => console.log("search for postcode")}
              label="Add shipping"
              type="primary"
              disabled={false}
              loading={false}
            />
          </div>
        </div>

        {/* <div className="border border-gray-200 bg-white rounded-xl shadow-card">
          <div className="border-b border-gray-200">
            <div className="p-4">
              <h2 className="text-xl">Shipping details</h2>
            </div>
          </div>
          <div className="grid grid-cols-6 justify-items-end gap-4 p-4">
            <div className="col-span-4">
              <Input
                handleChange={(value) => console.log(value)}
                handleSubmit={() => console.log("submitted")}
                placeholder="SE267 9LF"
                icon="search"
              ></Input>
            </div>

            <div className="col-span-2">
              <Button
                handleOnClick={() => console.log("search for postcode")}
                label="Search"
                type="primary"
                disabled={false}
                loading={true}
              />
            </div>
          </div>
          {/* <div className="border-t border-gray-200">
            <div className="p-4">
              <p>address line 1</p>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <div className="p-4">
              <p>address line 2</p>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <div className="p-4">
              <p>address line 3</p>
            </div>
          </div>
          <div className="px-4 py-4 flex flex-col gap-2 border-t border-gray-200">
            <Button
              size="fit"
              label="Purchase"
              type="primary"
              handleOnClick={handlePurchase}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};
