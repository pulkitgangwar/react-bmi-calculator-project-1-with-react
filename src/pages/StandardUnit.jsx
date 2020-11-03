import React from "react";
import StandardUnitForm from "../components/StandardUnitForm";
import getBmi from "../utils/getBmi";
import getCategory from "../utils/getCategory";
import swal from "@sweetalert/with-react";
import Toggle from "../components/Toggle";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Imperial Unit BMI Calculator &ndash; BMI Calculator </title>
        <meta name="description" content="Calculate BMI with imperial unit." />
      </Helmet>
      <div className="standardunit__card">
        <Toggle
          primaryToggle={{
            title: "standard unit",
            link: "/standard-unit",
          }}
          secondaryToggle={{
            title: "metric unit",
            link: "/metric-unit",
          }}
        />
        <StandardUnitForm onStandardUnitFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default StandardUnit;
