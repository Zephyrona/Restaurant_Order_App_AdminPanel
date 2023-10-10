import { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Spinner,
} from "@material-tailwind/react";
import CardContainer from "../Card/CardContainer"; // Import CardContainer from your file
import axios from "axios";

export default function TabsComp() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://165.227.138.148:8000/api/Categories")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(data);

  const [activeTab, setActiveTab] = useState("mainmeals");
  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <Spinner className="h-12 w-12" />
        </div>
      ) : (
        <Tabs value={activeTab} className="w-full">
          <TabsHeader className="flex flex-col sm:flex-row">
            {data.map(({ name, description }) => (
              <Tab
                key={description}
                value={description}
                onClick={() => setActiveTab(description)}
                className={
                  activeTab === description
                    ? "text-gray-900 text-sm md:text-lg"
                    : ""
                }
              >
                {name}
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
            {data.map((item) => (
              <TabPanel key={item.id} value={item.description}>
                <CardContainer products={item.products} />
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      )}
    </>
  );
}
