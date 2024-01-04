import React, { PropsWithChildren, useMemo } from "react";
import ILayout from "./Layout.types";
import { useNavigate } from "react-router-dom";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout as AntdLayout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = AntdLayout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

export default function Layout({ children }: PropsWithChildren<ILayout>) {
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems: MenuProps["items"] = useMemo(
    () => [
      {
        key: "catalog",
        icon: React.createElement(LaptopOutlined),
        label: "Catalog",
        children: [
          {
            key: "products",
            label: "Products",
            onClick: () => navigate("/catalog/products"),
          },
          {
            key: "categories",
            label: "Categories",
            onClick: () => navigate("/catalog/categories"),
          },
        ],
      },
      {
        key: "accounting",
        icon: React.createElement(UserOutlined),
        label: "Accounting",
        children: [
          {
            key: "orders",
            label: "Orders",
            onClick: () => navigate("/accauting/orders"),
          },
          {
            key: "invoices",
            label: "Invoices",
            onClick: () => navigate("/accauting/invoices"),
          },
        ],
      },
      {
        key: "customers",
        icon: React.createElement(NotificationOutlined),
        label: "Customers",
        children: [
          {
            key: "customers-list",
            label: "Customers List",
            onClick: () => navigate("/customers"),
          },
        ],
      },
    ],
    [navigate]
  );

  return (
    <AntdLayout
      style={{ width: "calc(100vw - 15px)", height: "calc(100vh - 24px)" }}
    >
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <AntdLayout style={{ padding: "24px 0", background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              items={menuItems}
            />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {children}
          </Content>
        </AntdLayout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </AntdLayout>
  );
}
