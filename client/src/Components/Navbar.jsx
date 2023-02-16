import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 bg-opacity-60 backdrop-blur z-50">
      <div className="mx-auto">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl items-center flex"
        >
          <img src={Logo} className="w-8 h-8 mx-2" />
          Music Player
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
