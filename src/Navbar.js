import React from "react";

function Navbar() {
  return <nav className="nav">
    <a href="/" className="site-title">STOCKTAKER</a>
    <ul>
      <li><a href="/Home">Home</a></li>
      <li><a href="/About">About</a></li>
      <li><a href="/Products">Products</a></li>
    </ul>
  </nav>
}

export default Navbar;
