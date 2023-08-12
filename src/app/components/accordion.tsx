// Accordion.tsx
import React, {ReactNode} from "react";
import {AccordionItem} from "./accordion-item";

type AccordionProps = {
  data: {
    title: string;
    children: ReactNode;
    active: boolean;
    isComplete: boolean;
  }[];
};

export const Accordion: React.FC<AccordionProps> = ({data}) => {
  return (
    <div className="w-full border border-grey-300 rounded-lg">
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
