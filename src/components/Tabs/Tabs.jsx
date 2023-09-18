import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CardContainer from "../../components/Card/CardContainer";

export default function TabsComp() {

  const [activeTab, setActiveTab] = useState("mainmeals");
  const data = [
    {
      label: "Main Meals",
      value: "mainmeals",
      item: <CardContainer />,
    },
    {
      label: "Appetizers",
      value: "appetizers",
      item: <CardContainer />,
    },
    {
      label: "Desserts",
      value: "desserts",
      item: <CardContainer />,
    },
    {
      label: "Dirinks",
      value: "dirinks",
      item: <CardContainer />,
    },
    {
      label: "Alcohol",
      value: "alcohol",
      item: <CardContainer />,
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, item }) => (
          <TabPanel key={value} value={value}>
            {item}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
