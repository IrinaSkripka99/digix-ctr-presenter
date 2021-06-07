import { Divider, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const RandomForest = () => {
  return (
    <>
      <Divider orientation="left">Random Forest</Divider>
      <div>
        <Text style={{ fontSize: 16 }} type="success">
          Accuracy of model: 0.6137
        </Text>
      </div>
    </>
  );
};
export default RandomForest;
