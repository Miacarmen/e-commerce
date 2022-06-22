import React from "react";
import { Link } from "react-router-dom";
// icons
import { BsCart3 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">Logo</div>

      <div className="navbar-center justify-between">Brand Name</div>

      <div className="navbar-end">
        <Link to="/" className="pr-2">Home</Link>
        <Link to="/products" className="pr-2">Products</Link>
        <Link to="/login" className="pr-2">Login</Link>
        <Link to="/account">
          <button className="btn btn-ghost btn-circle">
            <FiUser size={25} />
          </button>
        </Link>
        <Link to="/cart">
          <button className="btn btn-ghost btn-circle">
            <BsCart3 size={25} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
