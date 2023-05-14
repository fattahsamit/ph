import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        Register
      </NavLink>
      <NavLink
        to="/register-rbs"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        Register RBS
      </NavLink>
    </nav>
  );
};

export default Header;
