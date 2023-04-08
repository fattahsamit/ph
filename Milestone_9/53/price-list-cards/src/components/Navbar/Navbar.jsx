import React from "react";

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
      <ul className="md:flex">
        {routes.map((route) => (
          <li>{route.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
