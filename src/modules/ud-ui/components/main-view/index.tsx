import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
// import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router";
import AnalysisView from "../../../analysis";
import PredictionView from "../../../prediction";
import DescriptionView from "../description";
import LeftMenu from "../menu";
import "./style.css";

const { Header, Sider, Content } = Layout;

const MainView = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider
        style={{
          background: `linear-gradient(0deg, #4169e1, #6f8ee8)`,
          border: "1px solid grey",
          paddingLeft: 5,
        }}
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <LeftMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 500,
          }}
        >
          <Switch>
            <Route exact path="/" component={DescriptionView} />
            <Route path="/analysis" component={AnalysisView} />
            <Route path="/prediction" component={PredictionView} />
            <Route render={() => <p>Page not found</p>} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainView;
