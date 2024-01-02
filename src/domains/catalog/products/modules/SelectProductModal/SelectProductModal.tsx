import React, { useRef, useEffect } from "react";
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
  Spin,
} from "antd";

import { useGetAllIkonkaProductsQuery } from "../../services/ikonkaProduct/ikonkaProductSlice";
import { ColumnsType } from "antd/es/table";
import { IProduct } from "../../services/product/productSlice.types";

const m = 16;

export default function SelectProductModal({
  selectProductHandler,
  hideSelectProductModal,
}) {
  const { data, isFetching, isLoading, refetch } = useGetAllIkonkaProductsQuery(
    {}
  );

  const columnsData = [
    {
      title: "Kod Kreskowy",
      dataIndex: "kod_kreskowy",
      key: "kod_kreskowy",
      width: "30%",
    },
    {
      title: "Nazwa",
      dataIndex: "nazwa",
      key: "nazwa",
      width: "30%",
    },
    {
      title: "Select",
      dataIndex: "select",
      key: "select",
      width: "30%",

      render: (id, record, index) => (
        <Button
          type="primary"
          onClick={() => {
            console.log(record);
            selectProductHandler(record);
            hideSelectProductModal();
          }}
        >
          Select
        </Button>
      ),
    },
  ];

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

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Row gutter={[m, m]}>
        <Col span={24}>
          <Typography.Title level={3}>
            Select Provider and his Product
          </Typography.Title>
          <Form
            ref={formRef}
            name="selectProviderAndSelectProduct"
            labelCol={{ span: 10 }}
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
            <Row gutter={0}>
              <Col span={24}>
                {isLoading === true ? (
                  <Spin size="large" />
                ) : (
                  <Table
                    dataSource={data?.allIkonkaProducts}
                    columns={columnsData}
                  />
                )}
              </Col>
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
