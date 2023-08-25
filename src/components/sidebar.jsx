import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import {
  UserIcon,
  Cog6ToothIcon,
  CakeIcon,
  Squares2X2Icon,
  ClipboardDocumentIcon,
  ArrowRightOnRectangleIcon,
  RectangleStackIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import "../App.css";

export default function Sidebar() {
  return (
    <Card className="h-[100vh] w-[100%] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-10 p-4 w-[180px] h-[60px]">
        <img src="./img/logo.svg" alt="" draggable="false" />
      </div>
      <List className="">
        <NavLink to="/">
          <ListItem className="focus:bg-transparent focus:text-white">
            <ListItemPrefix>
              <Squares2X2Icon className="h-5 w-5" />
            </ListItemPrefix>
            Menu
          </ListItem>
        </NavLink>
        <NavLink to="/admin">
          <ListItem className="focus:bg-transparent focus:text-white">
            <ListItemPrefix>
              <UserIcon className="h-5 w-5" />
            </ListItemPrefix>
            Admin
          </ListItem>
        </NavLink>
        <NavLink to="/waiter">
          <ListItem className="focus:bg-transparent focus:text-white">
            <ListItemPrefix>
              <ClipboardDocumentIcon className="h-5 w-5" />
            </ListItemPrefix>
            Waiter
          </ListItem>
        </NavLink>
        <NavLink to="/chef">
          <ListItem className="focus:bg-transparent focus:text-white">
            <ListItemPrefix>
              <CakeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Chef
          </ListItem>
        </NavLink>
        <NavLink to="/products">
          <ListItem className="focus:bg-transparent focus:text-white">
            <ListItemPrefix>
              <RectangleStackIcon className="h-5 w-5" />
            </ListItemPrefix>
            New Products
          </ListItem>
        </NavLink>
        <NavLink to="/reservation">
          <ListItem className="focus:bg-transparent focus:text-white">
            <ListItemPrefix>
              <ClockIcon className="h-5 w-5" />
            </ListItemPrefix>
            Reservation
          </ListItem>
        </NavLink>
        <NavLink to="/settings">
          <ListItem className="focus:bg-transparent focus:text-white">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
        </NavLink>
        <NavLink to="/login">
          <ListItem className="focus:bg-transparent focus:text-white">
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
