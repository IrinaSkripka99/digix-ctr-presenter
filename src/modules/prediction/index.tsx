import { Divider, Row, Select, Typography } from "antd";
import React, { useState } from "react";
import RandomForest from "./forest";
import Keras from "./keras";
import LogisticRegression from "./logistic";
import SGD from "./sgd";

const { Text } = Typography;
const { Option } = Select;

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
      {/* <Select
        defaultValue={testSize}
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="0.25">0.25</Option>
        <Option value="0.3">0.3</Option>
        <Option value="0.45">0.45</Option>
      </Select> */}
      <LogisticRegression />
      <SGD />
      <RandomForest />
      <Divider orientation="left">Decision tree</Divider>
      <Row>
        <Text style={{ fontSize: 16 }} type="success">
          Accuracy of model: 0.8349
        </Text>
      </Row>
      <Divider orientation="left">XGBoost</Divider>
      <Row>
        <Text style={{ fontSize: 16 }} type="success">
          Accuracy of model: 0.5893
        </Text>
      </Row>
      <Divider orientation="left">LightGBM</Divider>
      <Row>
        <Text style={{ fontSize: 16 }} type="success">
          Accuracy of model: 0.6202
        </Text>
      </Row>
      <Keras />
      <Divider orientation="left">Stacking</Divider>
      <Row>
        <Text style={{ fontSize: 16 }} type="success">
          Accuracy of model: 0.92
        </Text>
      </Row>
    </div>
  );
};
export default PredictionView;
