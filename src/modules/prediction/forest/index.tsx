import { Col, Divider, Row, Select, Table, Typography } from "antd";
import React, { useState } from "react";
import { forest_1 } from "./forest_1";
import { forest_2 } from "./forest_2";

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
    accuracy: 0.61,
    data: forest_1,
  },
  balanced_subsample: {
    accuracy: 0.67,
    data: forest_2,
  },
};

const RandomForest = () => {
  const [classWeight, setClassWeight] = useState("balanced");
  const handleChangeMulti = (value) => {
    setClassWeight(value);
  };
  return (
    <>
      <Divider orientation="left">Random Forest</Divider>
      <Row>
        <Col span={12}>
          <h4>class_weight</h4>
          <p>
            {`Note that for multioutput (including multilabel) weights should be defined for each class of every column in its own dict. For example, for four-class multilabel classification weights should be [{0: 1, 1: 1}, {0: 1, 1: 5}, {0: 1, 1: 1}, {0: 1, 1: 1}] instead of [{1:1}, {2:5}, {3:1}, {4:1}].\n`}
          </p>
          <p>
            The “balanced” mode uses the values of y to automatically adjust
            weights inversely proportional to class frequencies in the input
            data as n_samples / (n_classes * np.bincount(y))
          </p>
          <p>
            For multi-output, the weights of each column of y will be
            multiplied.
          </p>
          <p>
            Note that these weights will be multiplied with sample_weight
            (passed through the fit method) if sample_weight is specified.
          </p>
          <Select
            defaultValue={classWeight}
            style={{ width: 120 }}
            onChange={handleChangeMulti}
          >
            <Option value="balanced_subsample">balanced_subsample</Option>
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
export default RandomForest;
