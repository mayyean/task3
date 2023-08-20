import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/create">Create</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};

export default Navbar;
