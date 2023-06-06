import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "./redux/auth/authSlice";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <header>
      <Link to="/">My blog</Link>
      <nav>
        {user ? (
          <>
            <Link to="/create">CREATE A POST</Link>
            <a onClick={() => dispatch(logout())}>LOGOUT</a>
          </>
        ) : (
          <>
            <Link to="/login">LOGIN</Link>
            <Link to="/register">REGISTER</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
