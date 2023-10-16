import Image from "next/image";
import React, {useEffect, useRef} from "react";

type TextAreaProps = {
  handleChange: (value: string) => void;
  placeholder: string;
  handleSubmit: () => void;
  icon?: string;
};

// TODO = Make the input a textarea and expand in height as the user types
// TODO = Change text select for entire website e.g. copy and paste highlighting text

export const PlaceholderInput = ({
  handleChange,
  placeholder,
  handleSubmit,
  icon,
}: TextAreaProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // useEffect(() => {
  //   if (!inputRef.current) return;

  //   const timeout = setTimeout(() => {
  //     inputRef.current?.focus();
  //   }, 600);

  //   return () => clearTimeout(timeout);
  // }, [inputRef]);

  // const handleOnClick = () => {
  //   handleSubmit();
  //   handleChange("");
  // };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        onChange={(event) => handleChange(event.target.value)}
        className="border border-blue-600 w-full py-4 px-4 pr-10 bg-white placeholder:text-lg placeholder:text-gray-400"
        placeholder={placeholder}
      />

      <div className="absolute top-1 -right-2 bg-white transform -translate-y-1/2">
        <Image
          src={`/close.svg`}
          width={24}
          height={24}
          alt="logo"
          // onClick={handleOnClick}
        />
      </div>
    </div>
  );
};
