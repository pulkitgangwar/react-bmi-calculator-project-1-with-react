import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Button from "./Button";

const MetricUnitForm = ({ onMetricUnitFormSubmit }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [errors, setErrors] = useState({
    height: "",
    weight: "",
  });

  useEffect(() => {
    if (!localStorage.getItem("metricUnit")) {
      localStorage.setItem(
        "metricUnit",
        JSON.stringify({
          height: "",
          weight: "",
        })
      );
    } else {
      const data = JSON.parse(localStorage.getItem("metricUnit"));
      setHeight(data.height);
      setWeight(data.weight);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "metricUnit",
      JSON.stringify({
        height,
        weight,
      })
    );
  }, [height, weight]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!height || !weight) {
      setErrors({ height: "*required field", weight: "*required field" });
    } else if (isNaN(parseInt(height))) {
      setErrors({ height: "*please enter valid height", weight: "" });
    } else if (isNaN(parseInt(weight))) {
      setErrors({ weight: "*please enter valid weight", height: "" });
    } else {
      setErrors({ weight: "", height: "" });
      onMetricUnitFormSubmit(height, weight);
    }
  };

  return (
    <div className="metricunitform__form">
      <div className="metricunitform__input--wrapper">
        <Input
          type="text"
          placeholder="ENTER YOUR HEIGHT IN METERS(M)"
          label="HEIGHT(METER)"
          onChange={(event) => {
            setHeight(event.target.value);
          }}
          value={height}
          error={errors.height}
        />
      </div>

      <div className="metricunitform__input--wrapper">
        <Input
          type="text"
          placeholder="ENTER YOUR WEIGHT IN KILOGRAMS(kg)"
          label="WEIGHT(KILOGRAMS)"
          onChange={(event) => {
            setWeight(event.target.value);
          }}
          value={weight}
          error={errors.weight}
        />
      </div>

      <Button text="CALCULATE" onButtonClick={handleSubmit} disabled={false} />
    </div>
  );
};

MetricUnitForm.propTypes = {
  onMetricUnitFormSubmit: PropTypes.func.isRequired,
};

export default MetricUnitForm;
