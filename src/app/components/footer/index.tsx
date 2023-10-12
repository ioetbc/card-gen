import Image from "next/image";
import React from "react";
import {FooterItem} from "./item";
import {FOOTER_ITEMS} from "@/app/constants";

export const Footer = () => {
  return (
    <div className="p-4 pt-8 bg-black text-white text-sm rounded-t-xl shadow-card">
      <div className="flex flex-col items-start">
        {FOOTER_ITEMS.map((item) => (
          <FooterItem key={item.label} label={item.label} url={item.url} />
        ))}
      </div>
      <div className="pt-8 pb-4 text-white flex gap-8 flex-col">
        <p>
          CardToTheFuture is a trading name of ioetbc/rubberducker ltd.
          (14120131) registered in England & Wales with their registered office
          at 76 Bushey Hill Road, Camberwell, London, United Kingdom, SE5 8QJ.
        </p>
      </div>
    </div>
  );
};
