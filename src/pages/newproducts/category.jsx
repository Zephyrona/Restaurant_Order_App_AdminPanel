import { Typography, Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import CategoryList from "~/components/Product/CategoryList";

const initialTableRows = [
  {
    category: "Main Meals",
    description: "mainmeals",
  },
  {
    category: "Appetizers",
    description: "appetizers",
  },
  {
    category: "Desserts",
    description: "desserts",
  },
  {
    category: "Drinks",
    description: "drinks",
  },
  {
    category: "Alcohol",
    description: "alcohol",
  },
];

export default function Category() {
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [tableRows, setTableRows] = useState(initialTableRows);

  const tableHead = ["Category", "Description", "Edit", "Remove"];

  const handleCreateCategory = () => {
    if (categoryTitle.trim() === "" || categoryDescription.trim() === "") {
      alert("Please fill in both fields.");
      return;
    }

    const newCategory = {
      category: categoryTitle,
      description: categoryDescription,
    };

    setTableRows([...tableRows, newCategory]);
    setCategoryTitle("");
    setCategoryDescription("");
  };

  const handleEditCategory = (index) => {
    setCategoryTitle(tableRows[index].category);
    setCategoryDescription(tableRows[index].description);
    handleRemoveCategory(index);
  };

  const handleRemoveCategory = (index) => {
    const editedRows = [...tableRows];
    editedRows.splice(index, 1);
    setTableRows(editedRows);
  };

  return (
    <div className="flex flex-col gap-[30px]">
      <Typography className="text-2xl text-text font-bold px-[30px]">
        Create New Category
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-[30px]">
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
      </div>
      <div className="flex justify-end px-[30px]">
        <Button className="bg-primary" onClick={handleCreateCategory}>
          Create Category
        </Button>
      </div>
      <div className="flex flex-col justify-end px-[30px]">
        <CategoryList
          tableRows={tableRows}
          tableHead={tableHead}
          onEdit={handleEditCategory}
          onRemove={handleRemoveCategory}
        />
      </div>
    </div>
  );
}
