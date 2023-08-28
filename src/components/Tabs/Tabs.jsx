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
  const [activeTab, setActiveTab] = useState("html");
  const data = [
    {
      label: "HTML",
      value: "html",
      item: <CardContainer />,
    },
    {
      label: "React",
      value: "react",
      item: <CardContainer />,
    },
    {
      label: "Vue",
      value: "vue",
      item: <CardContainer />,
    },
    {
      label: "Angular",
      value: "angular",
      item: <CardContainer />,
    },
    {
      label: "Svelte",
      value: "svelte",
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
