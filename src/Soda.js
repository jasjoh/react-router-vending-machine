import React from "react";
import { Link } from "react-router-dom";

function Soda() {
  return (
    <div>
      <p> Soda! </p>
      <Link to="/">Back to the vending machine</Link>
    </div>
  );
}

export default Soda;
