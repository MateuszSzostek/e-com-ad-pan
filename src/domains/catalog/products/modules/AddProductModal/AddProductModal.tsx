import React, { useRef, useState } from "react";
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
  Modal,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import SelectProductModal from "../SelectProductModal/SelectProductModal";

type AddProductFieldType = {
  id?: string;
  name?: string;
  provider?: string;
  price?: string;
  providerPrice?: string;
  margin?: string;
  vat?: string;
  netProfit?: string;
  suggestedDetailPrice?: string;
  shortDescription?: string;
  description?: string;
  tooBigForAParcelLocker?: string;
  deliveryTime?: string;
  nextDelivery?: string;
  length?: string;
  height?: string;
  weight?: string;
  amountInBox?: string;
  state?: string;
  code?: string;
  linkToInstruction?: string;
  linkToPictures?: string;
  volume: string;
  categories?: string;
  tags?: string;
  pictures?: string;
};

type IkonkaWarehouseFieldType = {
  kod_kreskowy?: string;
  nazwa?: string;
  dostawca?: string;
  cena?: string;
  grupa_rabatowa?: string;
  vat?: string;
  sugerowana_cena_detaliczna?: string;
  opis_krotki?: string;
  opis?: string;
  zdp?: string;
  czas_dostawy?: string;
  najblizsza_dostawa?: string;
  dlugosc?: string;
  wysokosc?: string;
  waga?: string;
  sztuk_w_kartonie?: string;
  stan?: string;
  kod?: string;
  link_do_instrukcji?: string;
  link_do_zdjec?: string;
  kategoria?: string;
  objetosc?: string;
  zdjecia?: string;
};

const m = 16;

export default function AddProductModal() {
  const formRef = useRef(null);
  const warehouseDataFormRef = useRef(null);

  const [selectProdyctModalOpened, setSelectProductModalOpened] =
    useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showSelectProductModal = () => {
    setSelectProductModalOpened(true);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
    console.error(formRef);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    console.error(formRef);
  };

  return (
    <>
      <Row gutter={[m, m]}>
        <Col span={12}>
          <Row gutter={[m, m]} align={"middle"}>
            <Col span={8}>
              <Typography.Title level={3}>Add Product</Typography.Title>
            </Col>
            <Col span={4}>
              <Tag>DEACTIVATED</Tag>
            </Col>
            <Col span={4}>
              <Button>Activate</Button>
            </Col>
            <Col span={4}>
              <Button>Add Couple Item</Button>
            </Col>
          </Row>
          <Form
            ref={formRef}
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
                <Form.Item<AddProductFieldType>
                  label="Id"
                  name="id"
                  rules={[{ required: true, message: "Id is required" }]}
                >
                  <Input placeholder="Enter Id" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: "Name is required" }]}
                >
                  <Input placeholder="Enter name" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Provider"
                  name="provider"
                  rules={[{ required: true, message: "Name is required" }]}
                >
                  <Select
                    placeholder="Ikonka"
                    style={{ width: 120 }}
                    // onChange={handleChange}
                    options={[
                      { value: "jack", label: "Jack" },
                      { value: "lucy", label: "Lucy" },
                      { value: "Yiminghe", label: "yiminghe" },
                      { value: "disabled", label: "Disabled", disabled: true },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[m, m]}>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Price"
                  name="price"
                  rules={[{ required: true, message: "Price is required" }]}
                >
                  <Input placeholder="Enter price" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Provider Price"
                  name="providerPrice"
                  rules={[
                    { required: true, message: "Provider price is required" },
                  ]}
                  labelCol={{ span: 24, offset: 0 }}
                >
                  <Input placeholder="Enter provider price" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Margin"
                  name="margin"
                  rules={[{ required: true, message: "Margin is required" }]}
                >
                  <Input placeholder="Enter margin price" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[m, m]}>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Vat"
                  name="vat"
                  rules={[{ required: true, message: "Vat is required" }]}
                >
                  <Input placeholder="Enter vat" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Net Profit"
                  name="netProfit"
                  rules={[
                    { required: true, message: "Net profit is required" },
                  ]}
                >
                  <Input placeholder="Enter net profit" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Suggested Detail Price"
                  name="suggestedDetailPrice"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "Suggested detail price is required",
                    },
                  ]}
                >
                  <Input placeholder="Enter suggested detail price" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item<AddProductFieldType>
                  label="Short Description"
                  name="shortDescription"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "Short description is required",
                    },
                  ]}
                >
                  <TextArea placeholder="Enter short description" rows={3} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item<AddProductFieldType>
                  label="Description"
                  name="description"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "Description is required",
                    },
                  ]}
                >
                  <TextArea placeholder="Enter  description" rows={4} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[m, m]}>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Too Big For A Parcel Locker"
                  name="tooBigForAParcelLocker"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "Too Big For A Parcel Locker is required",
                    },
                  ]}
                >
                  <Input placeholder="Enter too big for a parcel locker" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Delivery Time"
                  name="deliveryTime"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "Delivery Time is required",
                    },
                  ]}
                >
                  <Input placeholder="Enter Delivery Time" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Next Delivery"
                  name="nextDelivery"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "Next Delivery is required",
                    },
                  ]}
                >
                  <Input placeholder="Enter Next Delivery" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[m, m]}>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Length"
                  name="length"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "Length is required",
                    },
                  ]}
                >
                  <Input placeholder="Enter length" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Height"
                  name="height"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "Height is required",
                    },
                  ]}
                >
                  <Input placeholder="Enter height" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Weight"
                  name="weight"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "Weight is required",
                    },
                  ]}
                >
                  <Input placeholder="Enter weight" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[m, m]}>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Amount In Box"
                  name="amountInBox"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "Amount In Box is required",
                    },
                  ]}
                >
                  <Input placeholder="Enter Amount In Box" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="State"
                  name="state"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "State is required",
                    },
                  ]}
                >
                  <Input placeholder="Enter Enter State" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Code"
                  name="code"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "Code is required",
                    },
                  ]}
                >
                  <Input placeholder="Enter Code" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[m, m]}>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Link To Instruction"
                  name="linkToInstruction"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "Link To Instruction is required",
                    },
                  ]}
                >
                  <Input placeholder="Enter Link To Instruction" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Link To Pictures"
                  name="linkToPictures"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "Link To Pictures is required",
                    },
                  ]}
                >
                  <Input placeholder="Enter Link To Pictures" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item<AddProductFieldType>
                  label="Volume"
                  name="volume"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "Volume is required",
                    },
                  ]}
                >
                  <Input placeholder="Enter Volume" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Item<AddProductFieldType>
                  label="Categories"
                  name="categories"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "Categories is required",
                    },
                  ]}
                >
                  <Form.List
                    name="categories"
                    rules={[
                      {
                        validator: async (_, names) => {
                          //  if (!names || names.length < 2) {
                          //  return Promise.reject(
                          //</Col>     new Error("At least 2 passengers")
                          //  );
                          // }
                        },
                      },
                    ]}
                  >
                    {(fields, { add, remove }, { errors }) => (
                      <>
                        <Row gutter={[0, m]} style={{ marginBottom: "20px" }}>
                          <Select
                            placeholder="Categories"
                            style={{ width: 120 }}
                            onChange={(value) => {
                              add(value);
                            }}
                            options={[
                              { value: "jack", label: "Jack" },
                              { value: "lucy", label: "Lucy" },
                              { value: "Yiminghe", label: "yiminghe" },
                            ]}
                          />
                        </Row>

                        <Row gutter={[m, 0]}>
                          {fields.map((field, index) => (
                            <Col span={4} key={field.key}>
                              <Form.Item required={false} key={field.key}>
                                <Row wrap={false}>
                                  <Form.Item {...field} noStyle>
                                    <Input disabled={true} />
                                  </Form.Item>

                                  {fields.length > 1 && (
                                    <MinusCircleOutlined
                                      className="dynamic-delete-button"
                                      onClick={() => remove(field.name)}
                                    />
                                  )}
                                </Row>
                              </Form.Item>
                            </Col>
                          ))}
                        </Row>
                      </>
                    )}
                  </Form.List>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Item<AddProductFieldType>
                  label="Tags"
                  name="tags"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "Categories is required",
                    },
                  ]}
                >
                  <Form.List
                    name="tags"
                    rules={[
                      {
                        validator: async (_, names) => {
                          //  if (!names || names.length < 2) {
                          //  return Promise.reject(
                          //</Col>     new Error("At least 2 passengers")
                          //  );
                          // }
                        },
                      },
                    ]}
                  >
                    {(fields, { add, remove }, { errors }) => (
                      <>
                        <Row gutter={[0, m]} style={{ marginBottom: "20px" }}>
                          <Select
                            placeholder="Tags"
                            style={{ width: 120 }}
                            onChange={(value) => add(value, 0)}
                            options={[
                              { value: "jack", label: "Jack" },
                              { value: "lucy", label: "Lucy" },
                              { value: "Yiminghe", label: "yiminghe" },
                            ]}
                          />
                        </Row>

                        <Row gutter={[m, 0]}>
                          {fields.map((field, index) => (
                            <Col span={4} key={field.key}>
                              <Form.Item required={false} key={field.key}>
                                <Row wrap={false}>
                                  <Form.Item
                                    {...field}
                                    validateTrigger={["onChange", "onBlur"]}
                                    rules={[
                                      {
                                        required: true,
                                        whitespace: true,
                                        message:
                                          "Please input passenger's name or delete this field.",
                                      },
                                    ]}
                                    noStyle
                                  >
                                    <Input
                                      placeholder="passenger name"
                                      disabled={true}
                                    />
                                  </Form.Item>

                                  {fields.length > 1 && (
                                    <MinusCircleOutlined
                                      className="dynamic-delete-button"
                                      onClick={() => remove(field.name)}
                                    />
                                  )}
                                </Row>
                              </Form.Item>
                            </Col>
                          ))}
                        </Row>
                      </>
                    )}
                  </Form.List>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Item<AddProductFieldType>
                  label="Pictures"
                  name="pictures"
                  labelCol={{ span: 24, offset: 0 }}
                  rules={[
                    {
                      required: true,
                      message: "Pictures are required",
                    },
                  ]}
                >
                  <Form.List
                    name="pictures"
                    rules={[
                      {
                        validator: async (_, names) => {
                          //  if (!names || names.length < 2) {
                          //  return Promise.reject(
                          //</Col>     new Error("At least 2 passengers")
                          //  );
                          // }
                        },
                      },
                    ]}
                  >
                    {(fields, { add, remove }, { errors }) => (
                      <>
                        <Row gutter={[0, m]} style={{ marginBottom: "20px" }}>
                          <Select
                            placeholder="Pictures"
                            style={{ width: 120 }}
                            onChange={(value) => add(value, 0)}
                            options={[
                              { value: "jack", label: "Jack" },
                              { value: "lucy", label: "Lucy" },
                              { value: "Yiminghe", label: "yiminghe" },
                            ]}
                          />
                        </Row>

                        <Row gutter={[m, 0]}>
                          <Col span={24}>
                            {fields.map((field, index) => (
                              <Form.Item required={false} key={field.key}>
                                <Form.Item
                                  {...field}
                                  validateTrigger={["onChange", "onBlur"]}
                                  rules={[
                                    {
                                      required: true,
                                      whitespace: true,
                                      message:
                                        "Please input passenger's name or delete this field.",
                                    },
                                  ]}
                                  noStyle
                                >
                                  <Input
                                    placeholder="passenger name"
                                    disabled={true}
                                  />
                                </Form.Item>
                                <Image
                                  width={200}
                                  src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`}
                                />
                                {fields.length > 1 && (
                                  <MinusCircleOutlined
                                    className="dynamic-delete-button"
                                    onClick={() => remove(field.name)}
                                  />
                                )}
                              </Form.Item>
                            ))}
                          </Col>
                        </Row>
                      </>
                    )}
                  </Form.List>
                </Form.Item>
              </Col>
            </Row>
            <Col>
              <Button type="primary" htmlType="submit">
                Save Changes
              </Button>
              <Button>Discard Changes</Button>
            </Col>
          </Form>
        </Col>
        <Col span={12}>
          <Form
            ref={warehouseDataFormRef}
            name="warehouseDataFormRef"
            labelCol={{ span: 24 }}
            style={{ maxWidth: 700 }}
            initialValues={{ remember: true }}
            //onFinish={onFinish}
            //onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            labelWrap={false}
          >
            <Row
              style={{ marginTop: "18px", marginBottom: "20px" }}
              gutter={[m, m]}
            >
              <Col span={8}>
                <Button type="primary" onClick={showSelectProductModal}>
                  Select Product
                </Button>
              </Col>
            </Row>
            <Row gutter={[m, m]}>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType>
                    label="kod_kreskowy"
                    name="kod_kreskowy"
                  >
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType>
                    label="nazwa"
                    name="nazwa"
                  >
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType>
                    label="dostawca"
                    name="dostawca"
                  >
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
            </Row>
            <Row gutter={[m, m]}>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType> label="cena" name="cena">
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType>
                    label="grupa_rabatowa"
                    name="grupa_rabatowa"
                  >
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
              <Col span={8}></Col>
            </Row>
            <Row gutter={[m, m]}>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType> label="vat" name="vat">
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
              <Col span={8}></Col>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType>
                    label="sugerowana_cena_detaliczna"
                    name="sugerowana_cena_detaliczna"
                  >
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
            </Row>
            <Row gutter={[m, m]}>
              <Col span={24}>
                <Form.Item<IkonkaWarehouseFieldType>
                  label="opis_krotki"
                  name="opis_krotki"
                  labelCol={{ span: 24, offset: 0 }}
                >
                  <TextArea rows={3} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[m, m]}>
              <Col span={24}>
                <Form.Item<IkonkaWarehouseFieldType>
                  label="opis"
                  name="opis"
                  labelCol={{ span: 24, offset: 0 }}
                >
                  <TextArea rows={4} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[m, m]}>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType> label="zdp" name="zdp">
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType>
                    label="czas_dostawy"
                    name="czas_dostawy"
                  >
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType>
                    label="najblizsza_dostawa"
                    name="najblizsza_dostawa"
                  >
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
            </Row>

            <Row gutter={[m, m]}>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType>
                    label="dlugosc"
                    name="dlugosc"
                  >
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType>
                    label="wysokosc"
                    name="wysokosc"
                  >
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType> label="waga" name="waga">
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
            </Row>

            <Row gutter={[m, m]}>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType>
                    label="sztuk_w_kartonie"
                    name="sztuk_w_kartonie"
                  >
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType> label="stan" name="stan">
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType> label="kod" name="kod">
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
            </Row>

            <Row gutter={[m, m]}>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType>
                    label="link_do_instrukcji"
                    name="link_do_instrukcji"
                  >
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType>
                    label="link_do_zdjec"
                    name="link_do_zdjec"
                  >
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType>
                    label="kategoria"
                    name="kategoria"
                  >
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
            </Row>

            <Row gutter={[m, m]}>
              <Col span={8}>
                <Row wrap={false}>
                  <Form.Item<IkonkaWarehouseFieldType>
                    label="objetosc"
                    name="objetosc"
                  >
                    <Input disabled={true} />
                  </Form.Item>
                  <Button style={{ marginTop: "31px" }}>C</Button>
                </Row>
              </Col>
              <Col span={8}></Col>
              <Col span={8}></Col>
            </Row>

            <Row gutter={[m, m]}>
              <Col span={24}>
                <Form.Item<IkonkaWarehouseFieldType>
                  label="zdjecia"
                  name="zdjecia"
                  labelCol={{ span: 24, offset: 0 }}
                >
                  <TextArea rows={4} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row></Row>
      <Modal
        open={selectProdyctModalOpened}
        // onOk={handleOk}
        confirmLoading={confirmLoading}
        // onCancel={handleCancel}
        width={1440}
        footer={() => <></>}
      >
        <SelectProductModal />
      </Modal>
    </>
  );
}
