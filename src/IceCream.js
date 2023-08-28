import React from "react";
import { Link } from "react-router-dom";

function IceCream() {
  return (
    <div>
      <p> Ice Cream! </p>
      <Link to="/">Back to the vending machine</Link>
    </div>
  );
}

export default IceCream;
