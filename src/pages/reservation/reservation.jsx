import { Typography, Input, Button } from "@material-tailwind/react";
import ReservationList from "../../components/Reservation/reservationtable";
export default function reservation() {
  return (
    <div className="flex flex-col gap-[30px]">
      <Typography className="text-2xl text-text font-bold px-[30px]">
        Reservation
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 px-[30px]">
        <Input label="Enter Name" />
        <Input label="Enter Date" />
        <Input label="Enter Time" />
        <Input label="Enter Size" />
      </div>
      <div className="flex justify-end px-[30px]">
        <Button className="bg-primary">Create Reservation</Button>
      </div>
      <div className="flex flex-col justify-end px-[30px]">
        <ReservationList />
      </div>
    </div>
  );
}
