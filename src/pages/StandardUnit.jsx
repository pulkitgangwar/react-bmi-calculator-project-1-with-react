import React from "react";
import { NavLink } from "react-router-dom";
import StandardUnitForm from "../components/StandardUnitForm";

const StandardUnit = () => {
  return (
    <div className="standardunit">
      <div className="standardunit__card">
        <div className="standardunit__toggle">
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
        <StandardUnitForm onStandardUnitFormSubmit={() => {}} />
      </div>
    </div>
  );
};

export default StandardUnit;
