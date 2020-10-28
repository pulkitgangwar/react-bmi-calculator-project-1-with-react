import React from "react";
import { NavLink } from "react-router-dom";
import MetricUnitForm from "../components/MetricUnitForm";

const MetricUnit = () => {
  return (
    <div className="metricunit">
      <div className="metricunit__card">
        <div className="metricunit__toggle">
          <NavLink
            to="/standard-unit"
            tabIndex={0}
            activeClassName="metricunit__toggle--active"
            className="metricunit__toggle--su metricunit__toggle__menu"
          >
            STANDARD UNIT
          </NavLink>
          <NavLink
            to="/metric-unit"
            tabIndex={0}
            activeClassName="metricunit__toggle--active"
            className="metricunit__toggle--mu metricunit__toggle__menu"
          >
            METRIC UNIT
          </NavLink>
        </div>
        <MetricUnitForm
          onMetricUnitFormSubmit={() => {
            console.log("hello");
          }}
        />
      </div>
    </div>
  );
};

export default MetricUnit;
