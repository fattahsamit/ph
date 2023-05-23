import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-3/4 mx-auto my-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
