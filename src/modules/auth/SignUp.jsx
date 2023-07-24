import React from "react";
import { Button, Checkbox, Form, Input, Modal, notification } from "antd";
import { useRegisterMutation } from "../../app/services/authApi";

const SignUp = ({ open, onCancel }) => {
  const [register, result] = useRegisterMutation();
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const res = await register(values).unwrap();
      console.log(res);
      notification.success({ message: "Login Successful" });
      onCancel();
    } catch (error) {
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={<div className="">Already have an account? Sign In</div>}
      className="rounded-none"
      width={500}
    >
      <p className="mb-4 text-lg font-semibold my-5">Sign Up to Agro-mart</p>
      <Form
        name="basic"
        className="auth-form w-full"
        layout={"vertical"}
        labelCol={{
          span: 8,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item
          label="First Name"
          name="firstName"
          className="w-full"
          rules={[
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="Enter First Name" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          className="w-full"
          rules={[
            {
              required: true,
              message: "Please input your Last Name!",
            },
          ]}
        >
          <Input placeholder="Enter Last Name" />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          className="w-full"
          rules={[
            {
              required: true,
              message: "Please input your Last Name!",
            },
          ]}
        >
          <Input placeholder="Enter a preferred username" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          className="w-full"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
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
          hasFeedback
        >
          <Input.Password placeholder="Enter Password" />
        </Form.Item>
        {/* <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item> */}

        <Form.Item
          wrapperCol={{
            sm: {
              offset: 8,
              span: 16,
            },
            xs: {
              span: 24,
              offset: 0,
            },
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignUp;
