import React from "react";
import Layout from "../../layout";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { Table, Row, Col, Tag, Button, Modal, notification, Spin } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IProduct } from "./services/product/productSlice.types";
import { useState } from "react";
import AddProductModal from "./modules/AddProductModal/AddProductModal";
import { useLazyFetchAllIkonkaProductsQuery } from "./services/ikonkaProduct/ikonkaProductSlice";

const columnsData: ColumnsType<IProduct> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "CategoryMissing",
    dataIndex: "categoryMissing",
    key: "categoryMissing",
    render: (el: boolean) => (el === true ? <Tag color="red">C</Tag> : <></>),
  },
  {
    title: "PendingPriceChanged",
    dataIndex: "pendingPriceChanged",
    key: "pendingPriceChanged",
    render: (el: boolean) => (el === true ? <Tag color="red">P</Tag> : <></>),
  },
  {
    title: "PendingUpdates",
    dataIndex: "pendingUpdates",
    key: "pendingUpdates",
    render: (el: boolean) => (el === true ? <Tag color="red">U</Tag> : <></>),
  },

  {
    title: "Delete",
    dataIndex: "delete",
    key: "delete",
    render: (el: string) => (
      <Button type="primary" danger>
        Delete
      </Button>
    ),
  },
  {
    title: "edit",
    dataIndex: "edit",
    key: "edit",
    render: (el: string) => <Button type="primary">Edit</Button>,
  },
];

export default function Products() {
  const productsData = useSelector((state: RootState) => state.products);
  const [trigger, result, lastPromiseInfo] = useLazyFetchAllIkonkaProductsQuery(
    {}
  );

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: "Success",
      description: "All stores data has been synchronized succesfully!",
      duration: 4,
    });
  };

  const showModal = () => {
    setOpen(true);
  };

  const synhronizeAllProvidersProducts = () => {
    trigger({}).then(() => {
      openNotification();
    });
    console.log(result);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <Layout>
      {contextHolder}
      <Col>
        <Row>Products</Row>
        <Row>Category missing, pending price update, pending updates</Row>
        <Row>
          <Button type="primary" onClick={showModal}>
            ADD PRODUCT
          </Button>
          <Button
            type="primary"
            onClick={synhronizeAllProvidersProducts}
            loading={result.isLoading}
          >
            SYNHRONIZE ALL PROVIDER PRODUCTS
          </Button>
        </Row>
        <Row>
          <Table dataSource={productsData.products} columns={columnsData} />;
        </Row>
      </Col>
      <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={1440}
        footer={() => <></>}
      >
        <AddProductModal />
      </Modal>
    </Layout>
  );
}
