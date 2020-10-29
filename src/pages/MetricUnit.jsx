import React from "react";
import { NavLink } from "react-router-dom";
import swal from "@sweetalert/with-react";
import MetricUnitForm from "../components/MetricUnitForm";
import getBmi from "../utils/getBmi";
import getCategory from "../utils/getCategory";

const MetricUnit = () => {
  const handleFormSubmit = (height, weight) => {
    const bmi = getBmi({ height, weight }, "metricUnit");
    const { category } = getCategory(bmi);
    swal({
      title: "RESULT",
      text: `${bmi} - ${category}`,
    });
  };

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
        <MetricUnitForm onMetricUnitFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default MetricUnit;
