import Image from "next/image";
import React, {useEffect, useRef} from "react";

type TextAreaProps = {
  handleChange: (value: string) => void;
  placeholder: string;
  handleSubmit: () => void;
  icon?: string;
  value?: string;
};

// TODO = Make the input a textarea and expand in height as the user types
// TODO = Change text select for entire website e.g. copy and paste highlighting text

export const Input = ({
  handleChange,
  placeholder,
  handleSubmit,
  icon,
  value,
}: TextAreaProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 600);

    return () => clearTimeout(timeout);
  }, [inputRef]);

  const handleOnClick = () => {
    handleSubmit();
    handleChange("");
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        onChange={(event) => handleChange(event.target.value)}
        className="border border-black rounded-lg w-full py-4 px-4 pr-10 bg-white placeholder:text-sm placeholder:text-gray-400"
        placeholder={placeholder}
        value={value}
      />

      {icon && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <Image
            src={`/${icon}.svg`}
            width={20}
            height={20}
            alt="logo"
            onClick={handleOnClick}
          />
        </div>
      )}
    </div>
  );
};
