import React from "react";
import { Link } from "react-router-dom";

/** Displays 'Chips!' and a link back to vending machine */
function Chips() {
  return (
    <div>
      <p> Chips! </p>
      <Link to="/">Back to the vending machine</Link>
    </div>
  );
}

export default Chips;
