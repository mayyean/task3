import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <p>
        <Link to="/home">Home</Link>
      </p>
      <p>
        <Link to="/create">Create</Link>
      </p>
      <p>
        <Link to="/favorites">Favorites</Link>
      </p>
    </div>
  );
};

export default Navbar;
