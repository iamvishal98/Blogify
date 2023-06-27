import React, { useEffect } from "react";
import { Form, Input, Button, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { reset, registerUser } from "../redux/auth/authSlice";
import Spinner from "../components/Spinner";
import SignupPageImage from "../../assets/blog-signup.jpeg";

const Signup = () => {
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

  const onFinish = (values) => {
    if (values.password !== values.password2) {
      toast.error("Passwords do not match");
    } else {
      dispatch(registerUser(values));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="auth-page-container">
      <div className="left-side">
        <img src={SignupPageImage} alt="signup" />
      </div>
      <div className="right-side">
        <div className="form-name">
          <h2>Sign up to Blogify</h2>
        </div>
        <Form
          layout="vertical"
          className="auth-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item
            label="UserName"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="password2"
            rules={[
              {
                required: true,
                message: "Confirm your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
        <div className="form-link">
          <Divider>Or</Divider>
          <p>
            Already a member ? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
