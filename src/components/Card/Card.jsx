import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const menudata = [
  {
    label: "Main Meals",
    value: "mainmeals",
    img: "https://images.unsplash.com/photo-1520218508822-998633d997e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    label: "Appetizers",
    value: "appetizers",
    img: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    label: "Desserts",
    value: "desserts",
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    label: "Dirinks",
    value: "dirinks",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
  {
    label: "Alcohol",
    value: "alcohol",
    img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    price: "$95.00",
    description:
      "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
  },
];

export default function Cards() {
  return (
    <>
      {menudata.map(({ label, img, price, description }) => (
        <Card key={label} className="w-[350px]">
          <CardHeader shadow={false} floated={false} className="h-[250px]">
            <img
              src={img}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography className="font-medium">{label}</Typography>
              <Typography className="font-medium">{price}</Typography>
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
              Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
