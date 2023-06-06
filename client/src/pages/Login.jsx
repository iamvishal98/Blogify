import React from "react";
import { Box, TextField, Button, styled } from "@mui/material";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;

const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0px 0px 0px",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  & > div,
  & > button {
    margin-top: 20px;
  }
`;

const Login = () => {
  return (
    <form className="login">
      <h1>Login</h1>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button>LOGIN</button>
    </form>
  );
};

export default Login;
