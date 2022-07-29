import React from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="site-title">
        STOCKTAKER
      </NavLink>
      <ul>
        <li className="active">
          <NavLink exact to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Products">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
