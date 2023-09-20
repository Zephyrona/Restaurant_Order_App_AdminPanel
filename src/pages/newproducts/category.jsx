import { Typography, Input, Button } from "@material-tailwind/react";
import CategoryList from "../../components/Product/CategoryList";
export default function Category() {
  return (
    <div className="flex flex-col gap-[30px]">
      <Typography className="text-2xl text-text font-bold px-[30px]">
        Create New Category
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-[30px]">
        <Input label="Enter Category Title" />
        <Input label="Enter Category Description" />
      </div>
      <div className="flex justify-end px-[30px]">
        <Button className="bg-primary">Create Category</Button>
      </div>
      <div className="flex flex-col justify-end px-[30px]">
        <CategoryList />
      </div>
    </div>
  );
}
