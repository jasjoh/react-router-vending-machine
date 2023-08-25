import React from "react";
import { Link } from "react-router-dom";

/** Displays 'Soda!' and a link back to vending machine */
function Soda() {
  return (
    <div>
      <p> Soda! </p>
      <Link to="/">Back to the vending machine</Link>
    </div>
  );
}

export default Soda;
