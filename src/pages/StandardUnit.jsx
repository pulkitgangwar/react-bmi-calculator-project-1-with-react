import React from "react";
import { NavLink } from "react-router-dom";
import StandardUnitForm from "../components/StandardUnitForm";
import getBmi from "../utils/getBmi";
import getCategory from "../utils/getCategory";
import swal from "@sweetalert/with-react";

const StandardUnit = () => {
  const handleFormSubmit = (height, heightInInches, weight) => {
    const bmi = getBmi({ height, heightInInches, weight }, "imperialUnit");
    const { category } = getCategory(bmi);
    swal({
      title: "RESULT",
      text: `${bmi} kg/m(2)  -  ${category}`,
    });
  };

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
        <StandardUnitForm onStandardUnitFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default StandardUnit;
