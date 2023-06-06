import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../redux/auth/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message); //toast
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (data) => {
    dispatch(login(data));
  };
  return (
    <form className="login" onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="email"
        name="email"
        {...register("email")}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        {...register("password")}
      />
      <button>LOGIN</button>
    </form>
  );
};

export default Login;
