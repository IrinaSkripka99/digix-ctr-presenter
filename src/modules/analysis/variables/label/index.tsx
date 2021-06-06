import React from "react";
import label from "./img/label.png";

const Label = () => {
  return (
    <div>
      <img width={350} height={250} src={label} />
      <p>
        The label distribution is imbalance. But it is expected. This means CTR
        in this dataset is around 3.5% which is better than the average CTR
        number googled.
      </p>
    </div>
  );
};
export default Label;
