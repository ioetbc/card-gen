import React from "react";
import Image from "next/image";
import {MENU_ITEMS} from "../constants";

type HeaderProps = {
  headerOpen: boolean;
  setHeaderOpen: (value: boolean) => void;
};

export const Header = ({headerOpen, setHeaderOpen}: HeaderProps) => {
  return (
    <div
      className="py-4 border border-black"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between px-4">
        <Image src="/logo.svg" width={200} height={40} alt="logo" />
        <Image
          src="/menu.svg"
          width={40}
          height={40}
          alt="logo"
          className="cursor-pointer"
          onClick={() => setHeaderOpen(!open)}
        />
      </div>

      {headerOpen && (
        <div className="pt-4">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.label}
              className="text-sm text-black border-b border-black py-4 flex justify-between px-4"
              onClick={() => console.log("clicked", item.label)}
            >
              <div>{item.label}</div>
              <Image src="/arrow.svg" width={25} height={25} alt="logo" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
