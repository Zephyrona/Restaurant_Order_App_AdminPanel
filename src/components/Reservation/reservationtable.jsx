/* eslint-disable react/prop-types */
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import ReservationEdit from "./reservationedit";
import { useState } from "react";

export default function ReservationList({
  data,
  TABLE_HEAD,
  deleteReservation,
  setData
}) {
  const [editopen, setEditopen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  const handleEditOpen = (category) => {
    setSelectedReservation(category);
    setEditopen(true);
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Categories List
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              List of all categories
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
              {TABLE_HEAD.map((head) => (
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

              return (
                <tr key={item.id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {new Date(item.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: false,
                      })}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.numberOfPeople}
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
                        onClick={() => deleteReservation(item.id)}
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
      <ReservationEdit
        open={editopen}
        handleOpen={() => setEditopen(false)}
        selectedReservation={selectedReservation}
        setData={setData}
        data={data}
      />
    </Card>
  );
}
