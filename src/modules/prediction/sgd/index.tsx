import { Col, Divider, Row, Select, Typography } from "antd";
import React, { useState } from "react";

const { Text } = Typography;
const { Option } = Select;

const constants = {
  balanced: 0.85,
  none: 0.99,
};

const SGD = () => {
  const [classWeight, setClassWeight] = useState("balanced");
  const handleChangeMulti = (value) => {
    setClassWeight(value);
  };
  return (
    <>
      <Divider orientation="left">SGD with Logistic regression</Divider>
      <Row>
        <Col span={12}>
          <h4>class_weight</h4>
          <p>
            The “balanced” mode uses the values of y to automatically adjust
            weights inversely proportional to class frequencies in the input
            data as n_samples / (n_classes * np.bincount(y)).
          </p>
          <Select
            defaultValue={classWeight}
            style={{ width: 120 }}
            onChange={handleChangeMulti}
          >
            <Option value="none">none</Option>
            <Option value="balanced">balanced</Option>
          </Select>
        </Col>
      </Row>
      <div style={{ paddingTop: 25 }}>
        <Text style={{ fontSize: 16 }} type="success">
          Evaluating the model: {constants[classWeight]}
        </Text>
      </div>
    </>
  );
};
export default SGD;
