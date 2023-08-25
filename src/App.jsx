/* eslint-disable no-unused-vars */
import "./App.css";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin/admin";
import Chef from "./pages/chef/chef";
import Products from "./pages/newproducts/products";
import Menu from "./pages/menu/menu";
import Reservation from "./pages/reservation/reservation";
import Settings from "./pages/settings/settings";
import Waiter from "./pages/waiter/waiter";

function App() {
  return (
    <div className="flex flex-row gap-[0]">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[75%]">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/waiter" element={<Waiter />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
