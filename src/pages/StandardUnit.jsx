import React from "react";
import StandardUnitForm from "../components/StandardUnitForm";
import getBmi from "../utils/getBmi";
import getCategory from "../utils/getCategory";
import swal from "@sweetalert/with-react";
import Toggle from "../components/Toggle";

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
        <Toggle />
        <StandardUnitForm onStandardUnitFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default StandardUnit;
