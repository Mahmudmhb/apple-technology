import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../assets/549679bf60464fc19e9d1c02fa75eb1b.webp";

const Navber = () => {
  const { handleLogOut, user } = useContext(AuthContext);
  //   console.log(user);
  const handleTOLogOut = () => {
    handleLogOut().then().catch();
  };
  const nav = (
    <>
      <li>
        <NavLink to="/"> Home</NavLink>
      </li>
      <li>
        <NavLink to="/category"> Category</NavLink>
      </li>
      <li>
        <NavLink to="/addproducts"> Add Products</NavLink>
      </li>
      <li>
        <NavLink to="/mycart"> My Cart</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav}
            </ul>
          </div>{" "}
          <Link to="/">
            <img className="w-14 h-14 rounded-3xl" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        {user ? (
          <>
            <div className="navbar-end">
              <p>{user.email}</p>
              <button onClick={handleTOLogOut}>
                <span className="btn">LogOut</span>
              </button>
            </div>
          </>
        ) : (
          <div className="navbar-end">
            <Link to="/login">
              <span className="btn">Login</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;
