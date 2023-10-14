/* eslint-disable no-unused-vars */
import "~/App.css";
import Sidebar from "~/layout/Sidebar/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "~/pages/admin/admin";
import Chef from "~/pages/chef/chef";
import Products from "~/pages/newproducts/products";
import Menu from "~/pages/menu/menu";
import Reservation from "~/pages/reservation/reservation";
import Settings from "~/pages/settings/settings";
import Waiter from "~/pages/waiter/waiter";
import NavbarContainer from "~/layout/Navbar/NavbarContainer";
import Category from "~/pages/newproducts/category";
import Error from "~/pages/error/error";
import { useEffect, useState } from "react";
import DrawerDefault from "~/layout/Drawer/Drawer";

function App() {
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

  const [open, setOpen] = useState(false);

  const handleopen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-row gap-[0] w-[100%] h-[100vh] dark:bg-bg-dark">
      <div className="w-[20%] h-[100vh] xl:block hidden">
        <Sidebar darkMode={darkMode} />
      </div>
      <DrawerDefault open={open} handleopen={handleopen} />
      <div className="w-[100%] overflow-y-auto pb-[50px]">
        <NavbarContainer
          changeTheme={changeTheme}
          handleopen={handleopen}
          darkMode={darkMode}
        />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/waiter" element={<Waiter />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/products/item" element={<Products />} />
          <Route path="/products/category" element={<Category />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
