import React from "react";
import * as RadixTabs from "@radix-ui/react-tabs";

type TabsProps = {
  tab1Content: React.ReactNode;
  tab2Content: React.ReactNode;
  activeTab: string;
  setActiveTab: (value: string) => void;
};

export const Tabs = ({
  tab1Content,
  tab2Content,
  activeTab,
  setActiveTab,
}: TabsProps) => (
  <RadixTabs.Root defaultValue="tab1" value={activeTab}>
    <RadixTabs.Content value="tab1">{tab1Content}</RadixTabs.Content>

    <RadixTabs.Content value="tab2">{tab2Content}</RadixTabs.Content>
    <RadixTabs.List
      className="shrink-0 flex border-y border-grey-400"
      aria-label="Manage your account"
    >
      <RadixTabs.Trigger
        className="bg-white border-r px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 outline-none cursor-default data-[state=active]:bg-something-100 mt-24"
        value="tab1"
        onClick={() => setActiveTab("tab1")}
      >
        Front
      </RadixTabs.Trigger>
      <RadixTabs.Trigger
        className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 outline-none cursor-default data-[state=active]:bg-something-100 mt-24"
        value="tab2"
        onClick={() => setActiveTab("tab2")}
      >
        Inside
      </RadixTabs.Trigger>
    </RadixTabs.List>
  </RadixTabs.Root>
);
