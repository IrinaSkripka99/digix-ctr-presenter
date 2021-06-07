import { Divider, Tabs } from "antd";
import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import { allVariables } from "../../../ud-ui/constants";
import "./index.css";
import Label from "../../variables/label";
import constants from "../../variables/constants";

const { TabPane } = Tabs;

const AnalysisVariablesView = () => {
  const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
      {({ style }) => (
        <DefaultTabBar
          {...props}
          className="site-custom-tab-bar"
          style={{ ...style }}
        />
      )}
    </Sticky>
  );

  return (
    <div>
      <Divider style={{ color: "black" }} orientation="left">
        Analysis each variable
      </Divider>
      <StickyContainer>
        <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
          {allVariables.map((item) => {
            if (item === "label")
              return (
                <TabPane tab={item} key={item}>
                  <Label />
                </TabPane>
              );
            return (
              <TabPane tab={item} key={item}>
                <h3>Analyze {item}</h3>
                <div>
                  <img
                    alt="count"
                    src={constants[`${item}_count`]}
                    width={400}
                    height={300}
                  />
                </div>
                <div>
                  <img
                    alt="ctr"
                    src={constants[`${item}_ctr`]}
                    width={400}
                    height={300}
                  />
                </div>
                <div>
                  <img
                    alt="click"
                    src={constants[`${item}_click`]}
                    width={400}
                    height={300}
                  />
                </div>
              </TabPane>
            );
          })}
        </Tabs>
      </StickyContainer>
    </div>
  );
};
export default AnalysisVariablesView;
