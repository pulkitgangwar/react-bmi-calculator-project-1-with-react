import React from "react";
import swal from "@sweetalert/with-react";
import MetricUnitForm from "../components/MetricUnitForm";
import getBmi from "../utils/getBmi";
import getCategory from "../utils/getCategory";
import Toggle from "../components/Toggle";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Metric Unit BMI Calculator &ndash; BMI Calculator </title>
        <meta name="description" content="Calculate BMI with metric unit." />
      </Helmet>
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
