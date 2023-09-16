import Image from "next/image";
import React from "react";

type TextAreaProps = {
  handleChange: (value: string) => void;
  placeholder: string;
  handleSubmit: () => void;
  icon: string;
  prompt: string;
};

// TODO = Make the input a textarea and expand in height as the user types
// TODO = Change text select for entire website e.g. copy and paste highlighting text

export const Input = ({
  handleChange,
  placeholder,
  handleSubmit,
  icon,
  prompt,
}: TextAreaProps) => {
  const handleOnClick = () => {
    handleSubmit();
    handleChange("");
  };

  return (
    <div className="relative border border-black w-full">
      <input
        onChange={(event) => handleChange(event.target.value)}
        className="w-full py-4 px-4 pr-10 border-none bg-transparent placeholder:text-sm placeholder:text-gray-400"
        placeholder={placeholder}
        value={prompt}
      />

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6">
        <Image
          src={`/${icon}.svg`}
          width={24}
          height={24}
          alt="logo"
          onClick={handleOnClick}
        />
      </div>
    </div>
  );
};
