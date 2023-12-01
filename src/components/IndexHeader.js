import React from "react";
import {
  UserOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Avatar, Space } from "antd";

import "../styles/IndexHeader.css";

const { Header } = Layout;

const items = [
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
];

const IndexHeader = () => {
  return (
    <Header className="indexHeader">
      <div className="demo-logo" />
      <Menu
        className="indexHeaderMenu"
        onClick={() => alert("这里还没有东西")}
        defaultSelectedKeys={["1"]}
        mode="horizontal"
        items={items}
      />
      <div className="headerAvatarWrapper">
        <div className="headerAvatar">
          <Space wrap size={16}>
            <Avatar
              className="userIcon"
              size="large"
              icon={<UserOutlined />}
              onClick={() => alert("这里还没有东西")}
            />
          </Space>
        </div>
      </div>
    </Header>
  );
};

export default IndexHeader;
