import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
