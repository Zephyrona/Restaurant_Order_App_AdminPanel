import { Navbar } from "@material-tailwind/react";
import ProfileMenu from "./ProfileMenu";
import BreadCrumbs from "./BreadCrumbs";

export default function NavbarContainer() {
  return (
    <Navbar className="mx-auto w-[100%] p-2 rounded-none bg-white shadow-blue-gray-900/5 mb-[30px]">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <BreadCrumbs />
        <ProfileMenu />
      </div>
    </Navbar>
  );
}
