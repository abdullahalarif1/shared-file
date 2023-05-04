import React from "react";
import { NavLink } from "react-router-dom";

const IsActive = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-error pl-5" : "pl-5")}
    >
      {children}
    </NavLink>
  );
};

export default IsActive;
