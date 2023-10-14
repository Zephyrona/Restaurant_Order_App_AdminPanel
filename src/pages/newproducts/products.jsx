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
  const [dataCategory, setDataCategory] = useState([]);
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

  useEffect(() => {
    axios
      .get("http://165.227.138.148:8000/api/Categories")
      .then((response) => {
        setDataCategory(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete(`http://165.227.138.148:8000/api/Products/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  };

  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productCategory, setProductCategory] = useState("");

  const createProduct = () => {
    var bodyFormData = new FormData();
    bodyFormData.append("title", productTitle);
    bodyFormData.append("description", productDescription);
    bodyFormData.append("price", productPrice);
    bodyFormData.append("Photo", productImage);
    bodyFormData.append("CategoryName", productCategory);

    axios({
      method: "post",
      url: "http://165.227.138.148:8000/api/Products",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
        setData([...data, response.data]);
        setProductTitle("");
        setProductDescription("");
        setProductPrice("");
        setProductImage(null);
        setProductCategory("");
      })
      .catch((error) => {
        console.error(error);
        alert("Error creating product");
      });
  };

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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createProduct();
            }}
            className="flex flex-col gap-[20px]"
          >
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-[30px]">
              <Input
                label="Enter Item Title"
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
              <Input
                type="file"
                label="Upload Image"
                onChange={(e) => setProductImage(e.target.files[0])}
              />
            </div>
            <div className="px-[30px]">
              <Textarea
                label="Enter Item Description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="w-full"
              />
            </div>
          </form>
          <div className="flex justify-end px-[30px]">
            <Button className="bg-primary" onClick={() => createProduct()}>
              Create Item
            </Button>
          </div>
          <div className="flex flex-col justify-end px-[30px]">
            <ProductList
              tabelHead={tabelHead}
              data={data}
              setData={setData}
              loading={loading}
              deleteProduct={deleteProduct}
              dataCategory={dataCategory}
            />
          </div>
        </div>
      )}
    </>
  );
}
