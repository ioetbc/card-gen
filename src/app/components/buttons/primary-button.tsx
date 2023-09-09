import React from "react";

type PrimaryButtonProps = {
  label: string;
  disabled?: boolean;
  handleOnClick: () => void;
  icon?: React.ReactNode;
};

export const PrimaryButton = ({
  disabled = false,
  handleOnClick,
  label,
  icon,
}: PrimaryButtonProps) => {
  return (
    <button
      className={`text-white py-4 px-12 rounded-md shadow-inner w-full ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${disabled ? "bg-gray-800" : "bg-black"}`}
      onClick={handleOnClick}
      disabled={disabled}
    >
      <div className="relative">
        {label}
        {icon && (
          <div style={{position: "absolute", right: 8, top: 0}}>{icon}</div>
        )}
      </div>
    </button>
  );
};
