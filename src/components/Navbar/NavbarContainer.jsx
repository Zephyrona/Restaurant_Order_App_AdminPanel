import { Navbar, Typography } from "@material-tailwind/react";
import ProfileMenu from "./ProfileMenu";

export default function NavbarContainer() {
  return (
    <Navbar className="mx-auto w-[100%] p-2 rounded-none bg-white shadow-blue-gray-900/5 mb-[30px]">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          Welcome, Tania Andrew
        </Typography>
        <ProfileMenu />
      </div>
    </Navbar>
  );
}
