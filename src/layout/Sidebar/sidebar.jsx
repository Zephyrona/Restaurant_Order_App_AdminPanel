/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";
import {
  UserIcon,
  // Cog6ToothIcon,
  CakeIcon,
  Squares2X2Icon,
  ClipboardDocumentIcon,
  ArrowRightOnRectangleIcon,
  ClockIcon,
  ChevronDownIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import "../../App.css";
import { Icon } from "@iconify/react";

export default function Sidebar({darkMode}) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-[100%] w-[100%] p-4 shadow-xl dark:bg-bg-dark shadow-blue-gray-900/5">
      <div className="mb-10 p-4 w-[180px] h-[60px]">
        {
          darkMode ? <img src="../img/logo2.svg" alt="" draggable="false" /> : <img src="../img/logo.svg" alt="" draggable="false" />
        }
        
      </div>
      <List className="flex justify-between">
        <NavLink to="/">
          <ListItem className="focus:bg-transparent focus:text-white dark:text-white">
            <ListItemPrefix>
              <Squares2X2Icon className="h-5 w-5" />
            </ListItemPrefix>
            Menu
          </ListItem>
        </NavLink>
        <NavLink to="/admin">
          <ListItem className="focus:bg-transparent focus:text-white dark:text-white">
            <ListItemPrefix>
              <UserIcon className="h-5 w-5" />
            </ListItemPrefix>
            Admin
          </ListItem>
        </NavLink>
        <NavLink to="/waiter">
          <ListItem className="focus:bg-transparent focus:text-white dark:text-white">
            <ListItemPrefix>
              <ClipboardDocumentIcon className="h-5 w-5" />
            </ListItemPrefix>
            Waiter
          </ListItem>
        </NavLink>
        <NavLink to="/chef">
          <ListItem className="focus:bg-transparent focus:text-white dark:text-white">
            <ListItemPrefix>
              <CakeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Chef
          </ListItem>
        </NavLink>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform dark:text-white ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3 "
            >
              <ListItemPrefix>
                <RectangleStackIcon className="h-5 w-5 dark:text-white" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal dark:text-white">
                Products
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="pl-[20px]">
              <NavLink to="/products/item">
                <ListItem className="focus:bg-transparent focus:text-white dark:text-white">
                  <ListItemPrefix>
                    <Icon icon="material-symbols:place-item-rounded" />
                  </ListItemPrefix>
                  New Item
                </ListItem>
              </NavLink>
              <NavLink to="/products/category">
                <ListItem className="focus:bg-transparent focus:text-white dark:text-white">
                  <ListItemPrefix>
                    <Icon icon="bx:category" />
                  </ListItemPrefix>
                  New Category
                </ListItem>
              </NavLink>
            </List>
          </AccordionBody>
        </Accordion>
        <NavLink to="/reservation">
          <ListItem className="focus:bg-transparent focus:text-white dark:text-white">
            <ListItemPrefix>
              <ClockIcon className="h-5 w-5" />
            </ListItemPrefix>
            Reservation
          </ListItem>
        </NavLink>
        {/* <NavLink to="/settings">
          <ListItem className="focus:bg-transparent focus:text-white">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>du
            Settings
          </ListItem>
        </NavLink> */}
        <NavLink to="/login">
          <ListItem className="focus:bg-transparent focus:text-white dark:text-white">
            <ListItemPrefix>
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </NavLink>
      </List>
    </Card>
  );
}
