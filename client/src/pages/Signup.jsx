import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { reset, registerUser } from "../redux/auth/authSlice";

const Signup = () => {
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
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      toast.error("Passwords do not match");
    } else {
      dispatch(registerUser(data));
    }
  };
  return (
    <form className="register" onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <input type="text" placeholder="name" name="name" {...register("name")} />
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
      <input
        type="password"
        placeholder="confirm password"
        name="password2"
        {...register("password2")}
      />

      <button>Register</button>
    </form>
  );
};

export default Signup;
