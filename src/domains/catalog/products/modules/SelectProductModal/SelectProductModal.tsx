import React, { useRef } from "react";
import {
  Row,
  Col,
  Tag,
  Button,
  Input,
  Typography,
  Select,
  Form,
  Image,
  Table,
} from "antd";

import { useGetAllIkonkaProductsQuery } from "../../services/ikonkaProduct/ikonkaProductSlice";

const m = 16;

export default function SelectProductModal() {
  const { data, isFetching, isLoading, refetch } = useGetAllIkonkaProductsQuery(
    {}
  );

  const formRef = useRef(null);
  const warehouseDataFormRef = useRef(null);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    console.error(formRef);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    console.error(formRef);
  };

  const selectProvider = (provider: string) => {
    refetch();
    console.error(data);
  };

  return (
    <>
      <Row gutter={[m, m]}>
        <Col span={12}>
          <Typography.Title level={3}>
            Select Provider and his Product
          </Typography.Title>
          <Form
            ref={formRef}
            name="selectProviderAndSelect"
            labelCol={{ span: 10 }}
            style={{ maxWidth: 700 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            labelWrap={false}
          >
            <Row gutter={[m, m]} style={{ marginBottom: "20px" }}>
              <Select
                placeholder="Providers"
                style={{ width: 120 }}
                onChange={(value) => selectProvider(value)}
                options={[{ value: "ikonka", label: "Ikonka" }]}
              />
            </Row>
          </Form>
          {/*
<Table dataSource={productsData.products} columns={columnsData} />;
*/}
        </Col>
      </Row>
      <Row></Row>
    </>
  );
}
