import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../redux/auth/authSlice";
import { toast } from "react-toastify";
import { Form, Input, Button, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Spinner from "../components/Spinner";
import LoginPageImage from "../../assets/blog-login.jpeg";

const Login = () => {
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
    dispatch(login(values));
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="auth-page-container">
      <div className="left-side">
        <img src={LoginPageImage} alt="login" />
      </div>
      <div className="right-side">
        <div className="form-name">
          <h2>Login to Blogify</h2>
        </div>
        <Form
          className="auth-form"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          size="large"
        >
          <Form.Item
            label="Username"
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

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            {/* Or <Link to="/register">register now!</Link> */}
          </Form.Item>
        </Form>
        <div className="form-link">
          <Divider>Or</Divider>
          <p>
            Not a member ? <Link to="/register">register now!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
