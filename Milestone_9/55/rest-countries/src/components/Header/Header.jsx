import React from "react";
// import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <div className="flex justify-center gap-5 text-2xl font-bold py-2 px-2">
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/countries">Countries</ActiveLink>
      <ActiveLink to="/about">About</ActiveLink>
      <ActiveLink to="/contact">Contact</ActiveLink>
    </div>
  );
};

export default Header;
