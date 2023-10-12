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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
          dolorum hic, perspiciatis consequuntur quam in earum excepturi iste
          porro qui incidunt nemo enim aperiam? Voluptatum iure hic vel repellat
          atque.
        </p>
      </div>
    </div>
  );
};
