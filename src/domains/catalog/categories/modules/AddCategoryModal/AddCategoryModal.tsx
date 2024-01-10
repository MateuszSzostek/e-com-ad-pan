import React from "react";
import { Col, Input, Typography, Form, Button, notification } from "antd";
import { useAddCategoryMutation } from "../../services/category/categorySlice";
import IAddCategoryModal from "./AddCategoryModal.types";

type AddCategoryFieldType = {
  name: string;
  parentName: string;
};

export default function AddCategoryModal({
  toggleAddCategoryModal,
}: IAddCategoryModal) {
  const [addCategory, result] = useAddCategoryMutation();
  const [addCategoryForm] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const onFinish = (values: any) => {
    addCategory({
      category: { name: values.name, parentName: values.parentName },
    }).then((res) => {
      console.log(res);
      if (res.data.error) {
        api.open({
          message: "Error",
          description: res.data.error,
          duration: 4,
        });
      } else if (res.data.category.name) {
        api.open({
          message: "Success",
          description: "Category has been added successfully",
          duration: 4,
        });
        toggleAddCategoryModal();
        addCategoryForm.setFieldValue("name", "");
        addCategoryForm.setFieldValue("parentName", "");
      }
    });
    // console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}
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
            <Button onClick={toggleAddCategoryModal}>Discard</Button>
          </Col>
        </Form>
      </Col>
    </>
  );
}
