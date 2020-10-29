import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Button from "./Button";

const StandardUnitForm = ({ onStandardUnitFormSubmit }) => {
  const [height, setHeight] = useState("");
  const [heightInInches, setHeightInInches] = useState("");
  const [weight, setWeight] = useState("");
  const [errors, setErrors] = useState({
    height: "",
    heightInInches: "",
    weight: "",
  });

  useEffect(() => {
    if (!localStorage.getItem("imperialUnit")) {
      localStorage.setItem(
        "imperialUnit",
        JSON.stringify({
          height: "",
          heightInInches: "",
          weight: "",
        })
      );
    } else {
      const data = JSON.parse(localStorage.getItem("imperialUnit"));
      setHeight(data.height);
      setHeightInInches(data.heightInInches);
      setWeight(data.weight);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "imperialUnit",
      JSON.stringify({
        height,
        weight,
        heightInInches,
      })
    );
  }, [height, weight, heightInInches]);

  const handleSubmit = (event) => {
    if (!height || !weight) {
      setErrors({
        height: "*required field",
        weight: "*required field",
        heightInInches: "",
      });
    } else if (isNaN(parseInt(height))) {
      setErrors({
        height: "*please enter valid height",
        weight: "",
        heightInInches: "",
      });
    } else if (isNaN(parseInt(weight))) {
      setErrors({
        weight: "*please enter valid weight",
        height: "",
        heightInInches: "",
      });
    } else if (heightInInches && isNaN(parseInt(heightInInches))) {
      setErrors({
        heightInInches: "*please enter valid height in inch",
        weight: "",
        height: "",
      });
    } else {
      setErrors({ height: "", weight: "", heightInInches: "" });
      onStandardUnitFormSubmit(height, heightInInches || 0, weight);
    }
  };

  return (
    <div className="standardunitform__form">
      <div className="standardunitform__input--wrapper">
        <Input
          type="text"
          placeholder="ENTER YOUR HEIGHT IN FEET"
          label="HEIGHT(FEET)"
          onChange={(event) => {
            setHeight(event.target.value);
          }}
          value={height}
          error={errors.height}
        />
      </div>
      <div className="standardunitform__input--wrapper">
        <Input
          type="text"
          placeholder="INCHES"
          label="INCHES"
          onChange={(event) => {
            setHeightInInches(event.target.value);
          }}
          value={heightInInches}
          error={errors.heightInInches}
        />
      </div>

      <div className="standardunitform__input--wrapper">
        <Input
          type="text"
          placeholder="ENTER YOUR WEIGHT IN POUNDS"
          label="WEIGHT(POUNDS)"
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

StandardUnitForm.propTypes = {
  onStandardUnitFormSubmit: PropTypes.func.isRequired,
};

export default StandardUnitForm;
