import { Col, Divider, Row, Select, Table, Typography } from "antd";
import React, { useState } from "react";
import { sgd_1 } from "./sgd_1";
import { sgd_2 } from "./sgd_2";

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

const constants = {
  balanced: {
    accuracy: 0.85,
    data: sgd_1,
  },
  none: {
    accuracy: 0.99,
    data: sgd_2,
  },
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
      <Row>
        <Col span={12}>
          <Table
            columns={columns}
            size="small"
            dataSource={constants[classWeight].data}
          />
        </Col>
        <Col span={12}>
          <Text style={{ fontSize: 16, marginLeft: 100 }} type="success">
            Evaluating the model: {constants[classWeight].accuracy}
          </Text>
        </Col>
      </Row>
    </>
  );
};
export default SGD;
