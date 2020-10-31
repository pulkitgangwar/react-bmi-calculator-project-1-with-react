import React, { useState, useEffect } from "react";
import Back from "./Back";
import Input from "./Input";

const HeightForm = () => {
  const [centimeter, setCentimeter] = useState("");
  const [meter, setMeter] = useState("");
  const [inches, setInches] = useState("");
  const [feet, setFeet] = useState("");
  const [errors, setErrors] = useState({
    centimeter: "",
    meter: "",
    inches: "",
    feet: "",
  });

  const onCentimeterChange = (event) => {
    const value = event.target.value;
    setCentimeter(value);

    if (isNaN(value) || parseFloat(value) >= 9999) {
      setErrors({
        centimeter: "*please enter valid value",
        meter: "",
        inches: "",
        feet: "",
      });
      return;
    }
    setMeter(value / 100);
    setInches(value / 2.54);
    setFeet(value / 30.48);
    setErrors({
      centimeter: "",
      meter: "",
      inches: "",
      feet: "",
    });
  };
  const onMeterChange = (event) => {
    const value = event.target.value;
    setMeter(value.toString());

    if (isNaN(value) || parseFloat(value) >= 9999) {
      setErrors({
        centimeter: "",
        meter: "*please enter valid value",
        inches: "",
        feet: "",
      });
      return;
    }
    setCentimeter(value * 100);
    setInches(value * 39.37);
    setFeet(value * 3.281);
    setErrors({
      centimeter: "",
      meter: "",
      inches: "",
      feet: "",
    });
  };
  const onInchesChange = (event) => {
    const value = event.target.value;
    setInches(value);
    if (isNaN(value) || parseFloat(value) >= 9999) {
      setErrors({
        centimeter: "",
        meter: "",
        inches: "*please enter valid value",
        feet: "",
      });
      return;
    }
    setMeter(value / 39.37);
    setCentimeter(value * 2.54);
    setFeet(value / 12);
    setErrors({
      centimeter: "",
      meter: "",
      inches: "",
      feet: "",
    });
  };
  const onFeetChange = (event) => {
    const value = event.target.value;
    setFeet(value);
    if (isNaN(value) || parseFloat(value) >= 9999) {
      setErrors({
        centimeter: "",
        meter: "",
        inches: "",
        feet: "*please enter valid value",
      });
      return;
    }
    setInches(value * 12);
    setMeter(value / 3.281);
    setCentimeter(value * 30.48);
    setErrors({
      centimeter: "",
      meter: "",
      inches: "",
      feet: "",
    });
  };

  return (
    <div className="heightform__form">
      <div className="heightform__input--wrapper">
        <Input
          type="text"
          placeholder="ENTER VALUE IN CENTIMETER(CM)"
          label="CENTIMETER(CM)"
          onChange={onCentimeterChange}
          value={centimeter}
          error={errors.centimeter}
        />
      </div>

      <div className="heightform__input--wrapper">
        <Input
          type="text"
          placeholder="ENTER VALUE IN METER(M)"
          label="METER(M)"
          onChange={onMeterChange}
          value={meter}
          error={errors.meter}
        />
      </div>
      <div className="heightform__input--wrapper">
        <Input
          type="text"
          placeholder="ENTER VALUE IN INCHES"
          label="INCHES"
          onChange={onInchesChange}
          value={inches}
          error={errors.inches}
        />
      </div>
      <div className="heightform__input--wrapper">
        <Input
          type="text"
          placeholder="ENTER VALUE IN FEET"
          label="FEET"
          onChange={onFeetChange}
          value={feet}
          error={errors.feet}
        />
      </div>
      <div className="heightform__back">
        <Back text="BMI Calculator" link="/metric-unit" />
      </div>
    </div>
  );
};

export default HeightForm;
