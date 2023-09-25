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

type ProductCardProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  user?: TUser;
  prompt: string;
  hasBookmarked: boolean;
  cta?: ReactNode;
  activeTab: string;
  setActiveTab: (value: string) => void;
};

const wiggle = {
  start: {
    rotate: 0,
  },
  end: {
    rotate: 10,
    transition: {
      yoyo: 5, // yoyo means it will go back and forth 5 times.
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

function oneWeekAway() {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

export const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  ({hasBookmarked, image, title, cta, prompt, id}, ref) => {
    const [readMore, setReadMore] = useState(false);
    const [activeTab, setActiveTab] = useState("tab1");
    const [toast, setToast] = useState<TToast>({
      open: false,
      description: "",
      fill: "pink",
    });

    console.log("da id", id);

    const [bookmarked, setBookmarked] = useState(hasBookmarked);
    const controls = useAnimation();
    const userId = useUserId();

    const eventDateRef = useRef(new Date());
    const timerRef = useRef(0);

    const wiggleAnimation = {
      rotate: [-5, 5, -5, 5, -5, 0],
      transition: {duration: 0.4, ease: "easeInOut"},
    };

    const handleBookmarkClick = async () => {
      setBookmarked(!bookmarked);
      controls.start(wiggleAnimation);

      const cardRef = doc(db, "user", userId, "cards", id);

      try {
        await updateDoc(cardRef, {
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
          eventDateRef.current = oneWeekAway();

          setToast({
            open: true,
            description: !bookmarked
              ? "Card added to bookmarks"
              : "Card removed from bookmarks",
            fill: "pink",
          });
        }, 100);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <div ref={ref}>
        <div className="shadow-card rounded-xl">
          {/* <div className="relative w-full aspect-square">
          {image && (
            <Image
              // src="/placeholder.jpg"
              src={image}
              fill={true}
              alt="thing"
              className="rounded-t-xl "
            />
          )}
        </div> */}

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
                  <CardMessage activeTab={activeTab} />
                </div>
              }
            />
            <div className="border-b border-gray-200 px-4 flex items-center bg-white ">
              <div className="grid grid-cols-12 gap-4">
                <div className="flex items-center col-span-3 border-gray-200 border-r pr-4 py-4">
                  <Image
                    src="/price.png"
                    width={100}
                    height={100}
                    alt="price"
                  />
                </div>
                <div className="col-span-7 py-4 flex justify-between items-center">
                  <h3 className="text-lg">{title}</h3>
                </div>
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
              {cta && cta}
            </div>
          </div>
          <Toast setToast={setToast} toast={toast} />
        </div>
      </div>
    );
  }
);

// TODO = bookmark animation shake when removed do something else when added
// TODO = add a success / failure toast when bookmark added / removed
ProductCard.displayName = "ProductCard";
