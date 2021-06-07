import { Col, Divider, Row, Select, Table, Typography } from "antd";
import React, { useState } from "react";
import RandomForest from "./forest";
import Keras from "./keras";
import LogisticRegression from "./logistic";
import SGD from "./sgd";
import dataSource from "./stacking";
import lightData from "./light_gbm";
import descTree from "./desc_tree";
import xgbData from "./xgb";

const { Text } = Typography;
const { Option } = Select;
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
  const [testSize, setTestSize] = useState(0.25);

  const handleChange = (value) => {
    setTestSize(value);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "darkslateblue" }}>
        Prediction
      </h2>
      <p>test size</p>
      <Select
        defaultValue={testSize}
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="0.25">0.25</Option>
        <Option value="0.3">0.3</Option>
        <Option value="0.45">0.45</Option>
      </Select>
      <Divider orientation="left">What is regression analysis?</Divider>
      <Row>
        <p>
          Regression analysis is a type of predictive modeling technique which
          is used to find the relationship between a dependent variable (usually
          known as the “Y” variable) and either one independent variable (the
          “X” variable) or a series of independent variables. When two or more
          independent variables are used to predict or explain the outcome of
          the dependent variable, this is known as multiple regression.
          Regression analysis can be used for three things:
        </p>
      </Row>
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
            Accuracy of model: 0.8349
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
            Accuracy of model: 0.5893
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
            Accuracy of model: 0.6202
          </Text>
        </Col>
      </Row>
      <Keras />
      <Divider orientation="left">Stacking</Divider>
      <Row>
        <Col span={12}>
          <Table columns={columns} size="small" dataSource={dataSource} />
        </Col>
        <Col span={12}>
          <Text style={{ fontSize: 16, marginLeft: 100 }} type="success">
            Accuracy of model: 0.98
          </Text>
        </Col>
      </Row>
    </div>
  );
};
export default PredictionView;
