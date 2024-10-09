import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "./Headers";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
