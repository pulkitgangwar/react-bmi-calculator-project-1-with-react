import React from "react";
import StandardUnit from "./pages/StandardUnit";
import MetricUnit from "./pages/MetricUnit";
import { Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/metric-unit" />} />
      <Route exact path="/metric-unit" component={MetricUnit} />
      <Route exact path="/standard-unit" component={StandardUnit} />
      <Route exact render={() => <h1>404</h1>} />
    </Switch>
  );
};

export default App;
