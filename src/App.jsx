import React from "react";
import StandardUnit from "./pages/StandardUnit";
import MetricUnit from "./pages/MetricUnit";
import { Redirect, Route, Switch } from "react-router-dom";
import BMI from "./old-bmi-calculator/BMI";
import Height from "./pages/Height";
import Weight from "./pages/Weight";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet defaultTitle="BMI Calculator">
        <meta
          name="description"
          content="Standard Body Mass Index calculator."
        />
        <meta property="og:title" content="BMI Calculator" />
        <meta
          property="og:description"
          content="Standard Body Mass Index calculator."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://bmi-calculator-01.netlify.com"
        />
        {/* <!-- <meta property="og:image" content="" /> --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="BMI Calculator" />
        <meta
          property="twitter:description"
          content="Standard Body Mass Index calculator."
        />
        <meta property="twitter:creator" content="@_PulkitGangwar" />
        {/* <!-- <meta property="twitter:image" content="" /> --> */}
      </Helmet>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/metric-unit" />} />
        <Route exact path="/metric-unit" component={MetricUnit} />
        <Route exact path="/standard-unit" component={StandardUnit} />
        <Route exact path="/height" component={Height} />
        <Route exact path="/weight" component={Weight} />
        <Route exact path="/old-bmi-calculator" component={BMI} />
        <Route exact render={() => <h1>404</h1>} />
      </Switch>
    </>
  );
};

export default App;
