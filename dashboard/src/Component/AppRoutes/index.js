import { Route, Routes } from "react-router-dom";
import Customers from "../../pages/Customer";
import Dashboard from "../../pages/Dashboard";
import Inventory from "../../pages/Inventory";
import Orders from "../../pages/Order";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/Customer" element={<Customers />}></Route>
      <Route path="/Order" element={<Orders />}></Route>
    </Routes>
  );
}

export default AppRoutes;
