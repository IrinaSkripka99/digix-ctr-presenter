import React from "react";
import AnalysisVariablesView from "./components/analysis-each-variable";
import EDAView from "./components/eda";

const AnalysisView = () => {
  return (
    <div>
      <EDAView />
      <AnalysisVariablesView />
    </div>
  );
};
export default AnalysisView;
