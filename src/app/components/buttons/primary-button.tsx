import React from "react";

type PrimaryButtonProps = {
  label: string;
  disabled?: boolean;
  handleOnClick: () => void;
};

export const PrimaryButton = ({
  disabled = false,
  handleOnClick,
  label,
}: PrimaryButtonProps) => {
  return (
    <button
      className={`text-white py-4 px-16 w-60 rounded-md shadow-inner w-full ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${disabled ? "bg-gray-800" : "bg-black"}`}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
