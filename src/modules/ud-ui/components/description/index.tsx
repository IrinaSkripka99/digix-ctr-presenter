import React from "react";
import { columns } from "../../constants";
import { train_fields } from "../../../../data/train_fields";
import { test_fields } from "../../../../data/test_fields";
import descr from "./img/descr.png";
import { Divider, Row, Col, Tabs, Table } from "antd";

const { TabPane } = Tabs;

const DescriptionView = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", color: "darkslateblue" }}>
        2020 DIGIX Advertisement CTR Prediction
      </h2>
      <p>
        Advertisement CTR prediction is the key problem in the area of computing
        advertising. Increasing the accuracy of Advertisement CTR prediction is
        critical to improve the effectiveness of precision marketing. In this
        competition, we release big advertising datasets that are anonymized.
        Based on the datasets, contestants are required to build Advertisement
        CTR prediction models. The aim of the event is to find talented
        individuals to promote the development of Advertisement CTR prediction
        algorithms.
        <a href="https://www.youtube.com/watch?v=9dmLxMNgCGM">
          <i> more</i>
        </a>
      </p>
      <Divider style={{ color: "black" }} orientation="right">
        Usage Description
      </Divider>
      <Row>
        <Col span={12} style={{ textAlign: "center" }}>
          <img src={descr} width={250} height={250} alt="description" />
        </Col>
        <Col span={12}>
          <p>
            The UI/UX for the app glides using the <b>Sidebar</b> to the
            left.Access all the features of the app using it.The web app comes
            with the features including
          </p>
          <ol>
            <li>
              Data Analyses using <i> Data Visulations</i>
            </li>
            <li> Prediction</li>
            <ol>
              <li>Data Overview</li>
              <li>
                The datasets contain the <i>advertising behavior</i> data
                collected from seven consecutive days, including a training
                dataset and a testing dataset.
              </li>
            </ol>
          </ol>
        </Col>
      </Row>
      <Divider orientation="left">Data Explorer</Divider>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Train data" key="1">
          <Table columns={columns} dataSource={train_fields} size="small" />
        </TabPane>
        <TabPane tab="Test data" key="2">
          <Table columns={columns} dataSource={test_fields} size="small" />
        </TabPane>
      </Tabs>
    </>
  );
};

export default DescriptionView;
