import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Button from "./Button";

const MetricUnitForm = ({ onMetricUnitFormSubmit }) => {
  return (
    <div className="metricunitform__form">
      <div className="metricunitform__input--wrapper">
        <Input
          type="text"
          placeholder="ENTER YOUR HEIGHT IN METERS(M)"
          label="HEIGHT(METER)"
          onChange={() => {}}
          value=""
          error=""
        />
      </div>

      <div className="metricunitform__input--wrapper">
        <Input
          type="text"
          placeholder="ENTER YOUR WEIGHT IN KILOGRAMS(kg)"
          label="WEIGHT(KILOGRAMS)"
          onChange={() => {}}
          value=""
          error=""
        />
      </div>

      <Button
        text="CALCULATE"
        onButtonClick={onMetricUnitFormSubmit}
        disabled={false}
      />
    </div>
  );
};

MetricUnitForm.propTypes = {
  onMetricUnitFormSubmit: PropTypes.func.isRequired,
};

export default MetricUnitForm;
