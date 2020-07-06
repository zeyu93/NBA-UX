import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <div>
      <Link to="/login">login </Link>
      <Link to="/register">register </Link>
    </div>
  );
}

export default Navbar;
