import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        STOCKTAKER
      </Link>
      <ul>
        <li className="active">
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
