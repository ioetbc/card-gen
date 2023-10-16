import React, {ReactNode, forwardRef} from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {ChevronDownIcon} from "@radix-ui/react-icons";
import {Input} from "./inputs/input";

type CardDataProps = {
  setFrontMessage: (value: string) => void;
  setInsideMessage: (value: string) => void;
};

const CardData = ({setFrontMessage, setInsideMessage}: CardDataProps) => (
  <Accordion.Root className="w-full" type="single" collapsible>
    <AccordionItem value="item-1" className="bg-white border-b">
      <AccordionTrigger>Add message to the front</AccordionTrigger>
      <AccordionContent>
        <Input
          handleChange={(value) => setFrontMessage(value)}
          handleSubmit={() => console.log("submit")}
          placeholder="HAPPY BIRTHDAY BOB!"
        />
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2" className="bg-white border-b">
      <AccordionTrigger>Add message to the inside</AccordionTrigger>
      <AccordionContent>
        <Input
          handleChange={(value) => setInsideMessage(value)}
          handleSubmit={() => console.log("submit")}
          placeholder="Hey bob, hope you have a lovely birthday"
        />
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);

const AccordionItem = forwardRef<
  HTMLDivElement,
  {children: ReactNode; value: string; className: string}
>(({children, value, className}, forwardedRef) => (
  <Accordion.Item
    className={`overflow-hidden first:mt-0 first:rounded-t last:rounded-b ${className}`}
    value={value}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

const AccordionTrigger = forwardRef<HTMLButtonElement, {children: ReactNode}>(
  ({children}, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={
          "flex w-full justify-between bg-white p-4 outline-none cursor-pointer text-left"
        }
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = forwardRef<HTMLDivElement, {children: ReactNode}>(
  ({children}, forwardedRef) => (
    <Accordion.Content
      className={
        "bg-something-100 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden"
      }
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);

export default CardData;

AccordionTrigger.displayName = "AccordionTrigger";
AccordionContent.displayName = "AccordionContent";
AccordionItem.displayName = "AccordionItem";
