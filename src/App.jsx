import React from "react";
import StandardUnit from "./pages/StandardUnit";
import MetricUnit from "./pages/MetricUnit";
import { Redirect, Route, Switch } from "react-router-dom";
import BMI from "./old-bmi-calculator/BMI";
import Height from "./pages/Height";
import Weight from "./pages/Weight";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/metric-unit" />} />
      <Route exact path="/metric-unit" component={MetricUnit} />
      <Route exact path="/standard-unit" component={StandardUnit} />
      <Route exact path="/height" component={Height} />
      <Route exact path="/weight" component={Weight} />
      <Route exact path="/old-bmi-calculator" component={BMI} />
      <Route exact render={() => <h1>404</h1>} />
    </Switch>
  );
};

export default App;
