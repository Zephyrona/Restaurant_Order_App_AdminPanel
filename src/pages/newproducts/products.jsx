import { Icon } from "@iconify/react";
import {
  Typography,
  Input,
  Button,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import ProductList from "../../components/Product/ProductList";

export default function products() {
  return (
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
        <Input label="Enter Item Image Url" />
      </div>
      <div className="px-[30px]">
        <Textarea label="Enter Item Description" />
      </div>
      <div className="flex justify-end px-[30px]">
        <Button className="bg-primary" >
          Create Item
        </Button>
      </div>
      <div className="flex flex-col justify-end px-[30px]">
        <ProductList />
      </div>
    </div>
  );
}
