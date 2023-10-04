import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CardContainer from "../Card/CardContainer"; // Import CardContainer from your file

export default function TabsComp() {
  const [activeTab, setActiveTab] = useState("mainmeals");
  const data = [
    {
      label: "Main Meals",
      value: "mainmeals",
    },
    {
      label: "Appetizers",
      value: "appetizers",
    },
    {
      label: "Desserts",
      value: "desserts",
    },
    {
      label: "Drinks",
      value: "drinks",
    },
    {
      label: "Alcohol",
      value: "alcohol",
    },
  ];

  return (
    <Tabs value={activeTab} className="w-full">
      <TabsHeader className="flex flex-col sm:flex-row">
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={
              activeTab === value ? "text-gray-900 text-sm md:text-lg" : ""
            }
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value }) => (
          <TabPanel key={value} value={value}>
            <CardContainer activeTab={value} />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
