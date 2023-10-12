import { useEffect, useState } from "react";
import TabsComp from "../../components/Tabs/Tabs";
import axios from "axios";

export default function Menu() {
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

  return (
    <div className="px-[30px] flex flex-col items-center justify-center">
      <TabsComp data={data} loading={loading} />
    </div>
  );
}
