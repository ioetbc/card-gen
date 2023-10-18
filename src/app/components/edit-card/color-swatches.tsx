import {TEditFrontCard} from "@/app/types";
import React from "react";

type ColorSwatchesType = {
  message: TEditFrontCard; // make this a generic
  setMessage: (value: TEditFrontCard) => void; // make this a generic
};

export const ColorSwatches = ({message, setMessage}: ColorSwatchesType) => {
  return (
    <div className="flex gap-2">
      <div
        className={`border rounded-md ${
          message.color === "black" ? "border-black" : "border-transparent"
        } p-1`}
        onClick={() => setMessage({...message, color: "black"})}
      >
        <div className="w-6 h-6 bg-black rounded-md"></div>
      </div>
      <div
        className={`border rounded-md ${
          message.color === "blue" ? "border-black" : "border-transparent"
        } p-1`}
        onClick={() => setMessage({...message, color: "blue"})}
      >
        <div className="w-6 h-6 bg-blue-500 rounded-md"></div>
      </div>
      <div
        className={`border rounded-md ${
          message.color === "green" ? "border-black" : "border-transparent"
        } p-1`}
        onClick={() => setMessage({...message, color: "green"})}
      >
        <div className="w-6 h-6 bg-green-500 rounded-md"></div>
      </div>
      <div
        className={`border rounded-md ${
          message.color === "purple" ? "border-black" : "border-transparent"
        } p-1`}
        onClick={() => setMessage({...message, color: "purple"})}
      >
        <div className="w-6 h-6 bg-purple-500 rounded-md"></div>
      </div>
      <div
        className={`border rounded-md ${
          message.color === "red" ? "border-black" : "border-transparent"
        } p-1`}
        onClick={() => setMessage({...message, color: "red"})}
      >
        <div className="w-6 h-6 bg-red-500 rounded-md"></div>
      </div>
    </div>
  );
};
