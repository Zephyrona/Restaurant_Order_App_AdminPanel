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

export function OrderListModal({
  handleOpenOrderList,
  open,
  openOrderList,
  selectedOrderId,
}) {
  console.log(openOrderList);

  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleOpenOrderList}
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
        <CardBody className="flex flex-col">
          {openOrderList &&
            openOrderList
              .filter((order) => order.id === selectedOrderId)
              .map((order,id) =>
                <List key={id}>
                  <ListItem>
                    <ListItemPrefix className="w-[30px] h-[30px]">
                      <Avatar
                        variant="circular"
                        alt="candice"
                        className="w-full h-full"
                        src={order.img}
                      />
                    </ListItemPrefix>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-col gap-[5px] items-start">
                        <Typography variant="h6" color="blue-gray">
                          {order.label}
                        </Typography>
                        <Typography className="font-normal">
                          {order.value}x
                        </Typography>
                      </div>
                      <div className="flex flex-col gap-[5px] items-end">
                        <Typography>{order.price}</Typography>
                        <Typography className="font-normal">
                          {order.size}x
                        </Typography>
                      </div>
                    </div>
                  </ListItem>
                </List>
              )}
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
