/* eslint-disable no-unused-vars */
import "./App.css";
import Sidebar from "./components/Sidebar/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin/admin";
import Chef from "./pages/chef/chef";
import Products from "./pages/newproducts/products";
import Menu from "./pages/menu/menu";
import Reservation from "./pages/reservation/reservation";
import Settings from "./pages/settings/settings";
import Waiter from "./pages/waiter/waiter";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Category from "./pages/newproducts/category";

function App() {
  return (
    <div className="flex flex-row gap-[0] w-[100%] h-[100vh]">
      <div className="w-[20%] h-[100vh]">
        <Sidebar />
      </div>
      <div className="w-[80%] overflow-y-auto pb-[50px]">
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/waiter" element={<Waiter />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/products/item" element={<Products />} />
          <Route path="/products/category" element={<Category />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
