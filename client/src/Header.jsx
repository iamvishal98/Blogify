import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">My blog</Link>
      <nav>
        <Link to="/login">LOGIN</Link>
        <Link to="/register">REGISTER</Link>
      </nav>
    </header>
  );
};

export default Header;
