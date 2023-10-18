import {TEditFrontCard} from "@/app/types";
import Image from "next/image";
import React from "react";

type AlignmentType = {
  message: TEditFrontCard; // make this a generic
  setMessage: (value: TEditFrontCard) => void; // make this a generic
};

export const Alignment = ({message, setMessage}: AlignmentType) => {
  return (
    <div className="flex gap-2">
      <div
        className={`border rounded-md ${
          message.alignment === "left" ? "border-black" : "border-transparent"
        } p-1`}
        onClick={() => setMessage({...message, alignment: "left"})}
      >
        <Image
          src="/text-align-left.svg"
          width={24}
          height={24}
          alt="align text left"
        />
      </div>
      <div
        className={`border rounded-md ${
          message.alignment === "center" ? "border-black" : "border-transparent"
        } p-1`}
        onClick={() => setMessage({...message, alignment: "center"})}
      >
        <Image
          src="/text-align-center.svg"
          width={24}
          height={24}
          alt="align text left"
        />
      </div>
      <div
        className={`border rounded-md ${
          message.alignment === "right" ? "border-black" : "border-transparent"
        } p-1`}
        onClick={() => setMessage({...message, alignment: "right"})}
      >
        <Image
          src="/text-align-right.svg"
          width={24}
          height={24}
          alt="align text left"
        />
      </div>
    </div>
  );
};
