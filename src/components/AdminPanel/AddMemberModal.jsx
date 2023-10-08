/* eslint-disable react/prop-types */
import {
  Dialog,
  Button,
  Typography,
  Input,
  Select,
  CardFooter,
  CardBody,
  Card,
  CardHeader,
  Option,
} from "@material-tailwind/react";

export default function AddMemberModal({ open, handler }) {
  return (
    <Dialog
      size="xs"
      open={open}
      handler={handler}
      className="bg-transparent shadow-none"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <Card className="mx-auto w-full max-w-[24rem]">
        <CardHeader
          variant="gradient"
          className="mb-4 grid h-28 place-items-center bg-primary"
        >
          <Typography color="white" className="text-xl font-bold">Add New Member</Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="User name" size="lg" required />
          <Input label="Password" size="lg" required />
          <Input label="Phone Number" size="lg" required />
          <Select label="Select Role" size="lg" required>
            <Option>Admin</Option>
            <Option>Waiter</Option>
            <Option>Chef</Option>
          </Select>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-primary" onClick={handler} fullWidth>
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
}
