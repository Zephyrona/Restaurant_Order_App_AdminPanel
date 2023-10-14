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

  console.log(img);

  return (
    <Card className=" h-full w-full dark:bg-bg-grey ">
      <CardHeader shadow={false} floated={false} className="h-[250px] ">
        <img
          src={`http://165.227.138.148:8000/${img}`}
          alt="card-image"
          className="h-full w-full object-cover hover:scale-110 transition-all duration-300 ease-in-out"
        />
        
        
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography className="font-medium dark:text-white">{label}</Typography>
          <Typography className="font-medium dark:text-white">${price}</Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 dark:text-white"
        >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          fullWidth={true}
          className="bg-primary text-white  shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
