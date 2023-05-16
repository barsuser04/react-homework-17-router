import React from "react";
import { Route, Routes } from "react-router-dom";
import { Products } from "../pages/Products";
import { MyOrder } from "../pages/MyOrder";
import Home from "../pages/Home";
import { MyCards } from "../pages/MyCards";
import DetailsProduct from "../pages/DetailsProduct";

const AppRoutes = () => {
  return (
    <Routes className="router">
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<DetailsProduct />} />
      <Route path="/myCards" element={<MyCards />} />
      <Route path="/myOrder" element={<MyOrder />} />
    </Routes>
  );
};

export default AppRoutes;
