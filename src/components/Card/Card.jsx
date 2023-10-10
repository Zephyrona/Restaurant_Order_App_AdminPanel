/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Cards({ label, img, price, description }) {
  return (
    <Card className=" h-full w-full">
      <CardHeader shadow={false} floated={false} className="h-[250px] ">
        <img
          src={img}
          alt="card-image"
          className="h-full w-full object-cover hover:scale-110 transition-all duration-300 ease-in-out"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography className="font-medium">{label}</Typography>
          <Typography className="font-medium">${price}</Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          fullWidth={true}
          className="bg-primary text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
