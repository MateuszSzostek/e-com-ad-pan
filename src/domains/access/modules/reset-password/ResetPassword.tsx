import React from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";

const { Text } = Typography;

export default function ResetPassword() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    email?: string;
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 10 }}
        style={{ maxWidth: 700 }}
        initialValues={{ remember: true }}
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Reset Password
          </Button>
        </Form.Item>
      </Form>
      <Text>
        Do you remember your password? Log in
        <Link to="/access/login"> here</Link>
      </Text>
      <br />
      <Text>
        You do not have an account? Register
        <Link to="/access/register"> here</Link>
      </Text>
    </>
  );
}
