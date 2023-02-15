import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 bg-opacity-60 backdrop-blur">
      <div className="mx-auto">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Music Player
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
