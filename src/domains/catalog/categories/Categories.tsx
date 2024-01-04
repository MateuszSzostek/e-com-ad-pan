import React from "react";
import Layout from "../../layout";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { Table, Row, Col, Tag, Button, Modal, notification, Spin } from "antd";
import type { ColumnsType } from "antd/es/table";

import { useState } from "react";
import AddCategoryModal from "./modules/AddCategoryModal/AddCategoryModal";
import EditCategoryModal from "./modules/EditCategoryModal/EditCategoryModal";

export default function Products() {
  const productsData = useSelector((state: RootState) => state.products);

  const [addCategoryModalOpened, setAddCategoryModalOpened] = useState(false);
  const [editCategoryModalOpened, setEditCategoryModalOpened] = useState(false);
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

  const showAddCategoryModal = () => {
    setAddCategoryModalOpened(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setAddCategoryModalOpened(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleAddCategoryModalOpenedCancel = () => {
    console.log("Clicked cancel button");
    setAddCategoryModalOpened(false);
  };

  return (
    <Layout>
      {contextHolder}
      <Col>
        <Row>Categories</Row>
        <Row>
          <Button type="primary" onClick={showAddCategoryModal}>
            Add Category
          </Button>
        </Row>
      </Col>
      <Modal
        open={addCategoryModalOpened}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleAddCategoryModalOpenedCancel}
        footer={() => <></>}
      >
        <AddCategoryModal />
      </Modal>
      <Modal
        open={editCategoryModalOpened}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={() => {}}
        width={1440}
        footer={() => <></>}
      >
        <EditCategoryModal />
      </Modal>
    </Layout>
  );
}
