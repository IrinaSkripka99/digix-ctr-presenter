import { Col, Divider, Row, Table, Typography } from "antd";
import React from "react";
import { descTree } from "./desc_tree";
import RandomForest from "./forest";
import Keras from "./keras";
import { lightData } from "./light_gbm";
import LogisticRegression from "./logistic";
import SGD from "./sgd";
import { stackingData } from "./stacking";
import { xgbData } from "./xgb";

const { Text } = Typography;

const columns = [
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "Actual",
    dataIndex: "Actual",
  },
  {
    title: "Predicted",
    dataIndex: "Predicted",
  },
];

const PredictionView = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "darkslateblue" }}>
        Prediction
      </h2>
      <LogisticRegression />
      <SGD />
      <RandomForest />
      <Divider orientation="left">Decision tree</Divider>
      <Row>
        <Col span={12}>
          <Table columns={columns} size="small" dataSource={descTree} />
        </Col>
        <Col span={12}>
          <Text style={{ fontSize: 16, marginLeft: 100 }} type="success">
            Evaluating the model: 0.8349
          </Text>
        </Col>
      </Row>
      <Divider orientation="left">XGBoost</Divider>
      <Row>
        <Col span={12}>
          <Table columns={columns} size="small" dataSource={xgbData} />
        </Col>
        <Col span={12}>
          <Text style={{ fontSize: 16, marginLeft: 100 }} type="success">
            Evaluating the model: 0.5893
          </Text>
        </Col>
      </Row>
      <Divider orientation="left">LightGBM</Divider>
      <Row>
        <Col span={12}>
          <Table columns={columns} size="small" dataSource={lightData} />
        </Col>
        <Col span={12}>
          <Text style={{ fontSize: 16, marginLeft: 100 }} type="success">
            Evaluating the model: 0.6202
          </Text>
        </Col>
      </Row>
      <Keras />
      <Divider orientation="left">Stacking</Divider>
      <Row>
        <Col span={12}>
          <Table columns={columns} size="small" dataSource={stackingData} />
        </Col>
        <Col span={12}>
          <Text style={{ fontSize: 16, marginLeft: 100 }} type="success">
            Evaluating the model: 0.92
          </Text>
        </Col>
      </Row>
    </div>
  );
};
export default PredictionView;
