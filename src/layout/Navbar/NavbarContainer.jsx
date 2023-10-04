import { Navbar } from "@material-tailwind/react";
import ProfileMenu from "./ProfileMenu";
import BreadCrumbs from "./BreadCrumbs";
import AddToCardButton from "./AddToCardButton";
import Notifications from "./Notifications";

export default function NavbarContainer() {
  return (
    <Navbar className="mx-auto w-[100%] p-2 rounded-none bg-white shadow-blue-gray-900/5 mb-[30px]">
      <div className="mx-auto flex items-center justify-between text-blue-gray-900">
        <BreadCrumbs />
        <div className="flex items-center gap-[20px]">
          <Notifications />
          <AddToCardButton />
          <ProfileMenu />
        </div>
      </div>
    </Navbar>
  );
}
