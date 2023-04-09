import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex gap-5 text-2xl font-bold py-2 px-2">
      <Link to="/">Home</Link>
      <Link to="/countries">Countries</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Header;
