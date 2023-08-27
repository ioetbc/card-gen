import React from "react";
import {AccordionItem} from "./accordion-item";
import {NavigatonItems} from "../types";

type AccordionProps = {
  data: NavigatonItems[];
};

export const Accordion: React.FC<AccordionProps> = ({data}) => {
  return (
    <div className="w-full rounded-lg">
      {data.map(({title, children, active, isComplete}, index) => (
        <AccordionItem
          key={index}
          title={title}
          active={active}
          isComplete={isComplete}
        >
          {children}
        </AccordionItem>
      ))}
    </div>
  );
};
