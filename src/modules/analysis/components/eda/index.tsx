import { Alert, Collapse, Divider, Table } from "antd";
import React from "react";
import { summary } from "../../../../data/summary";
import { summary2 } from "../../../../data/summary2";
import { summaryColumns } from "../../../ud-ui/constants";
const { Panel } = Collapse;

const EDAView = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "darkslateblue" }}>
        Exploratory Data Analysis
      </h2>
      <p>
        This analysis will help to get familiar with dataset and find the
        opportunities to do feature engineering
      </p>
      <Divider style={{ color: "black" }} orientation="left">
        Statistics
      </Divider>
      <Table columns={summaryColumns} dataSource={summary} size="small" />
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Proposed" key="1">
          <Alert
            style={{ margin: "16px 0" }}
            message="Most of the columns are acutallly categorical variables, doesn't
            make sense to looking at those statistics. However, this summary is
            a way to confirm whether those categorical columns are really
            categorical"
          />
          <Table columns={summaryColumns} dataSource={summary2} size="small" />
          <p>
            Seems like even these are numerical variables but they are already
            benn grouped by a different bucket levels. Because there is no
            further explanation, need to make a few assumptions:
            <ol>
              <li>value = -1 equal missing </li>
              <li>value value of app_score is actual score</li>
              <li>device price 1-7 means cheap to expensive</li>
              <li>age 1-7 means young to old</li>
            </ol>
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};
export default EDAView;
