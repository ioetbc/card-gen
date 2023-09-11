import React from "react";
import {motion} from "framer-motion";

type PrimaryButtonProps = {
  label: string;
  disabled?: boolean;
  handleOnClick: () => void;
  icon?: React.ReactNode;
  loading?: boolean;
};

export const PrimaryButton = ({
  disabled = false,
  handleOnClick,
  label,
  icon,
  loading = false,
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

  return (
    <button
      className={`text-white py-4 px-12 rounded-md shadow-inner w-full ${
        disabled || loading ? "cursor-not-allowed" : "cursor-pointer"
      } ${disabled || loading ? "bg-gray-800" : "bg-black"}`}
      onClick={handleOnClick}
      // disabled={disabled || loading}
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
          <>
            {label}
            {icon && (
              <div style={{position: "absolute", right: 8, top: 0}}>{icon}</div>
            )}
          </>
        )}
      </div>
    </button>
  );
};
