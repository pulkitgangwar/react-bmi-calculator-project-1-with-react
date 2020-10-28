import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

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

        <div className="metricunit__form">
          <div className="metricunit__input--wrapper">
            <Input
              type="text"
              placeholder="ENTER YOUR HEIGHT IN METERS(M)"
              label="HEIGHT(METER)"
              onChange={() => {}}
              value=""
              error=""
            />
          </div>

          <div className="metricunit__input--wrapper">
            <Input
              type="text"
              placeholder="ENTER YOUR WEIGHT IN KILOGRAMS(kg)"
              label="WEIGHT(KILOGRAMS)"
              onChange={() => {}}
              value=""
              error=""
            />
          </div>

          <Button text="CALCULATE" onButtonClick={() => {}} disabled={false} />
        </div>
      </div>
    </div>
  );
};

export default MetricUnit;
