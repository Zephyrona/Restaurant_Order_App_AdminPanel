/* eslint-disable react/prop-types */
import {
  Dialog,
  Typography,
  CardFooter,
  CardBody,
  Card,
  CardHeader,
  Button,
  Avatar,
  ListItem,
  ListItemPrefix,
  List,
} from "@material-tailwind/react";

export default function UpdateCategory({ open, handleOpen }) {
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
            Order List
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col ">
          {openOrderList.map((order, id) => (
            <>
              <List key={id}>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      draggable="false"
                      variant="circular"
                      alt="candice"
                      src={order.img}
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      {order.label}
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      {order.value}x {order.size}x {order.price}
                    </Typography>
                  </div>
                </ListItem>
              </List>
            </>
          ))}
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            className="bg-primary"
            onClick={handleOpenOrderList}
            fullWidth
          >
            Close
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
}
