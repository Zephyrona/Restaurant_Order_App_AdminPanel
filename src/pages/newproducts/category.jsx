/* eslint-disable no-unused-vars */
import { Typography, Button, Input, Spinner } from "@material-tailwind/react";
import CategoryList from "~/components/Product/CategoryList";
import { useEffect, useState } from "react";
import axios from "axios";
import UpdateCategory from "~/components/Product/UpdateCategory";
import { setDatasets } from "react-chartjs-2/dist/utils";

export default function Category() {
  const tableHead = ["Category", "Description", "Edit", "Remove"];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [editopen, setEditopen] = useState(false);
  const [openEditUserList, setOpenEditUserList] = useState([]);

  const handleEditOpen = (id) => {
    setEditopen(!editopen);
    const editUserList = data.find((member) => member.id === id);
    setOpenEditUserList(editUserList ? [editUserList] : []);
  };

  useEffect(() => {
    axios
      .get("http://165.227.138.148:8000/api/Categories")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [data]);

  const deleteCategory = (id) => {
    axios
      .delete(`http://165.227.138.148:8000/api/Categories/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  };

  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const createCategory = () => {
    axios
      .post("http://165.227.138.148:8000/api/Categories", {
        name: categoryTitle,
        description: categoryDescription,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
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
            Create New Category
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createCategory();
            }}
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-[30px]"
          >
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
          </form>
          <div className="flex justify-end px-[30px]">
            <Button
              className="bg-primary"
              onClick={() => {
                createCategory();
              }}
            >
              Create Category
            </Button>
          </div>
          <div className="flex flex-col justify-end px-[30px]">
            <CategoryList
              tableHead={tableHead}
              deleteCategory={deleteCategory}
              data={data}
              open={open}
              handleOpen={handleOpen}
            />
          </div>
        </div>
      )}
      <UpdateCategory open={open} handleOpen={handleOpen} />
    </>
  );
}
