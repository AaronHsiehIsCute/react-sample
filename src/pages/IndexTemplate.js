import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import AppRouter from "./AppRouter";
import IndexHeader from "../components/IndexHeader";
import IndexSider from "../components/IndexSider";

const { Content } = Layout;

const IndexTemplate = ({ children }) => {
  return (
    <div>
      <IndexHeader />
      <Layout>
        <IndexSider />
        <Layout className="IndexBody">
          <Content className="IndexContent">{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default IndexTemplate;
