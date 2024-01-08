import React, { useEffect } from "react";
import Layout from "../../layout";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { Table, Row, Col, Tag, Button, Modal, notification, Spin } from "antd";
import type { ColumnsType } from "antd/es/table";

import { useState } from "react";
import AddCategoryModal from "./modules/AddCategoryModal/AddCategoryModal";
import EditCategoryModal from "./modules/EditCategoryModal/EditCategoryModal";
import {
  useGetAllCategoriesQuery,
  useGetCategoriesTreeQuery,
} from "./services/category/categorySlice";

export default function Categories() {
  const productsData = useSelector((state: RootState) => state.products);

  const [addCategoryModalOpened, setAddCategoryModalOpened] = useState(false);
  const [editCategoryModalOpened, setEditCategoryModalOpened] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [api, contextHolder] = notification.useNotification();
  const { data, isLoading: isLoadingAllCategories } = useGetAllCategoriesQuery(
    {}
  );

  const { data: categoriesTreeData, isLoading: isLoadingCategoriesTree } =
    useGetCategoriesTreeQuery({});

  const openNotification = () => {
    api.open({
      message: "Success",
      description: "All stores data has been synchronized succesfully!",
      duration: 4,
    });
  };

  const toggleAddCategoryModal = () => {
    setAddCategoryModalOpened(!addCategoryModalOpened);
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

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (categoriesTreeData?.categoriesTree)
      console.log(JSON.parse(categoriesTreeData?.categoriesTree));
  }, [categoriesTreeData]);

  return (
    <Layout>
      {contextHolder}
      <Col>
        <Row>Categories</Row>
        <Row>
          <Button type="primary" onClick={toggleAddCategoryModal}>
            Add Category
          </Button>
        </Row>
        <Row>{!isLoadingAllCategories && <p>{data?.toString()}</p>}</Row>
        <Row>
          {!isLoadingCategoriesTree && (
            <p>
              {JSON.stringify(JSON.parse(categoriesTreeData?.categoriesTree))}
            </p>
          )}
        </Row>
      </Col>
      <Modal
        open={addCategoryModalOpened}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={toggleAddCategoryModal}
        footer={() => <></>}
      >
        <AddCategoryModal toggleAddCategoryModal={toggleAddCategoryModal} />
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
