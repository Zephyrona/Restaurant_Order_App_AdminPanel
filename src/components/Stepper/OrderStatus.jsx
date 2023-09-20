import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import StepperForWaiter from "./Stepper";

export default function OrderStatus() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <Accordion
      open={open === 1}
      className="mb-2 rounded-lg border border-blue-gray-100 px-4"
      icon={<Icon icon="iconamoon:arrow-down-2-duotone" />}
    >
      <AccordionHeader
        onClick={() => handleOpen(1)}
        className={`border-b-0 transition-colors ${
          open === 1 ? "text-primary hover:!text-primary" : ""
        }`}
      >
        <div className="flex items-center justify-between w-full">
          <p className="text-base font-normal">Order #1</p>
          <p className="text-base font-normal">12:30 PM</p>
        </div>
      </AccordionHeader>
      <AccordionBody className="pt-0 text-base font-normal flex flex-col gap-[10px]">
        <div className="flex items-center gap-2">
          <p className="text-base font-normal">Table 1</p>
          <p className="text-base font-normal">
            <span className="text-base font-normal">Total:</span>
            <span className="text-base font-normal">$ 100</span>
          </p>
          <p className="text-base font-normal">
            Waiter: <span className="text-primary">John Doe</span>
          </p>
          



        </div>
        <StepperForWaiter />
      </AccordionBody>
    </Accordion>
  );
}

