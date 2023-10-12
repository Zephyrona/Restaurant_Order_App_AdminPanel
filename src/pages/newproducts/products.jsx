import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import {
  Typography,
  Input,
  Button,
  Select,
  Option,
  Textarea,
  Spinner,
} from "@material-tailwind/react";
import ProductList from "../../components/Product/ProductList";
import axios from "axios";

export default function Products() {
  const tabelHead = ["Item", "Category", "Price", "Edit", "Remove"];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://165.227.138.148:8000/api/Products?PageIndex=0&PageSize=5")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [data]);

  const deleteProduct = (id) => {
    axios
      .delete(`http://165.227.138.148:8000/api/Products/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  };

  // const createProduct = (f) => {
  //   axios
  //     .post("http://.227.138.148:8000/api/Products", product)
  //     .then((response) => {
  //       setData([...data, response.data]);
  //       console.log(response);
  //     })
  //     .catch((error) => console.error(error));
  // };

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <Spinner className="h-12 w-12" />
        </div>
      ) : (
        <div className="flex flex-col gap-[30px]">
          <Typography className="text-2xl text-text font-bold px-[30px]">
            Create New Item
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-[30px]">
            <Input label="Enter Item Title" />
            <Input label="Enter Price" icon={<Icon icon="iconoir:dollar" />} />
            <Select
              label="Select Version"
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <Option>Main Meals</Option>
              <Option>Appetizers</Option>
              <Option>Desserts</Option>
              <Option>Dirinks</Option>
              <Option>Alcohol</Option>
            </Select>
            <Input type="file" className="" label="Enter Item Image Url" />
          </div>
          <div className="px-[30px]">
            <Textarea label="Enter Item Description" />
          </div>
          <div className="flex justify-end px-[30px]">
            <Button className="bg-primary">Create Item</Button>
          </div>
          <div className="flex flex-col justify-end px-[30px]">
            <ProductList
              tabelHead={tabelHead}
              data={data}
              loading={loading}
              deleteProduct={deleteProduct}
            />
          </div>
        </div>
      )}
    </>
  );
}
