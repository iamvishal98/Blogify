import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/auth/authSlice";
import { Button } from "antd";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <header>
      <Link className="logo " to="/">
        BlogIfy
      </Link>
      <nav>
        {user ? (
          <>
            {location.pathname != "/create" ? (
              <Button type="primary" onClick={() => navigate("/create")}>
                {" "}
                CREATE POST
              </Button>
            ) : (
              ""
            )}
            <Button onClick={() => dispatch(logout())}>LOGOUT</Button>
          </>
        ) : (
          <>
            <Button size={"large"} onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button size={"large"} onClick={() => navigate("/register")}>
              Register
            </Button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
