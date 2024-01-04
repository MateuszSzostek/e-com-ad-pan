import React, { useRef, useState } from "react";
import { Row, Col, Input, Typography, Form } from "antd";

type EditCategoryFieldType = {
  name: string;
  parentName: string;
};

const m = 16;

export default function EditCategoryModal() {
  const [editCategoryForm] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Row gutter={[m, m]}>
        <Col span={12}>
          <Row gutter={[m, m]} align={"middle"}>
            <Typography.Title level={3}>Edit Category</Typography.Title>
          </Row>
          <Form
            form={editCategoryForm}
            name="basic"
            labelCol={{ span: 10 }}
            style={{ maxWidth: 700 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            labelWrap={false}
          >
            <Row gutter={[m, m]}>
              <Col span={8}>
                <Form.Item<EditCategoryFieldType>
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: "Name is required" }]}
                >
                  <Input placeholder="Enter name" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item<EditCategoryFieldType>
                  label="Parent Name"
                  name="parentName"
                  rules={[
                    { required: true, message: "Parent Name is required" },
                  ]}
                >
                  <Input placeholder="Enter parent name" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
}
