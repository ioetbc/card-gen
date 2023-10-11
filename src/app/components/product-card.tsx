import React, {ReactNode, forwardRef, useRef, useState} from "react";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../firestore";

import Image from "next/image";
import {motion, useAnimation} from "framer-motion";

import {TToast, TUser} from "../types";
import {useUserId} from "../hooks/use-user-id";
import {Toast} from "./toast";
import {Tabs} from "./tabs";
import {CardMessage} from "./card-message";
import {Button} from "./buttons/primary-button";
import {useCheckoutSession} from "../hooks/use-checkout-session";

type ProductCardProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  prompt: string;
  hasBookmarked: boolean;
  message: string;
  setMessage: (value: string) => void;
};

export const ProductCard = ({
  hasBookmarked,
  image,
  title,
  prompt,
  id,
  message,
  setMessage,
}: ProductCardProps) => {
  const [readMore, setReadMore] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [toast, setToast] = useState<TToast>({
    open: false,
    description: "",
    fill: "pink",
  });

  const [bookmarked, setBookmarked] = useState(hasBookmarked);
  const controls = useAnimation();
  const userId = useUserId();
  const timerRef = useRef(0);
  const checkout = useCheckoutSession();

  const cardRef = useRef<HTMLDivElement>(null);

  const wiggleAnimation = {
    rotate: [-5, 5, -5, 5, -5, 0],
    transition: {duration: 0.4, ease: "easeInOut"},
  };

  const handleAddMessage = () => {
    if (!cardRef.current) return;

    cardRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveTab("tab2");
  };

  console.log("checkout?.data?.url", checkout?.data?.url);

  const handlePurchase = () => {
    window.location.assign(checkout?.data?.url);
  };

  const handleBookmarkClick = async () => {
    setBookmarked(!bookmarked);
    controls.start(wiggleAnimation);

    const ref = doc(db, "user", userId, "cards", id);

    try {
      await updateDoc(ref, {
        saved: !bookmarked,
      });

      setToast({
        open: false,
        description: !bookmarked
          ? "Card added to bookmarks"
          : "Card removed from bookmarks",
        fill: "pink",
      });

      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setToast({
          open: true,
          description: !bookmarked
            ? "Card added to bookmarks"
            : "Card removed from bookmarks",
          fill: "pink",
        });
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div ref={cardRef} className="w-full">
      <div className="shadow-card rounded-xl">
        <div className="border rounded-xl border-gray-400 rounded-b-xl bg-white">
          <Tabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tab1Content={
              <div className="relative w-full aspect-square">
                <Image
                  // src="/placeholder.jpg"
                  src={image}
                  fill={true}
                  alt="thing"
                  className="rounded-t-xl "
                />
              </div>
            }
            tab2Content={
              <div className="relative w-full aspect-square p-4">
                <CardMessage
                  activeTab={activeTab}
                  setMessage={setMessage}
                  message={message}
                  id={id}
                />
              </div>
            }
          />
          <div className="border-b border-gray-200 px-4 flex items-center bg-white ">
            <div className="grid grid-cols-12 gap-4">
              <div className="flex items-center col-span-4 border-gray-200 border-r pr-4 py-4">
                <Image src="/price.svg" width={100} height={100} alt="price" />
              </div>
              <div className="col-span-7 py-4 flex justify-between items-center">
                <h3 className="text-lg">{title}</h3>
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
            <div className="flex justify-between">
              <>
                <div className="col-span-2 py-4 flex justify-end items-center">
                  <motion.div animate={controls}>
                    <Image
                      src={
                        bookmarked ? "/bookmark-filled.svg" : "/bookmark.svg"
                      }
                      width={24}
                      height={24}
                      alt="price"
                      onClick={handleBookmarkClick}
                    />
                  </motion.div>
                </div>
                {!message ? (
                  <Button
                    size="fit"
                    label="Add message"
                    type="primary"
                    handleOnClick={handleAddMessage}
                  />
                ) : (
                  <Button
                    size="fit"
                    label="Purchase"
                    type="primary"
                    handleOnClick={handlePurchase}
                  />
                )}
              </>
            </div>
          </div>
        </div>
        <Toast setToast={setToast} toast={toast} />
      </div>
    </div>
  );
};
