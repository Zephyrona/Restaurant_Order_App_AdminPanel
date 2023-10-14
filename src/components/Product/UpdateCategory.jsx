/* eslint-disable react/prop-types */
import {
  Dialog,
  Typography,
  CardFooter,
  CardBody,
  Card,
  CardHeader,
  Button,
  Input,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UpdateCategory({ open, handleOpen, selectedCategory,setData, data }) {
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  useEffect(() => {
    if (selectedCategory) {
      setCategoryTitle(selectedCategory.name);
      setCategoryDescription(selectedCategory.description);
    }
  }, [selectedCategory]);
  const handleUpdateCategory = () => {
    axios
      .put(`http://165.227.138.148:8000/api/Categories`, {
        id: selectedCategory.id,
        name: categoryTitle,
        description: categoryDescription,
      })
      .then((response) => {
        console.log(response.data);
        handleOpen();
        setData(data.map(item => item.id === selectedCategory.id ? { ...item, name: categoryTitle, description: categoryDescription } : item));
      })
      .catch((error) => {
        console.error("Error in handleUpdateCategory:", error);
      });
  };

  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleOpen}
      className="bg-transparent shadow-none"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <Card className="mx-auto w-full max-w-[30rem]">
        <CardHeader
          variant="gradient"
          className="mb-4 grid h-28 place-items-center bg-primary"
        >
          <Typography color="white" className="text-xl font-bold">
            Update Category
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-[15px]">
          <Input
            label="Enter Category Title"
            value={categoryTitle}
            onChange={(e) => setCategoryTitle(e.target.value)}
          />
          <Input
            label="Enter Category Description"
            value={categoryDescription}
            onChange={(e) => setCategoryDescription(e.target.value)}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            className="bg-primary"
            onClick={handleUpdateCategory}
            fullWidth
          >
            Update Category
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
}
