/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import {
  Dialog,
  Typography,
  CardFooter,
  CardBody,
  Card,
  CardHeader,
  Button,
  Input,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UpdateProduct({
  open,
  handleOpen,
  selectedProduct,
  setData,
  data,
  dataCategory,
}) {
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productCategory, setProductCategory] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      setProductTitle(selectedProduct.title);
      setProductDescription(selectedProduct.description);
      setProductPrice(selectedProduct.price);
      setProductCategory(selectedProduct.category.name); // Değişiklik burada yapıldı.
      setProductImage(selectedProduct.image); // Değişiklik burada yapıldı.
    }
  }, [selectedProduct]);

  const handleUpdateProduct = () => {
    const formData = new FormData();
    formData.append("id", selectedProduct.id);
    formData.append("title", productTitle);
    formData.append("description", productDescription);
    formData.append("price", productPrice);
    formData.append("categoryName", productCategory);
    formData.append("imageUrl", productImage);

    axios
      .put(`http://165.227.138.148:8000/api/Products`, formData)
      .then((response) => {
        console.log(response.data);
        handleOpen();
        setData(
          data.map((item) =>
            item.id === selectedProduct.id
              ? {
                  ...item,
                  title: productTitle,
                  description: productDescription,
                  price: productPrice,
                  categoryName: productCategory,
                  imageUrl: productImage,
                }
              : item
          )
        );
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
            label="Enter Item Title"
            icon={<Icon icon="iconoir:tag" />}
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
          />
          <Input
            label="Enter Price"
            icon={<Icon icon="iconoir:dollar" />}
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <Select
            label="Select Category"
            value={productCategory}
            onChange={(e) => setProductCategory(e)}
          >
            {dataCategory.map((item) => (
              <Option key={item.id} value={item.name}>
                {item.name}
              </Option>
            ))}
          </Select>
          <div>
            <Input
              type="file"
              label="Upload Image"
              onChange={(e) => setProductImage(e.target.files[0])}
            />
            {productImage && (
              <div>Uploaded Image Name: {productImage.name}</div>
            )}
          </div>

          <Textarea
            label="Enter Item Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="w-full"
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            className="bg-primary"
            onClick={handleUpdateProduct}
            fullWidth
          >
            Update Category
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
}
