import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home/Home";
import AddProduct from "./components/Product/AddProduct";
import EditProduct from "./components/Product/EditProduct";
import ProductList from "./components/Product/ProductList.jsx";
import CreditCardPage from "./pages/CreditCardPage";
import MenuList from "./pages/MenuList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/create" element={<AddProduct />} />
      <Route path="credit" element={<CreditCardPage />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/menulist" element={<MenuList />} />
    </Routes>
  );
};

export default MainRoutes;
