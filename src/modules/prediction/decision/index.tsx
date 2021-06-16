import { Col, Divider, Row, Select, Typography } from "antd";
import React, { useState } from "react";

const { Text } = Typography;
const { Option } = Select;

const constants = {
  balanced: 0.61,
  balanced_subsample: 0.9,
};

const RandomForest = () => {
  const [classWeight, setClassWeight] = useState("balanced");
  const handleChangeMulti = (value) => {
    setClassWeight(value);
  };
  return (
    <>
      <Divider orientation="left">Decision tree</Divider>
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
      <div style={{ paddingTop: 25 }}>
        <Text style={{ fontSize: 16 }} type="success">
          Evaluating the model: {constants[classWeight]}
        </Text>
      </div>
    </>
  );
};
export default RandomForest;
