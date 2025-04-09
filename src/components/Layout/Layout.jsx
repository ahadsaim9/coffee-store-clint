import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="pt-17">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
