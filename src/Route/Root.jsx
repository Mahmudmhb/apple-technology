import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../Header/Navber";
import Footer from "../Header/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
