import React, {ReactNode, useRef, useState} from "react";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../firestore";

import Image from "next/image";
import {motion, useAnimation} from "framer-motion";

import {TToast, TUser} from "../types";
import {useUserId} from "../hooks/use-user-id";
import {Toast} from "./toast";
import {Tabs} from "./tabs";

type ProductCardProps = {
  id: string;
  image: string;
  title: string;
  price?: number;
  user?: TUser;
  prompt: string;
  hasBookmarked: boolean;
  cta?: ReactNode;
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

export const ProductCardV2 = ({
  id,
  image,
  title,
  price,
  user,
  prompt,
  hasBookmarked,
  cta,
}: ProductCardProps) => {
  const [readMore, setReadMore] = useState(false);
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<TToast>({
    open: false,
    description: "",
    fill: "pink",
  });

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
        saved: !hasBookmarked,
      });

      setOpen(false);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        eventDateRef.current = oneWeekAway();
        setOpen(true);
      }, 100);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="shadow-card h-full rounded-xl w-[250px] bg-something-100">
        <div className="h-full">
          <div className="relative w-full aspect-square">
            <Image
              src="/placeholder.jpg"
              // src={image}
              fill={true}
              alt="thing"
              className="rounded-t-xl "
            />
          </div>

          <div className="border border-gray-400 rounded-b-xl">
            <div className="border-b border-gray-200 px-4 flex items-center">
              <div className="grid grid-cols-4 gap-4 items-center">
                <div className="col-span-3 py-4 flex justify-between items-center">
                  <h3 className="text-lg line-clamp-1">{title}</h3>
                </div>

                {/* <motion.div
                  animate={controls}
                  className="w-[24px] h-[24px] relative col-span-1 flex items-center"
                >
                  <Image
                    src={bookmarked ? "/bookmark-filled.svg" : "/bookmark.svg"}
                    width={24}
                    height={24}
                    alt="bookmark icon"
                    onClick={handleBookmarkClick}
                  />
                </motion.div> */}
              </div>
            </div>
            <div className="px-4 py-4 flex flex-col gap-2">
              <p className={`${!readMore ? "line-clamp-2" : ""} text-sm`}>
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
        </div>
      </div>
      <Toast setToast={setToast} toast={toast} />
    </>
  );
};
