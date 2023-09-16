"use client";
import React from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";

import {MENU_ITEMS} from "../constants";

type HeaderProps = {
  headerOpen: boolean;
  setHeaderOpen: (value: boolean) => void;
};

export const Header = ({headerOpen, setHeaderOpen}: HeaderProps) => {
  const router = useRouter();

  return (
    <div
      className="py-4 border border-black fixed  bg-white z-50 left-4 top-0 right-4"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between px-4">
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
