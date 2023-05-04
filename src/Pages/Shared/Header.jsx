import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import IsActive from "./IsActive";
import icon from '../../assets/icon/mixing.png'

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    const [isHovered , setIsHovered] = useState(false)

    const handleLogout = () => {
      logOut()
      .then(result => {
        navigate('/login')
      })
      .catch(error => console.error(error))
    }
  return (
    <div className="navbar md:px-12 bg-[#33373e] border-b border-error text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#33373e] rounded-box w-52 "
          >
            <IsActive className="ps-5 py-2 " to="/">
              Home
            </IsActive>
            <hr />
            <IsActive className="ps-5 py-2" to="/blog">
              Blog
            </IsActive>
            <hr />
            {user ? (
              <NavLink onClick={handleLogout} className="ps-5 py-2">
                Logout
              </NavLink>
            ) : (
              <IsActive className="ps-5 py-2" to="/login">
                Login
              </IsActive>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img className="w-10 me-3" src={icon} alt="" />
          Cuisine <span className="text-error pl-1">Qi</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <IsActive className="pe-5" to="/">
            Home
          </IsActive>
          <IsActive className="pe-5" to="/blog">
            Blog
          </IsActive>
          {user ? (
            <NavLink className="ps-5" onClick={handleLogout}>
              Logout
            </NavLink>
          ) : (
            <IsActive to="/login">Login</IsActive>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {" "}
            {isHovered && <span>{user.displayName}</span>}
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar ms-3"
            >
              <div
                onMouseEnter={() => setIsHovered(true)}
                className={`w-10 rounded-full`}
              >
                <img src={user.photoURL} />
              </div>
            </label>
          </>
        ) : (
          <NavLink
            className="btn btn-error bg-inherit  w-28 text-white"
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
