import React from "react";
import { NavLink } from "react-router-dom";

const Toggle = () => {
  return (
    <div className="toggle">
      <NavLink
        to="/standard-unit"
        tabIndex={0}
        activeClassName="toggle--active"
        className="toggle__menu"
      >
        STANDARD UNIT
      </NavLink>
      <NavLink
        to="/metric-unit"
        tabIndex={0}
        activeClassName="toggle--active"
        className="toggle__menu"
      >
        METRIC UNIT
      </NavLink>
    </div>
  );
};

export default Toggle;
