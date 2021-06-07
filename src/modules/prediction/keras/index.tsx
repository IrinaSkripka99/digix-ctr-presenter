import { Divider, Select, Typography } from "antd";
import React, { useState } from "react";

const { Text } = Typography;
const { Option } = Select;

const constants = {
  1: 0.9793,
  2: 0.7606,
  3: 0.7755,
  6: 0.7755,
  10: 0.7755,
};

const Keras = () => {
  const [epoch, setEpoch] = useState(10);

  const handleChange = (value) => {
    setEpoch(value);
  };

  return (
    <>
      <Divider orientation="left">Keras</Divider>
      <Select
        defaultValue={epoch}
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="6">6</Option>
        <Option value="10">10</Option>
      </Select>
      <div>
        <Text style={{ fontSize: 16 }} type="success">
          Accuracy of model: {constants[epoch]}
        </Text>
      </div>
    </>
  );
};
export default Keras;
