import React from "react";
import {FILTER_TYPES} from "../constants";
import {Badge} from "./badge";

export const Filters = () => {
  return (
    <div className="py-4 flex gap-4 flex-nowrap overflow-x-scroll w-full scrollbar-none">
      {FILTER_TYPES.map((filter) => (
        <Badge key={filter.value} label={filter.label} active={filter.active} />
      ))}
    </div>
  );
};
