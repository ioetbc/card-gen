import React from "react";

type TextAreaProps = {
  handleChange: (value: string) => void;
  placeholder: string;
};

export const TextArea = ({handleChange, placeholder}: TextAreaProps) => {
  return (
    <textarea
      onChange={(event) => handleChange(event.target.value)}
      className="border border-black rounded-md w-full py-4 px-4 min-h-[150px]"
      placeholder={placeholder}
    />
  );
};
