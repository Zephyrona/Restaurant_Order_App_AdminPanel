/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import UpdateProduct from "./UpdateProduct";

export default function ProductList({
  tabelHead,
  data,
  setData,
  deleteProduct,
  dataCategory,
}) {
  const [editopen, setEditopen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEditOpen = (product) => {
    setSelectedProduct(product);
    setEditopen(true);
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Product List
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              List of all items
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {tabelHead.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              console;
              return (
                <tr key={item.id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.title}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.category.name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.price}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Edit Item">
                      <IconButton
                        variant="text"
                        className="text-md"
                        onClick={() => handleEditOpen(item)}
                      >
                        <Icon icon="material-symbols:edit" />
                      </IconButton>
                    </Tooltip>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Remove Item">
                      <IconButton
                        variant="text"
                        className="text-md"
                        onClick={() => deleteProduct(item.id)}
                      >
                        <Icon icon="pajamas:remove" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Back
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter> */}
      <UpdateProduct
        open={editopen}
        handleOpen={() => setEditopen(!editopen)}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        data={data}
        setData={setData}
        dataCategory={dataCategory}
      />
    </Card>
  );
}
