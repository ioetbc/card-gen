import React from "react";
import {motion} from "framer-motion";

type PrimaryButtonProps = {
  label: string;
  disabled?: boolean;
  handleOnClick: () => void;
  icon?: React.ReactNode;
  loading?: boolean;
  type: "primary" | "secondary";
  size?: "full" | "fit";
};

export const Button = ({
  disabled = false,
  handleOnClick,
  label,
  icon,
  loading = false,
  type,
  size,
}: PrimaryButtonProps) => {
  // Spinner animation
  const spinnerVariants = {
    spin: {
      rotate: 360,
    },
    initial: {
      rotate: 0,
    },
  };

  const isPrimary = type === "primary";

  return (
    <button
      className={` ${size === "full" ? "w-full" : "w-fit"} ${
        isPrimary
          ? "text-white bg-black border border-transparent"
          : "text-black bg-white border border-gray-400"
      } py-4 px-8 rounded-lg shadow-button ${
        disabled || loading
          ? "cursor-not-allowed bg-gray-800"
          : "cursor-pointer bg-black"
      }`}
      onClick={handleOnClick}
      disabled={disabled || loading}
    >
      <div className="relative flex justify-center items-center space-x-2">
        {loading ? (
          <motion.div
            variants={spinnerVariants}
            initial={{rotate: 0}}
            animate="spin"
            transition={{duration: 1, repeat: Infinity, ease: "linear"}}
          >
            🔄
          </motion.div>
        ) : (
          <div className="flex gap-2">
            <p className="text-sm">{label}</p>
            {icon && icon}
          </div>
        )}
      </div>
    </button>
  );
};
