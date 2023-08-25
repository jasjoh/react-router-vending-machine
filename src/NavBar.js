import React from "react";
import { NavLink } from "react-router-dom";

/** Display a navigation bar at the top of all pages */
function NavBar() {
  let activeStyle = {
    fontWeight: "bold",
  };

  return (
    <ul>
      <li><NavLink to="/"
        style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>Home</NavLink>
      </li>
      <li><NavLink to="/chips"
        style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>Chips</NavLink>
      </li>
      <li><NavLink to="/soda"
        style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>Soda</NavLink>
      </li>
      <li><NavLink to="/ice-cream"
        style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>IceCream</NavLink>
      </li>
    </ul>
  );
}

export default NavBar;

