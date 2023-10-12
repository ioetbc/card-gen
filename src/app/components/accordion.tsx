import React, {ReactNode, forwardRef} from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {ChevronDownIcon} from "@radix-ui/react-icons";

const AccordionDemo = () => (
  <Accordion.Root
    className="w-full shadow-card border rounded-xl border-gray-400 bg-white py-4"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value="item-1" className="bg-white border-b">
      <AccordionTrigger>What is the cost of a single card</AccordionTrigger>
      <AccordionContent>
        The cards cost £6 including shipping within the United Kingdom
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2" className="bg-white border-b">
      <AccordionTrigger>
        Can I get discount on purchasing multiple cards?
      </AccordionTrigger>
      <AccordionContent>
        Kinda, if you purchase a few cards at a time them give me an email and
        i&apos;ll refund you 15%.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3" className="bg-white border-b">
      <AccordionTrigger>
        What paper will are the cards printed on?
      </AccordionTrigger>
      <AccordionContent>
        Cards are printed on 324gsm Mohawk card and supplied with a paper
        envelope and a protective biodegradable OPP bag.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4" className="bg-white border-b">
      <AccordionTrigger>
        How long does it take for my card to arrive?
      </AccordionTrigger>
      <AccordionContent>
        It takes 24-48 hours for a card to be printed and shipped.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-5" className="bg-white border-b">
      <AccordionTrigger>What is the quality of the card?</AccordionTrigger>
      <AccordionContent>
        The card is 324gsm Mohawk card. Supplied with a paper envelope and a
        protective biodegradable OPP bag.
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
          "text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none cursor-pointer"
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
        "text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]"
      }
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);

export default AccordionDemo;

AccordionTrigger.displayName = "AccordionTrigger";
AccordionContent.displayName = "AccordionContent";
AccordionItem.displayName = "AccordionItem";
