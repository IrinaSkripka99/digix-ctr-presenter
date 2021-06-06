import { Divider, Row, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const PredictionView = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "darkslateblue" }}>
        Prediction
      </h2>
      <Divider orientation="left">What is regression analysis?</Divider>
      <Row>
        <p>
          Regression analysis is a type of predictive modeling technique which
          is used to find the relationship between a dependent variable (usually
          known as the “Y” variable) and either one independent variable (the
          “X” variable) or a series of independent variables. When two or more
          independent variables are used to predict or explain the outcome of
          the dependent variable, this is known as multiple regression.
          Regression analysis can be used for three things:
        </p>
      </Row>
      <Divider orientation="left">Logistic regression</Divider>
      <p>
        Logistic regression is the correct type of analysis to use when you’re
        working with binary data. You know you’re dealing with binary data when
        the output or dependent variable is dichotomous or categorical in
        nature; in other words, if it fits into one of two categories (such as
        “yes” or “no”, “pass” or “fail”, and so on).
      </p>
      <h4>Confusion matrix</h4>
      {/* <img src={lg_matrix} width={380} height={300} /> */}
      <div>
        <Text style={{ fontSize: "16px" }} type="success">
          Accuracy of model: 0.66
        </Text>
      </div>
      <Divider orientation="left">SGD with Logistic regression</Divider>
      <p>
        Stochastic gradient descent (often abbreviated SGD) is an iterative
        method for optimizing an objective function with suitable smoothness
        properties (e.g. differentiable or subdifferentiable). It can be
        regarded as a stochastic approximation of gradient descent optimization,
        since it replaces the actual gradient (calculated from the entire data
        set) by an estimate thereof (calculated from a randomly selected subset
        of the data). Especially in high-dimensional optimization problems this
        reduces the computational burden, achieving faster iterations in trade
        for a lower convergence rate.
      </p>
      <h4>Confusion matrix</h4>
      {/* <img src={sgd_matrix} width={380} height={300} /> */}
      <div>
        <Text style={{ fontSize: 16 }} type="success">
          Accuracy of model: 0.85
        </Text>
      </div>
    </div>
  );
};
export default PredictionView;
