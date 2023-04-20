import React from "react";
import { BoltIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-gray-200 rounded-b-lg px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex-1">
        <a className="normal-case text-xl flex items-center">
          <BoltIcon className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            nextPage
          </span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
