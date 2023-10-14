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

export default function ReservationEdit({
  open,
  handleOpen,
  selectedReservation,
  setData,
  data,
}) {
  const [reservationName, setReservationName] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [reservationSize, setReservationSize] = useState("");

  useEffect(() => {
    if (selectedReservation) {
      setReservationName(selectedReservation.name);
      setReservationDate(selectedReservation.date);
      setReservationSize(selectedReservation.numberOfPeople);
    }
  }, [selectedReservation]);
  const handleUpdateCategory = () => {
    axios
      .put(`http://165.227.138.148:8000/api/Reservations`, {
        id: selectedReservation.id,
        name: reservationName,
        date: reservationDate,
        numberOfPeople: reservationSize,
      })
      .then((response) => {
        console.log(response.data);
        handleOpen();
        setData(
          data.map((item) =>
            item.id === selectedReservation.id
              ? {
                  ...item,
                  name: reservationName,
                  date: reservationDate,
                  numberOfPeople: reservationSize,
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
            Update Reservation
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-[15px]">
          <Input
            label="Enter Reservation Name"
            value={reservationName}
            onChange={(e) => setReservationName(e.target.value)}
          />
          <Input
            label="Enter Number of People"
            value={reservationSize}
            onChange={(e) => setReservationSize(e.target.value)}
          />
          <Input
            label="Enter Date"
            type="datetime-local"
            value={reservationDate}
            onChange={(e) => setReservationDate(e.target.value)}
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
