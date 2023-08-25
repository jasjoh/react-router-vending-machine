import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <ul>
      <li><Link to="/chips">Purchase some chips.</Link></li>
      <li><Link to="/soda">Purchase a soda.</Link></li>
      <li><Link to="/ice-cream">Purchase some ice-cream.</Link></li>
    </ul>
  );
}

export default VendingMachine;
