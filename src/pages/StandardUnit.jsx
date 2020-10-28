import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

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

        <div className="standardunit__form">
          <div className="standardunit__input--wrapper">
            <Input
              type="text"
              placeholder="ENTER YOUR HEIGHT IN FEET"
              label="HEIGHT(FEET)"
              onChange={() => {}}
              value=""
              error=""
            />
          </div>
          <div className="standardunit__input--wrapper">
            <Input
              type="text"
              placeholder="INCHES"
              label="INCHES"
              onChange={() => {}}
              value=""
              error=""
            />
          </div>

          <div className="standardunit__input--wrapper">
            <Input
              type="text"
              placeholder="ENTER YOUR WEIGHT IN POUNDS"
              label="WEIGHT(POUNDS)"
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

export default StandardUnit;
