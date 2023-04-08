import React from "react";
import Link from "../Link/Link";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About Us",
      path: "/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 5,
      name: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <nav>
      <Bars3Icon className="h-6 w-6 "></Bars3Icon>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
