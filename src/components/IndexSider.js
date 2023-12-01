import React from "react";
import { LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "../styles/IndexSider.css";

const { Sider } = Layout;

const IndexSider = () => {
  const navigate = useNavigate(); // 在组件函数体内使用 useHistory

  const siderItems = [
    {
      key: "sub1",
      label: "分组 1",
      icon: <LaptopOutlined />,
      children: [
        {
          key: 1,
          label: "分页 1",
          onClick: () => navigate("/"),
        },
        {
          key: 2,
          label: "分页 2",
          onClick: () => navigate("/LoginForm"),
        },
        {
          key: 3,
          label: "回到登入页",
          onClick: () => navigate("/LoginForm"),
        },
      ],
    },
    {
      key: "sub2",
      label: "分组 2",
      icon: <NotificationOutlined />,
      children: [
        {
          key: 4,
          label: "分页 4",
        },
        {
          key: 5,
          label: "分页 5",
        },
        {
          key: 6,
          label: "分页 6",
        },
      ],
    },
  ];

  return (
    <Sider>
      <Menu
        className="indexSider"
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        items={siderItems}
      />
    </Sider>
  );
};

export default IndexSider;
