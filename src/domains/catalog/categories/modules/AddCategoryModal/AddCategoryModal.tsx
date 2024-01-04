import React from "react";
import { Col, Input, Typography, Form, Button } from "antd";
import { useAddCategoryMutation } from "../../services/category/categorySlice";

type AddCategoryFieldType = {
  name: string;
  parentName: string;
};

export default function AddCategoryModal() {
  const [addCategory, result] = useAddCategoryMutation();
  const [addCategoryForm] = Form.useForm();

  const onFinish = (values: any) => {
    addCategory({
      category: { name: values.name, parentName: values.parentName },
    });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Col>
        <Typography.Title level={3}>Add Category</Typography.Title>

        <Form
          form={addCategoryForm}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          labelWrap={false}
        >
          <Col>
            <Form.Item<AddCategoryFieldType>
              label="Name"
              name="name"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input placeholder="Enter name" />
            </Form.Item>
            <Form.Item<AddCategoryFieldType>
              label="Parent Name"
              name="parentName"
              rules={[{ required: true, message: "Parent Name is required" }]}
            >
              <Input placeholder="Enter parent name" />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Add Category
            </Button>
            <Button>Discard</Button>
          </Col>
        </Form>
      </Col>
    </>
  );
}
