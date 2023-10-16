import React, {useRef, useState} from "react";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../firestore";

import Image from "next/image";
import {motion, useAnimation} from "framer-motion";

import {TToast} from "../types";
import {useUserId} from "../hooks/use-user-id";
import {Toast} from "./toast";
import {Tabs} from "./tabs";
import {Button} from "./buttons/primary-button";
import CardData from "./card-data";
import {PlaceholderInput} from "./inputs/placeholder-input";

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
  const [readMore, setReadMore] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [toast, setToast] = useState<TToast>({
    open: false,
    description: "",
    fill: "pink",
  });

  const controls = useAnimation();
  const userId = useUserId();
  const timerRef = useRef(0);

  const cardRef = useRef<HTMLDivElement>(null);

  const handleAddMessage = () => {
    if (!cardRef.current) return;

    cardRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveTab("tab2");
  };

  const handlePurchase = () => {
    window.location.assign(checkoutURL);
  };

  return (
    <div ref={cardRef} className="w-full">
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tab1Content={
          <div className="border bg-white shadow-card relative">
            <div className="absolute top-8 w-full flex items-center justify-center">
              <div className="w-4/5">
                <PlaceholderInput
                  handleChange={(value) => console.log(value)}
                  handleSubmit={() => console.log("submit")}
                  placeholder="Happy birthday bitch!"
                />
              </div>
            </div>
            <div className="relative w-full h-[450px]">
              <div className="p-4 h-full flex items-center justify-center">
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
      />
      <div className="border-t border-gray-200">
        <CardData
          setFrontMessage={setFrontMessage}
          setInsideMessage={setInsideMessage}
        />
      </div>
      <div className="px-4 py-4 flex flex-col gap-2 border-t border-gray-200">
        <Button
          size="fit"
          label="Purchase"
          type="primary"
          handleOnClick={handlePurchase}
        />
      </div>
    </div>
  );
};
