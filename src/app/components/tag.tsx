import React from "react";

type TagProps = {
  label: string;
};

export const Tag = ({label}: TagProps) => {
  return <p className="text-sm">{label}</p>;
};
