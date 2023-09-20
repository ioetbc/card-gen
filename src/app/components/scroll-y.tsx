import React, {ReactNode} from "react";

type ScrollYProps = {
  children: ReactNode;
};

export const ScrollY = ({children}: ScrollYProps) => {
  return (
    <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
      <div className="flex flex-nowrap gap-4">{children}</div>
    </div>
  );
};
