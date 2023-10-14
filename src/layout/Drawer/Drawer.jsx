/* eslint-disable react/prop-types */
import { Drawer } from "@material-tailwind/react";
import Sidebar from "../Sidebar/sidebar";

export default function DrawerDefault({ open, handleopen }) {
  return (
    <Drawer open={open} onClose={handleopen} className="p-4">
      <div className="w-[20%] h-[100vh]">
        <Sidebar />
      </div>
    </Drawer>
  );
}
