import React from "react";
import { Link } from 'react-router-dom';
// icons
import { BsCart3 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        Logo
      </div>

      <div className="navbar-center justify-between">
          Brand Name
      </div>

      <div className="navbar-end">
        <Link to="">Home</Link>
        <Link to="/products">Products</Link>
        <p>Login</p>
        <button className="btn btn-ghost btn-circle">
          <FiUser size={25} />
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <BsCart3 size={25} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Nav;
