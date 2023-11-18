import React from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";

const { Text } = Typography;

export default function Register() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    email?: string;
    password?: string;
    repeatPassword?: string;
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 10 }}
        initialValues={{ remember: true }}
        style={{ maxWidth: 700 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Repeat Your Password"
          name="repeatPassword"
          rules={[{ required: true, message: "Please repeat your password!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Reset Password
          </Button>
        </Form.Item>
      </Form>
      <Text>
        Do you have an account? Log in
        <Link to="/access/login"> here</Link>
      </Text>
      <br />
      <Text>
        Have you forgotten your password? Reset it{" "}
        <Link to="/access/reset-password">here</Link>
      </Text>
    </>
  );
}
