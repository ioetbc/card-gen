import React from "react";

type BadgeProps = {
  label: string;
};

export const Badge = ({label}: BadgeProps) => {
  return (
    <div className="border border-black rounded-2xl px-6 py-1 flex-shrink-0">
      <p className="text-sm">{label}</p>
    </div>
  );
};
