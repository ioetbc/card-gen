import React from "react";

export const Skeleton = () => {
  return (
    <>
      <div
        role="status"
        className="h-full w-full bg-gray-300 rounded-md animate-pulse dark:bg-gray-700"
      ></div>
    </>
  );
};
