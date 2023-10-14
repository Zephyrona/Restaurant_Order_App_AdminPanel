import { Typography, Input, Button, Spinner } from "@material-tailwind/react";
import ReservationList from "../../components/Reservation/reservationtable";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Reservation() {
  const TABLE_HEAD = ["Name", "Date and Time", "Size", "Edit", "Remove"];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://165.227.138.148:8000/api/Reservations")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const deleteReservation = (id) => {
    axios
      .delete(`http://165.227.138.148:8000/api/Reservations/${id}`)
      .then((response) => {
        console.log(response);
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => console.error(error));
  };

  const [reservationName, setReservationName] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [reservationSize, setReservationSize] = useState("");

  const createReservation = () => {
    axios
      .post("http://165.227.138.148:8000/api/Reservations ", {
        name: reservationName,
        date: reservationDate,
        numberOfPeople: reservationSize,
      })
      .then((response) => {
        console.log(response);
        setData([...data, response.data]);
        setReservationName("");
        setReservationDate("");
        setReservationSize("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(reservationDate);

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <Spinner className="h-12 w-12" />
        </div>
      ) : (
        <div className="flex flex-col gap-[30px]">
          <Typography className="text-2xl text-text font-bold px-[30px]">
            Reservation
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createReservation();
            }}
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-[30px]"
          >
            <Input
              label="Enter Name"
              value={reservationName}
              onChange={(e) => setReservationName(e.target.value)}
            />
            <Input
              label="Enter Date"
              type="datetime-local"
              value={reservationDate}
              onChange={(e) => setReservationDate(e.target.value)}
            />
            <Input
              label="Enter Size"
              value={reservationSize}
              onChange={(e) => setReservationSize(e.target.value)}
            />
            <div className="flex justify-end w-full">
              <Button
                className="bg-primary w-full"
                onClick={() => {
                  createReservation();
                }}
              >
                Create Reservation
              </Button>
            </div>
          </form>
          <div className="flex flex-col justify-end px-[30px]">
            <ReservationList
              TABLE_HEAD={TABLE_HEAD}
              data={data}
              setData={setData}
              deleteReservation={deleteReservation}
            />
          </div>
        </div>
      )}
    </>
  );
}
