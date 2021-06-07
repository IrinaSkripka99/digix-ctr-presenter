import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import * as S from "./style";

const LeftMenu = () => {
  return (
    <Menu
      style={{ background: "transparent", paddingTop: "20%" }}
      theme="dark"
      defaultOpenKeys={["/"]}
      defaultSelectedKeys={["/"]}
      mode="inline"
    >
      <S.Logo>
        <img src={logo} width="70" height="70" alt="logo" />
      </S.Logo>
      <S.MenuItem key="/" icon={<MailOutlined />}>
        General information
        <Link to="/digix-ctr-presenter/" />
      </S.MenuItem>
      <S.MenuItem key="/analysis" icon={<AppstoreOutlined />}>
        Analysis
        <Link to="/digix-ctr-presenter/analysis" />
      </S.MenuItem>
      <S.MenuItem key="/prediction" icon={<SettingOutlined />}>
        Prediction
        <Link to="/digix-ctr-presenter/prediction" />
      </S.MenuItem>
    </Menu>
  );
};

export default LeftMenu;
