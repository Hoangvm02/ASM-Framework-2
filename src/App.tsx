import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/layout/HomeLayout";
import AdminLayout from "./pages/layout/AdminLayout";
import DashboardLayout from "./componnent/Dassboard/Dassboard";
import Signin from "./pages/Auth/signin";
import ProductAdd from "./pages/admin/products/ProductAdd";
import ProductEdit from "./pages/admin/products/ProductEdit";
import ProductAdminPage from "./pages/admin/products/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route>
        <Route path="/signin" element={<Signin />} />
        <Route index element={<HomeLayout />} />
      </Route>
      <Route path="/admin" element={<DashboardLayout />}>
        {/* <Route index element={<AdminLayout/>} /> */}
        <Route path="products" element={< ProductAdminPage />} />
        <Route path="product/add" element={< ProductAdd/>} />
        <Route path="product/edit/:id" element={< ProductEdit/>} />
      </Route>
    </Routes>
  );
}

export default App;
