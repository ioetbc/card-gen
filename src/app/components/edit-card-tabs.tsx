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
    <div className="p-4">
      <RadixTabs.List
        className="border border-black flex rounded-lg bg-white"
        aria-label="Manage your account"
      >
        <RadixTabs.Trigger
          className="bg-white py-3 px-4 data-[state=active]:bg-gray-200 border-r border-black rounded-s-lg w-full text-center"
          value="tab1"
          onClick={() => setActiveTab("tab1")}
        >
          Front of card
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          className="bg-white py-3 px-4 w-full data-[state=active]:bg-gray-200 text-center rounded-lg"
          value="tab2"
          onClick={() => setActiveTab("tab2")}
        >
          Inside of card
        </RadixTabs.Trigger>
      </RadixTabs.List>
    </div>
    <RadixTabs.Content value="tab1">{tab1Content}</RadixTabs.Content>

    <RadixTabs.Content value="tab2">{tab2Content}</RadixTabs.Content>
  </RadixTabs.Root>
);
