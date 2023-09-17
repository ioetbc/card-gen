"use client";
import React from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";

import {MENU_ITEMS} from "../constants";

type HeaderProps = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  component?: React.ReactNode;
};

export const Header = ({menuOpen, setMenuOpen, component}: HeaderProps) => {
  const router = useRouter();

  return (
    <div
      className="py-4 border border-gray-400 relative bg-white z-50 rounded-xl shadow-md"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="px-4 pb-4 flex gap-4 flex-col">
        <div className="flex items-center justify-between">
          <Image
            src="/logo.svg"
            width={200}
            height={40}
            alt="logo"
            onClick={() => router.push("/")}
          />
          <Image
            src="/menu.svg"
            width={40}
            height={40}
            alt="logo"
            className="cursor-pointer"
            onClick={() => setMenuOpen(!open)}
          />
        </div>
      </div>
      <div className="border-t border-gray-200 pt-4">{component}</div>
      {menuOpen && (
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
