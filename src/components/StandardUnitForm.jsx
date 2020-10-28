import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Button from "./Button";

const StandardUnitForm = ({ onStandardUnitFormSubmit }) => {
  return (
    <div className="standardunitform__form">
      <div className="standardunitform__input--wrapper">
        <Input
          type="text"
          placeholder="ENTER YOUR HEIGHT IN FEET"
          label="HEIGHT(FEET)"
          onChange={() => {}}
          value=""
          error=""
        />
      </div>
      <div className="standardunitform__input--wrapper">
        <Input
          type="text"
          placeholder="INCHES"
          label="INCHES"
          onChange={() => {}}
          value=""
          error=""
        />
      </div>

      <div className="standardunitform__input--wrapper">
        <Input
          type="text"
          placeholder="ENTER YOUR WEIGHT IN POUNDS"
          label="WEIGHT(POUNDS)"
          onChange={() => {}}
          value=""
          error=""
        />
      </div>

      <Button
        text="CALCULATE"
        onButtonClick={onStandardUnitFormSubmit}
        disabled={false}
      />
    </div>
  );
};

StandardUnitForm.propTypes = {
  onStandardUnitFormSubmit: PropTypes.func.isRequired,
};

export default StandardUnitForm;
