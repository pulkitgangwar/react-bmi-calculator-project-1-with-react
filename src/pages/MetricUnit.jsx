import React from "react";
import swal from "@sweetalert/with-react";
import MetricUnitForm from "../components/MetricUnitForm";
import getBmi from "../utils/getBmi";
import getCategory from "../utils/getCategory";
import Toggle from "../components/Toggle";

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
        <MetricUnitForm onMetricUnitFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default MetricUnit;
