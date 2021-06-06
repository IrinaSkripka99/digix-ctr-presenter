// import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import { createBrowserHistory } from "history";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import MainView from "./modules/ud-ui/components/main-view";

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router>
      <MainView />
    </Router>
  );
};

export default App;
