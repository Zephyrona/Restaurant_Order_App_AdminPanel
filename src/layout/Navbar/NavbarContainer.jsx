import { Navbar, IconButton } from "@material-tailwind/react";
import ProfileMenu from "./ProfileMenu";
import BreadCrumbs from "./BreadCrumbs";
import AddToCardButton from "./AddToCardButton";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function NavbarContainer() {
  const darkMode = localStorage.getItem("theme") === "dark";
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" ? "dark" : "light"
  );

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Navbar className="w-[100%] p-2 rounded-none bg-white shadow-blue-gray-900/5 mb-[30px]">
      <div className="flex items-center justify-between text-blue-gray-900">
        <BreadCrumbs />
        <div className="flex items-center gap-[20px]">
          <IconButton variant="text" onClick={changeTheme}>
            {darkMode ? (
              <MoonIcon className="h-[24px] w-[24px] text-text" />
            ) : (
              <SunIcon className="h-[24px] w-[24px] text-text" />
            )}
          </IconButton>
          <AddToCardButton />
          <ProfileMenu />
        </div>
      </div>
    </Navbar>
  );
}
