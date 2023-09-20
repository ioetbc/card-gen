import React from "react";

type BadgeProps = {
  label: string;
  active: boolean;
};

export const Badge = ({label, active}: BadgeProps) => {
  return (
    <div
      className={`border border-black rounded-2xl px-6 py-1 flex-shrink-0 ${
        active ? "bg-black text-white shadow-badge" : ""
      }`}
    >
      <p className="text-sm">{label}</p>
    </div>
  );
};
