import { Col, Divider, Row, Select, Typography } from "antd";
import React, { useState } from "react";

const { Text } = Typography;
const { Option } = Select;

const constants = [
  {
    solver: "saga",
    miltiClass: "multinomial",
    accuracy: 0.66,
  },
  {
    solver: "saga",
    miltiClass: "auto",
    accuracy: 0.62,
  },
  {
    solver: "saga",
    miltiClass: "ovr",
    accuracy: 0.63,
  },
  {
    solver: "liblinear",
    miltiClass: "ovr",
    accuracy: 0.65,
  },
  {
    solver: "liblinear",
    miltiClass: "multinomial",
    accuracy: "Solver liblinear does not support a multinomial backend.",
  },
  {
    solver: "liblinear",
    miltiClass: "auto",
    accuracy: 0.64,
  },
];

const LogisticRegression = () => {
  const [multiClass, setMultiClass] = useState("multinomial");
  const [solver, setSolver] = useState("saga");
  const accuracy = constants.filter(
    (item) => item.miltiClass === multiClass && item.solver === solver
  )[0]?.accuracy;

  const handleChangeMulti = (value) => {
    setMultiClass(value);
  };

  const handleChangeSolver = (value) => {
    setSolver(value);
  };

  return (
    <>
      <Divider orientation="left">Logistic regression</Divider>
      <Row>
        <Col span={12}>
          <h4>multi_class</h4>
          <p>
            If the option chosen is ‘ovr’, then a binary problem is fit for each
            label. For ‘multinomial’ the loss minimised is the multinomial loss
            fit across the entire probability distribution, even when the data
            is binary. ‘multinomial’ is unavailable when solver=’liblinear’.
            ‘auto’ selects ‘ovr’ if the data is binary, or if
            solver=’liblinear’, and otherwise selects ‘multinomial’.
          </p>
          <Select
            defaultValue={multiClass}
            style={{ width: 120 }}
            onChange={handleChangeMulti}
          >
            <Option value="auto">auto</Option>
            <Option value="ovr">ovr</Option>
            <Option value="multinomial">multinomial</Option>
          </Select>
        </Col>
        <Col span={12}>
          <h4>solver</h4>
          <p>
            Algorithm to use in the optimization problem.
            <li>
              For small datasets, ‘liblinear’ is a good choice, whereas ‘sag’
              and ‘saga’ are faster for large ones.
            </li>
            <li>penalty ‘saga’ also supports ‘elasticnet’</li>
          </p>
          <Select
            defaultValue={solver}
            style={{ width: 120 }}
            onChange={handleChangeSolver}
          >
            <Option value="liblinear">liblinear</Option>
            <Option value="saga">saga</Option>
          </Select>
        </Col>
      </Row>
      <div style={{ paddingTop: 25 }}>
        {typeof accuracy === "string" ? (
          <Text style={{ fontSize: "16px" }} type="danger">
            {accuracy}
          </Text>
        ) : (
          <Text style={{ fontSize: "16px" }} type="success">
            {`Accuracy of model: ${accuracy}`}
          </Text>
        )}
      </div>
    </>
  );
};
export default LogisticRegression;
