import React from "react";
import { Button, Checkbox, Form, Input, Modal, notification } from "antd";
import { useDispatch } from "react-redux";
import { loginUser } from "../../app/features/authSlice";

const userData = [{ email: "admin", password: "admin" }];

const Login = ({ open, onCancel }) => {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    if (!values) return;
    const user = userData.find(
      (user) => user.email === values.email && user.password === values.password
    );
    if (!user)
      return notification.error({
        message: "Error!",
        description: "Invalid Username and Password",
      });

    dispatch(loginUser(user));
    notification.success({
      message: "success!",
      description: "Logged In successfully",
    });

    window.open(
      "https://atopic-dermatitis-y327wr2031s.streamlit.app/",
      "_self"
    );
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div open={open} onCancel={onCancel} footer={null}>
      <div>
        <p className="mb-4 text-lg font-semibold my-5">Sign In</p>
        <Form
          name="basic"
          className="auth-form w-full"
          layout={"vertical"}
          labelCol={{
            span: 8,
          }}
          // wrapperCol={{
          //   span: 16,
          // }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input placeholder="Enter Email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>

          {/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
