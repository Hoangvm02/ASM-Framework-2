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
import CategoryAdminPage from "./pages/admin/categories";
import CategoryAdd from "./pages/admin/categories/CategoryAdd";
import CategoryEdit from "./pages/admin/categories/CategoryEdit";
import ProductDetail from "./pages/admin/products/DetailProducts";
import Home from "./pages/users/Home";
import Signup from "./pages/Auth/signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/admin" element={<DashboardLayout />}>
        {/* <Route index element={<AdminLayout/>} /> */}
        <Route>
          <Route path="product" element={<ProductAdminPage />} />
          <Route path="product/add" element={<ProductAdd />} />
          <Route path="product/edit/:id" element={<ProductEdit />} />
          <Route path="product/detail/:id" element={<ProductDetail />} />
        </Route>
        <Route>
          <Route path="category" element={<CategoryAdminPage />} />
          <Route path="category/add" element={<CategoryAdd />} />
          <Route path="category/edit/:id" element={<CategoryEdit />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
