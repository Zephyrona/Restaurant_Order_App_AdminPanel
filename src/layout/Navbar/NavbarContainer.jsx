/* eslint-disable react/prop-types */
import { Navbar, IconButton } from "@material-tailwind/react";
import ProfileMenu from "./ProfileMenu";
import BreadCrumbs from "./BreadCrumbs";
import AddToCardButton from "./AddToCardButton";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function NavbarContainer({ changeTheme, darkMode }) {
  return (
    <Navbar className="w-[100%] border-0 p-2 rounded-none bg-white dark:bg-bg-dark shadow-blue-gray-900/5 mb-[30px]">
      <div className="flex items-center justify-between text-blue-gray-900 dark:text-white">
        <BreadCrumbs />
        <div className="flex items-center gap-[20px]">
          <IconButton variant="text" onClick={changeTheme}>
            {darkMode ? (
              <MoonIcon className="h-[24px] w-[24px] text-text dark:text-white" />
            ) : (
              <SunIcon className="h-[24px] w-[24px] text-text dark:text-white" />
            )}
          </IconButton>
          <AddToCardButton />
          <ProfileMenu />
        </div>
      </div>
    </Navbar>
  );
}
