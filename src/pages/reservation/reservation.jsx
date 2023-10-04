import { Typography, Input, Button } from "@material-tailwind/react";
import ReservationList from "../../components/Reservation/reservationtable";
import { useState } from "react";

export default function Reservation() {
  const TABLE_HEAD = ["Name", "Date and Time", "Size", "Edit", "Remove"];

  const TABLE_ROWS = [
    {
      name: "Elcan Eyvazli",
      date: "12/07/2023",
      size: "1",
    },
    {
      name: "Elcan Eyvazli",
      date: "12/08/2023",
      size: "5",
    },
    {
      name: "Elcan Eyvazli",
      date: "12/09/2023",
      size: "2",
    },
    {
      name: "Elcan Eyvazli",
      date: "12/11/2023",
      size: "4",
    },
    {
      name: "Elcan Eyvazli",
      date: "12/03/2023",
      size: "50",
    },
  ];

  const [tablerows, setTablerows] = useState(TABLE_ROWS);
  const [reservationname, setReservationname] = useState("");
  const [reservationdate, setReservationdate] = useState("");
  const [reservationsize, setReservationsize] = useState("");

  const handleCreateReservation = () => {
    if (
      reservationname.trim() === "" ||
      reservationdate.trim() === "" ||
      reservationsize.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const newReservation = {
      name: reservationname,
      date: reservationdate,
      size: reservationsize,
    };

    setTablerows([...tablerows, newReservation]);
    setReservationname("");
    setReservationdate("");
    setReservationsize("");
  };

  const handleDeteleReservation = (index) => {
    const editedRows = [...tablerows];
    editedRows.splice(index, 1);
    setTablerows(editedRows);
  };

  const handleEditReservation = (index) => {
    setReservationname(tablerows[index].name);
    setReservationdate(tablerows[index].date);
    setReservationsize(tablerows[index].size);
    handleDeteleReservation(index);
  };

  return (
    <div className="flex flex-col gap-[30px]">
      <Typography className="text-2xl text-text font-bold px-[30px]">
        Reservation
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-[30px]">
        <Input
          label="Enter Name"
          value={reservationname}
          onChange={(e) => setReservationname(e.target.value)}
        />
        <Input
          label="Enter Date"
          value={reservationdate}
          onChange={(e) => setReservationdate(e.target.value)}
        />
        <Input
          label="Enter Size"
          value={reservationsize}
          onChange={(e) => setReservationsize(e.target.value)}
        />{" "}
        <div className="flex justify-end w-full">
          <Button
            className="bg-primary w-full"
            onClick={handleCreateReservation}
          >
            Create Reservation
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-end px-[30px]">
        <ReservationList
          tablerows={tablerows}
          TABLE_HEAD={TABLE_HEAD}
          handleDeteleReservation={handleDeteleReservation}
          handleEditReservation={handleEditReservation}
        />
      </div>
    </div>
  );
}
