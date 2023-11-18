import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import { useAuthenticationMutation } from "../../services/access/accessSlice";
import { loginFixedCacheKey } from "../../services/access/accessSlide.utils";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";

const { Text } = Typography;

export default function Login() {
  const [authenticate, result] = useAuthenticationMutation({
    fixedCacheKey: loginFixedCacheKey,
  });

  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    authenticate({
      email: values?.username,
      password: values?.password,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
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
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Text>
        You do not have an account? Register
        <Link to="/access/register"> here</Link>
      </Text>
      <br />
      <Text>
        Have you forgotten your password? Reset it{" "}
        <Link to="/access/reset-password">here</Link>
      </Text>

      {user && (
        <>
          <div>{user?.accessToken}</div>
          <div>{user?.refreshToken}</div>
          <div>{user?.name}</div>
          <div>{user?.surname}</div>
        </>
      )}
    </>
  );
}
