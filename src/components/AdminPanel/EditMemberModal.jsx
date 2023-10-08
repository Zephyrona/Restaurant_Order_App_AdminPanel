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
import { useState } from "react";

export default function EditMemberModal({ open, handler, openEditUserList }) {
  console.log(openEditUserList);

  const [job, setJob] = useState(openEditUserList.job);

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
      {openEditUserList.map((user) => (
        <Card key={user.id} className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            className="mb-4 grid h-28 place-items-center bg-primary"
          >
            <Typography color="white" className="text-xl font-bold">
              Add New Member
            </Typography>
          </CardHeader>

          <CardBody className="flex flex-col gap-4">
            <Input
              label="User name"
              size="lg"
              required
              defaultValue={user.name}
            />
            <Input
              label="Password"
              size="lg"
              required
              defaultValue={user.pass}
            />
            <Input
              label="Phone Number"
              size="lg"
              required
              defaultValue={user.number}
            />
            <Select
              label="Select Role"
              size="lg"
              required
              value={job}
              onChange={(e) => setJob(e.target.value)}
            >
              <Option value="1">Admin</Option>
              <Option value="2">Waiter</Option>
              <Option value="3">Chef</Option>
            </Select>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="bg-primary" onClick={handler} fullWidth>
              Edit Member
            </Button>
          </CardFooter>
        </Card>
      ))}
    </Dialog>
  );
}
