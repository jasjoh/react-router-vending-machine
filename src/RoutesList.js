import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import IceCream from "./IceCream";
import Soda from "./Soda";

function RoutesList() {
  return (
    <Routes>
      <Route path="/chips" element={<Chips />} />
      <Route path="/ice-cream" element={<IceCream />} />
      <Route path="/soda" element={<Soda />} />
      <Route path="/" element={<VendingMachine />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
